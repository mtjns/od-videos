// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileNav = document.getElementById('mobile-nav');
const line1 = document.getElementById('line1');
const line2 = document.getElementById('line2');
const line3 = document.getElementById('line3');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileNav.classList.toggle('hidden');
        line1.classList.toggle('rotate-45');
        line1.classList.toggle('translate-y-2');
        line2.classList.toggle('opacity-0');
        line3.classList.toggle('-rotate-45');
        line3.classList.toggle('-translate-y-2');
    });
}

// Close mobile menu when links are clicked
if (mobileNav) {
    const mobileLinks = document.querySelectorAll('#mobile-nav button, #mobile-nav a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.classList.add('hidden');
            line1.classList.remove('rotate-45', 'translate-y-2');
            line2.classList.remove('opacity-0');
            line3.classList.remove('-rotate-45', '-translate-y-2');
        });
    });
}

// Smooth scroll for internal links
const scrollBtns = document.querySelectorAll('.scroll-btn');
scrollBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = btn.getAttribute('data-target');
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Logo scroll to top
const logo = document.getElementById('logo');
if (logo) {
    logo.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Scroll to top button
const scrollTopBtn = document.getElementById('scroll-top-btn');
if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add('opacity-100');
            scrollTopBtn.classList.remove('opacity-0', 'pointer-events-none');
        } else {
            scrollTopBtn.classList.remove('opacity-100');
            scrollTopBtn.classList.add('opacity-0', 'pointer-events-none');
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Theme toggle: flip the `.dark` class on <html> and remember the choice.
// Initial theme is set pre-paint by an inline script in the layout head.
const themeToggle = document.getElementById('theme-toggle');
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const isDark = document.documentElement.classList.toggle('dark');
        try {
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        } catch (e) { /* storage unavailable — theme still applies for this session */ }
    });
}

// Follow the OS setting live, but only while the visitor hasn't picked a theme manually.
if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        let stored = null;
        try { stored = localStorage.getItem('theme'); } catch (err) { /* ignore */ }
        if (!stored) {
            document.documentElement.classList.toggle('dark', e.matches);
        }
    });
}

// Fade in on scroll functionality
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all fade-in elements
document.querySelectorAll('.opacity-fade').forEach(el => {
    observer.observe(el);
});

// Newsletter form
const newsletterForm = document.getElementById('newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = newsletterForm.querySelector('input[type="email"]').value;
        alert(`Thank you for subscribing! A confirmation email will be sent to ${email}`);
        newsletterForm.reset();
    });
}

// Add some smooth transitions
document.addEventListener('DOMContentLoaded', () => {
    // Preload images for better performance
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        if (!img.complete) {
            img.addEventListener('load', () => {
                img.classList.add('loaded');
            });
        }
    });
});

// --- Analytics: GoatCounter custom events -----------------------------------
// Fires events through GoatCounter's count.js (loaded in the page head). Events
// are recorded as their own paths with `event: true`. Safely no-ops where
// GoatCounter is absent (local dev / previews) and never throws into the page.
function track(path, title) {
    try {
        if (window.goatcounter && typeof window.goatcounter.count === 'function') {
            window.goatcounter.count({ path: path, title: title || path, event: true });
        }
    } catch (e) { /* analytics must never break the page */ }
}

// One delegated click listener covers phone / e-mail / Instagram / contact CTA
// links wherever they appear — no per-element markup needed.
document.addEventListener('click', (e) => {
    const el = e.target.closest('a');
    if (!el) return;
    const href = el.getAttribute('href') || '';

    if (href.indexOf('tel:') === 0) {
        track('phone-click', 'Kliknutí na telefon');
    } else if (href.indexOf('mailto:') === 0) {
        track('email-click', 'Kliknutí na e-mail');
    } else if (href.indexOf('instagram.com') !== -1) {
        track('instagram-click', 'Kliknutí na Instagram');
    } else if (href.indexOf('#contact') !== -1) {
        // "Kontaktovat" button — distinguish the nav header from in-page links.
        track(el.closest('header') ? 'contact-cta-nav' : 'contact-cta-page', 'Kontakt CTA');
    }
}, true);

// Contact form sent. The reliable lead count is the /dekujeme page view, which
// GoatCounter records automatically as a normal page view.
const contactForm = document.querySelector('form[action*="formsubmit.co"]');
if (contactForm) {
    contactForm.addEventListener('submit', () => track('contact-form-submit', 'Odeslání poptávky'));
}

// Section-depth tracking: fire one event the first time each key section
// scrolls into view, so GoatCounter shows how far down the page visitors got.
// rootMargin fires when a section's top passes ~60% of the viewport height, so
// it works even for sections taller than the screen.
const depthSections = ['about', 'services', 'reviews', 'contact'];
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            track('section-' + entry.target.id, 'Sekce: ' + entry.target.id);
            sectionObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0, rootMargin: '0px 0px -40% 0px' });

depthSections.forEach(id => {
    const el = document.getElementById(id);
    if (el) sectionObserver.observe(el);
});

