# Napojení formuláře recenzí na Google Sheets

Formulář na `/recenze` posílá odpovědi do Google tabulky přes **Google Apps Script Web App**.
Nastavení zabere ~5 minut a nevyžaduje žádný server.

## 1. Vytvořte tabulku
1. Otevřete [sheets.new](https://sheets.new) a tabulku pojmenujte např. **OD Videos – Recenze**.
2. Hlavičku sloupců řešit nemusíte – skript ji vytvoří sám při první odpovědi (list `Recenze`).

## 2. Vložte skript
1. V tabulce: **Rozšíření → Apps Script**.
2. Smažte ukázkový obsah `Code.gs` a vložte celý obsah souboru [`Code.gs`](./Code.gs).
3. Uložte (ikona diskety).

## 2b. (Volitelné) E-mailové upozornění
Skript po každé nové recenzi pošle přehled na e-mail v konstantě `NOTIFY_EMAIL`
na začátku [`Code.gs`](./Code.gs):

```js
var NOTIFY_EMAIL = 'od.videomaker@gmail.com';  // '' = neposílat
```

- E-mail chodí z vašeho Google účtu (odesílatel = vy).
- Kvůli tomu si Google při nasazení vyžádá **oprávnění k odesílání e-mailů** – potvrďte ho.
- Když upozornění nechcete, nastavte `NOTIFY_EMAIL = ''`.
- Pozor na denní limit Gmailu (~100 e-mailů/den u běžného účtu); i kdyby se limit vyčerpal, recenze se do tabulky uloží tak jako tak.

## 3. Nasaďte jako webovou aplikaci
1. Vpravo nahoře **Nasadit → Nové nasazení**.
2. U „Vyberte typ" (ozubené kolo) zvolte **Webová aplikace**.
3. Nastavte:
   - **Spustit jako:** *Já* (váš účet)
   - **Kdo má přístup:** **Všichni** (*Anyone*)
4. Klikněte **Nasadit**, odsouhlaste oprávnění (u varování Googlu: *Rozšířené → Přejít na projekt (nebezpečné)* → *Povolit*).
5. Zkopírujte **URL webové aplikace** – končí na `/exec`.

## 4. Vložte URL do konfigurace
V souboru [`../_config.yml`](../_config.yml) najděte řádek:

```yaml
google_script_url: ""
```

a vložte zkopírovanou URL:

```yaml
google_script_url: "https://script.google.com/macros/s/AKfy.../exec"
```

Uložte, **restartujte Jekyll** (změny v `_config.yml` se nenačítají za běhu), commitněte a nahrajte na web. Hotovo – odeslané recenze se objeví v tabulce.

## Ověření
- Otevřete URL `/exec` v prohlížeči – měli byste vidět `{"result":"ok",...}`.
- Vyplňte a odešlete formulář – v listu `Recenze` přibude nový řádek.

## Poznámky
- Formulář odesílá přes `mode: "no-cors"`, takže prohlížeč nečte odpověď skriptu – to je v pořádku, řádek se přesto uloží.
- Když URL necháte prázdnou, formulář funguje jako demo (odpověď se jen vypíše do konzole prohlížeče, nikam se neukládá).
- **Po každé úpravě `Code.gs`** je potřeba znovu **Nasadit → Spravovat nasazení → upravit → Nová verze**, jinak se změny neprojeví.

## Ošetření chyb při odesílání (známé omezení)
Kvůli `mode: "no-cors"` dostane prohlížeč tzv. **neprůhlednou (opaque) odpověď** – nevidí HTTP status ani tělo. To má důsledky pro chování formuláře při chybě:

- **Výpadek sítě** (uživatel offline / skript nedostupný) → JavaScript to zachytí a zobrazí obrazovku **„Odeslání se nezdařilo"** s tlačítkem **Zkusit znovu**. Odpovědi zůstanou vyplněné.
- **Chyba na straně skriptu** (výjimka v `Code.gs`, tj. HTTP 500) → kvůli opaque odpovědi ji **nelze odlišit od úspěchu**, takže se uživateli i tak zobrazí děkovací obrazovka, přestože se řádek neuložil. Data se v tomto případě ztratí bez upozornění.

Proto po nasazení a po každé změně `Code.gs` **ověřte uložení reálným odesláním** (viz sekce *Ověření*) a hlídejte, že v listu `Recenze` řádky skutečně přibývají.

**Jak omezení plně odstranit:** přepnout frontend z `no-cors` na běžný `fetch` a nechat skript vracet CORS hlavičky (`Access-Control-Allow-Origin`), aby prohlížeč mohl přečíst skutečný status a odlišit úspěch od chyby serveru. To je větší zásah do `Code.gs` i do skriptu na `/recenze` a zatím není implementováno – aktuálně se spolehlivě ošetřuje pouze výpadek sítě.
