# TSD Satu Mare — Sitemap Complet & Descrieri Pagini

## STRUCTURA FIȘIERE

```
tsd-satu-mare/
├── index.html              ← Homepage (demo complet)
├── style.css               ← Stiluri globale (mobile-first, WCAG AA)
├── main.js                 ← JavaScript interactiv (fără backend)
├── sitemap.xml             ← Sitemap XML generat
├── robots.txt              ← Robots.txt
├── assets/
│   ├── logo.svg
│   ├── og-image.jpg
│   └── favicon.ico
├── pages/
│   ├── despre.html
│   ├── proiecte.html
│   ├── proiect-single.html
│   ├── evenimente.html
│   ├── eveniment-single.html
│   ├── implica-te.html
│   ├── stiri.html
│   ├── stire-single.html
│   ├── galerie.html
│   ├── resurse.html
│   ├── contact.html
│   ├── gdpr.html
│   ├── termeni.html
│   └── transparenta.html
├── api/                    ← Date simulate JSON (dev local)
│   ├── events.json
│   ├── projects.json
│   ├── members.json
│   ├── news.json
│   ├── rsvp.json
│   └── media.json
└── templates/
    ├── email-newsletter.html
    ├── email-rsvp-confirmare.html
    └── email-bun-venit-membru.html
```

---

## SITEMAP PAGINI

### 1. Homepage — `/` (index.html)
**Meta title:** TSD Satu Mare — Fii Parte Din Schimbare
**Meta desc:** Organizație pentru tineri 16–35 ani din Satu Mare. Proiecte, voluntariat, implicare civică. Alătură-te acum!
**H1:** Fii Parte Din Schimbare
**Secțiuni:**
- Hero dinamic (slider 3 imagini)
- Despre noi (teaser)
- Proiecte active (grid cu filtre)
- Evenimente viitoare (lista + calendar mini)
- Știri recente
- Implică-te (3 căi)
- Newsletter abonare
- Testimoniale membri
- Harta proiecte județ

---

### 2. Despre Noi — `/despre`
**Meta title:** Despre TSD Satu Mare — Misiune, Viziune, Echipă
**Meta desc:** Povestea Tineretului Social Democrat Satu Mare. Misiune, valori, cronologie și oamenii din spatele organizației.
**H1:** Cine suntem și de ce contează
**Subsecțiuni:**
- Misiune & Viziune
- Valorile noastre (cards)
- Cronologie/Timeline (2013–2025)
- Organigramă (Președinte, Vicepreședinți, Secretar)
- Cod de conduită
- Politici organizație

---

### 3. Proiecte & Inițiative — `/proiecte`
**Meta title:** Proiecte TSD Satu Mare — Educație, Mediu, Social, Cultură
**Meta desc:** Toate proiectele active, planificate și finalizate ale TSD Satu Mare. Filtrează și alătură-te ca voluntar.
**H1:** Ce construim împreună
**Funcționalități:**
- Grid proiecte cu filtre (educație/mediu/social/cultură)
- Fiecare card: titlu, categorie, status, progres, voluntari activi, CTA
- Sub-pagini: `/proiecte/educatie/after-school-satu-mare`, etc.

**Pagina proiect single `/proiecte/[cat]/[slug]`:**
- Titlu, obiective SMART
- Buget estimat și surse finanțare
- Timeline progres
- Galerie foto
- Echipă + voluntari
- CTA: „Vreau să fiu voluntar pe acest proiect"
- Buget estimat și cum e cheltuit (transparență)

---

### 4. Evenimente — `/evenimente`
**Meta title:** Evenimente TSD Satu Mare — Calendar Activități
**Meta desc:** Calendarul complet al evenimentelor TSD Satu Mare. Ateliere, dezbateri, acțiuni de voluntariat. Confirmă-ți prezența online.
**H1:** Fii acolo unde se întâmplă
**Funcționalități:**
- Calendar interactiv mare (filtrabil pe categorie/locație)
- Export iCal / Google Calendar
- Lista eveniment cu RSVP
- QR code check-in la eveniment