// Reviews coverflow carousel. The active card sits in front; its neighbours are
// scaled back, rotated and dimmed so they read as further away. The ring wraps
// around, so there is no dead end in either direction. Arrows, dots, horizontal
// swipes, arrow keys and clicking a side card all change which card is active.
const reviewTrack = document.getElementById('reviews-track');
if (reviewTrack) {
    const cards = Array.from(reviewTrack.querySelectorAll('.review-card'));
    const dots = Array.from(document.querySelectorAll('#reviews-dots .review-dot'));
    const wide = window.matchMedia('(min-width: 768px)');
    let active = 0;

    // Depth steps by distance from the active card: how far to the side, how
    // much smaller, how much turned away and how faded.
    const layout = () => {
        const n = cards.length;
        const near = wide.matches ? 56 : 44;
        const far = wide.matches ? 94 : 78;

        cards.forEach((card, i) => {
            // Shortest way round the ring, so offsets stay within ±n/2.
            let d = i - active;
            if (d > n / 2) d -= n;
            if (d < -n / 2) d += n;

            const step = Math.abs(d);
            const dir = Math.sign(d);
            let x = 0, scale = 1, rotate = 0, opacity = 1, depth = 30;

            if (step === 1) {
                x = dir * near; scale = 0.86; rotate = dir * -14; opacity = 0.5; depth = 20;
            } else if (step > 1) {
                // Only the front card and its two neighbours are shown; the rest
                // wait offstage and fade in as the ring turns.
                x = dir * far; scale = 0.74; rotate = dir * -20; opacity = 0; depth = 10;
            }

            card.style.transform =
                'translateX(calc(-50% + ' + x + '%)) rotateY(' + rotate + 'deg) scale(' + scale + ')';
            card.style.opacity = opacity;
            card.style.zIndex = depth;
            card.classList.toggle('is-active', d === 0);

            // Cards past the two neighbours are invisible, so hide them from
            // assistive tech too. Only the front card is interactive — clicks
            // and selection on the others are off in main.css.
            card.setAttribute('aria-hidden', step > 1 ? 'true' : 'false');
            card.querySelectorAll('button').forEach(b => { b.tabIndex = d === 0 ? 0 : -1; });
        });

        dots.forEach((dot, i) => {
            dot.classList.toggle('is-active', i === active);
            dot.setAttribute('aria-current', i === active ? 'true' : 'false');
        });
    };

    const go = (i) => {
        const n = cards.length;
        active = ((i % n) + n) % n;
        layout();
    };

    layout();
    wide.addEventListener('change', layout);

    // Two arrow pairs exist — flanking the track from sm up, beside the dots on
    // mobile — and only one is displayed at a time, so both get bound.
    document.querySelectorAll('#reviews .reviews-prev').forEach(b => b.addEventListener('click', () => go(active - 1)));
    document.querySelectorAll('#reviews .reviews-next').forEach(b => b.addEventListener('click', () => go(active + 1)));
    dots.forEach((dot, i) => dot.addEventListener('click', () => go(i)));

    reviewTrack.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') { e.preventDefault(); go(active - 1); }
        if (e.key === 'ArrowRight') { e.preventDefault(); go(active + 1); }
    });

    // Swipe. touch-action: pan-y in main.css leaves vertical page scrolling to
    // the browser, so only the horizontal gesture lands here.
    let startX = null, startY = null;
    reviewTrack.addEventListener('pointerdown', (e) => {
        startX = e.clientX; startY = e.clientY;
    });
    reviewTrack.addEventListener('pointerup', (e) => {
        if (startX === null) return;
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;
        startX = null;
        if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) go(active + (dx < 0 ? 1 : -1));
    });
    reviewTrack.addEventListener('pointercancel', () => { startX = null; });

    // Reveal the "číst dále" toggle only on summaries that actually overflow
    // their five-line clamp (.review-clamp in main.css), so short reviews never
    // show a pointless button.
    const reviewTexts = Array.from(reviewTrack.querySelectorAll('.review-clamp'));
    const syncToggle = (el) => {
        const btn = el.parentElement.querySelector('.review-more');
        if (!btn || el.classList.contains('expanded')) return;
        btn.classList.toggle('hidden', el.scrollHeight <= el.clientHeight + 2);
    };
    const measureAll = () => reviewTexts.forEach(syncToggle);

    // Measure once the real webfont is in place — Host Grotesk changes line count.
    if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(measureAll);
    } else {
        measureAll();
    }

    reviewTrack.querySelectorAll('.review-more').forEach(btn => {
        btn.addEventListener('click', () => {
            const text = document.getElementById(btn.getAttribute('aria-controls'));
            if (!text) return;
            const expanded = text.classList.toggle('expanded');
            btn.setAttribute('aria-expanded', expanded ? 'true' : 'false');
            btn.textContent = expanded ? 'zobrazit méně' : 'číst dále';
        });
    });

    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(measureAll, 150);
    });
}
