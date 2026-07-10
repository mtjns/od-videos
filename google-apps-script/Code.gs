/**
 * OD Videos – ukládání recenzí z formuláře /recenze do Google Sheets.
 *
 * Nasazení: viz README.md ve stejné složce.
 * Formulář posílá POST (application/x-www-form-urlencoded) s poli:
 *   kdo, typ, kvalita, cena, faze, zlepseni, oceneni, shrnuti,
 *   zdroj, nps, doporuceni, souhlas, _sent_at
 */

// Pořadí a hlavičky sloupců v tabulce. Klíč = název pole z formuláře.
var COLUMNS = [
  { key: '_sent_at',   label: 'Časová značka' },
  { key: 'kdo',        label: 'Kdo jste' },
  { key: 'typ',        label: 'Typ videa' },
  { key: 'kvalita',    label: 'Kvalita (1–5)' },
  { key: 'cena',       label: 'Cena odpovídala hodnotě' },
  { key: 'faze',       label: 'Prostor pro zlepšení (fáze)' },
  { key: 'zlepseni',   label: 'Co konkrétně zlepšit' },
  { key: 'oceneni',    label: 'Co ocenili' },
  { key: 'shrnuti',    label: 'Shrnutí spolupráce' },
  { key: 'zdroj',      label: 'Jak se o nás dozvěděli' },
  { key: 'nps',        label: 'Doporučili by (1–5)' },
  { key: 'doporuceni', label: 'Komu by nás doporučili' },
  { key: 'souhlas',    label: 'Souhlas s referencí' },
  { key: 'portfolio',  label: 'Souhlas s použitím materiálů (portfolio)' }
];

var SHEET_NAME = 'Recenze';

// Kam poslat upozornění o nové recenzi. Prázdný řetězec = neposílat e-mail.
var NOTIFY_EMAIL = 'od.videomaker@gmail.com';

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(30000); // zabrání souběžnému zápisu na stejný řádek
  try {
    var sheet = getSheet_();
    var params = (e && e.parameter) ? e.parameter : {};

    var row = COLUMNS.map(function (col) {
      if (col.key === '_sent_at') {
        // Použij čas serveru, pokud klient neposlal razítko.
        var iso = params._sent_at;
        return iso ? new Date(iso) : new Date();
      }
      return params[col.key] || '';
    });

    sheet.appendRow(row);
    notify_(params, row[0]); // e-mail selže potichu, zápis do tabulky tím není ohrožen
    return json_({ result: 'success', row: sheet.getLastRow() });
  } catch (err) {
    return json_({ result: 'error', message: String(err) });
  } finally {
    lock.releaseLock();
  }
}

// Pošle přehled nové recenze na NOTIFY_EMAIL.
function notify_(params, sentAt) {
  if (!NOTIFY_EMAIL) return;
  try {
    var kdo = params.kdo || 'Neznámý';
    var subject = 'Nová recenze – ' + kdo;

    var lines = COLUMNS.map(function (col) {
      var val = (col.key === '_sent_at')
        ? Utilities.formatDate(new Date(sentAt), Session.getScriptTimeZone(), 'd.M.yyyy HH:mm')
        : (params[col.key] || '—');
      return col.label + ': ' + val;
    });

    MailApp.sendEmail({
      to: NOTIFY_EMAIL,
      subject: subject,
      replyTo: NOTIFY_EMAIL,
      body: 'Právě dorazila nová recenze přes web:\n\n' + lines.join('\n') +
            '\n\n— automaticky odesláno z formuláře /recenze'
    });
  } catch (mailErr) {
    // Neblokuj uložení recenze kvůli chybě e-mailu (např. denní limit MailApp).
    console.warn('notify_ selhalo: ' + mailErr);
  }
}

// Umožní rychlé ověření v prohlížeči (GET vrátí OK).
function doGet() {
  return json_({ result: 'ok', service: 'OD Videos recenze' });
}

function getSheet_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
  }
  // Založ hlavičku, pokud je list prázdný.
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(COLUMNS.map(function (c) { return c.label; }));
    sheet.getRange(1, 1, 1, COLUMNS.length).setFontWeight('bold');
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function json_(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