**Pagina eveniment single `/evenimente/[slug]`:**
- Data, ora, locație (cu hartă embed)
- Descriere detaliată
- Speakeri/organizatori
- Formular RSVP complet
- QR Code după confirmare
- Număr locuri disponibile

---

### 5. Implică-te — `/implica-te`
**Meta title:** Implică-te în TSD Satu Mare — Devino Membru sau Voluntar
**Meta desc:** Trei moduri de a te alătura TSD Satu Mare: devin membru, voluntar pe proiect sau trimiți o idee. Fă primul pas azi.
**H1:** Locul tău e cu noi
**Sub-pagini:**
- `/implica-te/membru` — Formular complet înregistrare (date personale, motivație, domenii interes, upload CV, GDPR)
- `/implica-te/voluntar` — Task pool proiecte active, selectezi proiectul și micro-taskul
- `/implica-te/idee` — Formular scurt „Spune-ne două idei rapide"

---

### 6. Știri & Comunicate — `/stiri`
**Meta title:** Știri TSD Satu Mare — Noutăți și Comunicate de Presă
**Meta desc:** Ultimele noutăți, comunicate de presă și articole ale TSD Satu Mare. Abonează-te la newsletter.
**H1:** Ce se mai întâmplă la TSD
**Funcționalități:**
- Grid articole cu filtre pe categorie
- RSS Feed la `/stiri/feed.xml`
- Share pe rețele sociale
- Rezumat automat pentru newsletter

---

### 7. Galerie Media — `/galerie`
**Meta title:** Galerie Foto & Video TSD Satu Mare
**Meta desc:** Fotografii și videoclipuri din activitățile, proiectele și evenimentele TSD Satu Mare.
**H1:** Momente din activitatea noastră
**Funcționalități:**
- Grid masonry foto cu lightbox
- Filtre pe eveniment/an
- Embed YouTube canal
- Embed TikTok feed
- Etichete pe fotografii

---

### 8. Resurse — `/resurse`
**Meta title:** Resurse și Documente TSD Satu Mare
**Meta desc:** Documente oficiale, rapoarte anuale, statut, formulare descărcabile și FAQ despre TSD Satu Mare.
**H1:** Totul la vedere
**Conținut:**
- Documente descărcabile (Statut, Rapoarte anuale, Formulare)
- FAQ (acordeon expandabil)
- Linkuri utile

---

### 9. Contact & Hartă — `/contact`
**Meta title:** Contact TSD Satu Mare — Vino sau Scrie-ne
**Meta desc:** Contactează TSD Satu Mare. Adresă sediu, hartă interactivă, program, contact persoane cheie.
**H1:** Suntem aproape — în fiecare sens
**Funcționalități:**
- Formular contact cu validare
- Hartă Google Maps embed (sediu)
- Program ore funcționare
- Contact persoane cheie (cu foto)
- Răspuns estimat: „Revenim în 24 de ore"

---

### 10. Pagini Legale
- `/gdpr` — Politică GDPR & Confidențialitate
- `/termeni` — Termeni și Condiții
- `/transparenta` — Transparență financiară (rapoarte anuale)

---

## SEO — 10 EXEMPLE TITLURI H1/H2

1. **H1 Homepage:** Fii Parte Din Schimbare
2. **H2 Despre noi (homepage):** Tineri care construiesc, nu doar comentează.
3. **H1 Despre noi:** Cine suntem și de ce contează
4. **H2 Cronologie:** Povestea TSD Satu Mare din 2013 până azi
5. **H1 Proiecte:** Ce construim împreună
6. **H2 After-School:** Educație gratuită pentru copiii care au cel mai mult nevoie
7. **H1 Evenimente:** Fii acolo unde se întâmplă
8. **H1 Implică-te:** Locul tău e cu noi
9. **H2 Implică-te:** Nu trebuie să știi totul. Trebuie doar să vrei să ajuți.
10. **H1 Stiri:** Ce se mai întâmplă la TSD

---

## robots.txt

```
User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/
Disallow: /wp-admin/
Sitemap: https://tsdsatumare.ro/sitemap.xml
```
