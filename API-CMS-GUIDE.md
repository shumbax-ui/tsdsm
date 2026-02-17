# TSD Satu Mare — API Endpoints & CMS Guide

---

## 1. CELE 6 ENDPOINT-URI ESENȚIALE

### Base URL: `https://api.tsdsatumare.ro/v1`

---

### GET /events
**Scop:** Returnează lista evenimentelor viitoare/trecute.
**Query params:**
- `?from=2025-07-01&to=2025-12-31` — interval dată
- `?category=voluntariat|workshop|dezbatere|eveniment`
- `?location=satu-mare|carei|negresti`
- `?limit=10&offset=0` — paginare

**Response 200:**
```json
{
  "total": 24,
  "data": [
    {
      "id": 1,
      "slug": "dezbatere-tineret-piata-muncii",
      "title": "Dezbatere Publică: Tineretul și Piața Muncii",
      "date": "2025-07-18T18:00:00+03:00",
      "location": {
        "name": "Casa de Cultură Satu Mare",
        "address": "Str. [Adresă], Satu Mare",
        "lat": 47.7943,
        "lng": 22.8873
      },
      "category": "dezbatere",
      "description": "...",
      "spotsTotal": 80,
      "spotsLeft": 45,
      "imageUrl": "https://cdn.tsdsatumare.ro/events/1/cover.jpg",
      "qrCodeUrl": null
    }
  ]
}
```

---

### POST /rsvp
**Scop:** Înregistrare participare la eveniment.
**Body:**
```json
{
  "eventId": 1,
  "name": "Ion Ionescu",
  "email": "ion@email.ro",
  "phone": "0712345678",
  "gdprConsent": true
}
```
**Response 201:**
```json
{
  "rsvpId": "rsvp_abc123",
  "eventTitle": "Dezbatere Publică: Tineretul și Piața Muncii",
  "confirmationCode": "TSD-2025-0042",
  "qrCodeUrl": "https://cdn.tsdsatumare.ro/qr/rsvp_abc123.png",
  "message": "Confirmare trimisă la ion@email.ro"
}
```
**Erori:**
- `400` — Câmpuri lipsă sau invalide (`{ "error": "email_invalid" }`)
- `409` — Deja înregistrat (`{ "error": "already_registered" }`)
- `410` — Fără locuri (`{ "error": "no_spots_left" }`)

**Securitate:**
- Rate limiting: max 5 RSVP/oră per IP
- CSRF token: câmp `_csrf` în formular
- reCAPTCHA v3 la scor < 0.5

---

### GET /projects
**Scop:** Lista proiectelor active/planificate/finalizate.
**Query params:**
- `?category=educatie|mediu|social|cultura`
- `?status=activ|planificat|finalizat`
- `?county=satu-mare` (extindere viitoare)

**Response 200:**
```json
{
  "total": 18,
  "data": [
    {
      "id": 1,
      "slug": "after-school-satu-mare",
      "title": "After-School Satu Mare",
      "category": "educatie",
      "status": "activ",
      "progressPercent": 75,
      "volunteerCount": 12,
      "description": "...",
      "objectives": ["...", "..."],
      "budget": { "estimated": 15000, "spent": 11200, "currency": "RON" },
      "images": ["url1", "url2"],
      "volunteerCta": true,
      "createdAt": "2024-09-01",
      "updatedAt": "2025-07-10"
    }
  ]
}
```

---

### POST /members
**Scop:** Înregistrare cerere de aderare ca membru.
**Body (multipart/form-data):**
```
firstName, lastName, birthDate, email, phone,
locality, occupation, interests[], motivation,
howHeard, cvFile (optional), gdprConsent, codeOfConduct
```
**Response 201:**
```json
{
  "memberId": "mem_pending_xyz",
  "status": "pending_review",
  "message": "Cererea a fost primită. Un coordonator te va contacta în maxim 3 zile lucrătoare.",
  "activationEmailSent": true
}
```
**Erori:**
- `400` — Date invalide
- `409` — Email deja înregistrat
- `422` — Vârstă sub 16 ani

---

### GET /news
**Scop:** Articole de știri pentru site și RSS.
**Query params:**
- `?category=educatie|mediu|organizatie|eveniment`
- `?limit=10&offset=0`
- `?format=rss` → returnează XML RSS

**Response 200:**
```json
{
  "total": 67,
  "data": [
    {
      "id": 1,
      "slug": "burse-studenti-2025",
      "title": "TSD Satu Mare lansează programul de burse pentru studenți",
      "excerpt": "...",
      "content": "<html>...</html>",
      "category": "Educație",
      "author": "Echipa TSD",
      "publishedAt": "2025-07-12T10:00:00+03:00",
      "imageUrl": "...",
      "tags": ["burse", "studenti", "educatie"],
      "shareCount": { "facebook": 42, "whatsapp": 18 }
    }
  ]
}
```

---

### GET /media
**Scop:** Galerie foto/video pentru pagina galerie.
**Query params:**
- `?type=photo|video`
- `?event=festival-tineretului-2025`
- `?year=2025`
- `?tags=voluntariat`

**Response 200:**
```json
{
  "total": 234,
  "data": [
    {
      "id": 1,
      "type": "photo",
      "title": "Plantare arbori Parcul Poligon",
      "thumbnailUrl": "https://cdn.tsdsatumare.ro/media/thumb/1.jpg",
      "fullUrl": "https://cdn.tsdsatumare.ro/media/full/1.jpg",
      "event": "Satu Mare Verde 2025",
      "date": "2025-07-05",
      "tags": ["mediu", "voluntariat"],
      "altText": "Voluntari TSD plantând arbori în Parcul Poligon"
    }
  ]
}
```

---

## 2. STACK TEHNIC RECOMANDAT

### OPȚIUNEA A: Implementare Rapidă (WordPress)

```
WordPress 6.x + pluginuri cheie:
├── The Events Calendar (Pro) — calendar, RSVP, QR check-in
├── WPForms Pro — formulare cu validare, upload CV, notificări email
├── Advanced Custom Fields (ACF) — câmpuri custom proiecte/membri
├── Yoast SEO — titluri, meta, schema.org
├── WP Super Cache sau W3 Total Cache — performanță
├── Wordfence — securitate
├── UpdraftPlus — backup automat zilnic
├── Mailchimp for WordPress — newsletter integration
├── WPML (opțional) — multilingv (ro/hu)
└── Leaflet Maps Marker — hartă interactivă proiecte
```

**Roluri WordPress:**
- `administrator` — acces complet (1-2 persoane)
- `editor` — creare/editare conținut (știri, proiecte)
- `contributor` — scriere articole (moderare admin)
- `events_manager` (custom role) — creare/editare evenimente, QR scan

**Avantaj:** Rapid de implementat (1-2 săptămâni), ușor de administrat fără developer.
**Dezavantaj:** Scalabilitate limitată, dependență de pluginuri.

---

### OPȚIUNEA B: Stack Scalabil (Headless CMS + Modern Frontend)

```
Backend (CMS):
└── Strapi 4.x (self-hosted pe Render/VPS)
    ├── PostgreSQL (baza de date)
    ├── Cloudinary (media uploads)
    └── SendGrid (email transacțional)

Frontend:
└── Next.js 14 (App Router)
    ├── TailwindCSS + shadcn/ui
    ├── React Hook Form + Zod (validare)
    ├── FullCalendar.io (calendar interactiv)
    ├── Leaflet.js (hartă)
    ├── Framer Motion (animații)
    └── Vercel/Netlify (deploy CDN)

Autentificare membri:
└── NextAuth.js sau Clerk

Notificări:
└── Web Push: OneSignal (gratuit tier)
└── Email: SendGrid sau Amazon SES
```

**Avantaj:** Performanță excelentă, SEO superior (SSG/ISR), API propriu, scalabilitate.
**Dezavantaj:** Necesită developer tehnic, setup 3-4 săptămâni.

---

## 3. SECURITATE

### Măsuri obligatorii:

**Rate Limiting:**
```nginx
# nginx.conf
limit_req_zone $binary_remote_addr zone=api:10m rate=30r/m;
limit_req_zone $binary_remote_addr zone=form:10m rate=5r/m;

location /api/rsvp { limit_req zone=form burst=3 nodelay; }
location /api/members { limit_req zone=form burst=2 nodelay; }
```

**CSRF Protection (Next.js):**
```javascript
// middleware.ts
import { csrf } from '@/lib/csrf';
export async function middleware(req) {
  if (['POST','PUT','DELETE'].includes(req.method)) {
    await csrf.verify(req);
  }
}
```

**Validare server (Zod):**
```javascript
const rsvpSchema = z.object({
  eventId: z.number().positive(),
  name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().regex(/^(\+40|0)[0-9]{9}$/).optional(),
  gdprConsent: z.literal(true)
});
```

**Criptare date sensibile (Node.js):**
```javascript
import crypto from 'crypto';
const algorithm = 'aes-256-gcm';
const key = Buffer.from(process.env.ENCRYPTION_KEY, 'hex');

function encrypt(text) {
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  const encrypted = Buffer.concat([cipher.update(text, 'utf8'), cipher.final()]);
  const tag = cipher.getAuthTag();
  return { iv: iv.toString('hex'), tag: tag.toString('hex'), data: encrypted.toString('hex') };
}
```

**Backup automat:**
- WordPress: UpdraftPlus → Google Drive (zilnic)
- Strapi/Postgres: cron job + pg_dump → S3 (zilnic, retenție 30 zile)

**Politică retenție date:**
- Date membri activi: pe durata aderării + 2 ani
- Logs RSVP: 12 luni
- Newsletter emails: până la dezabonare
- Date șterse: overwrit cu zero bytes, nu delete simplu

---

## 4. DEPLOY PAS-CU-PAS

### Varianta WordPress (rapidă):

```bash
# 1. Hosting (recomandat: SiteGround/Kinsta Romania)
# Alege plan cu PHP 8.2+, SSL gratuit, backup zilnic

# 2. Instalare WordPress
# Via cPanel → WordPress Installer sau manual:
wget https://wordpress.org/latest.tar.gz
tar -xzf latest.tar.gz

# 3. wp-config.php (setări esențiale)
define('DB_CHARSET', 'utf8mb4');
define('AUTH_KEY', 'cheie_unica_generata');
define('SECURE_AUTH_KEY', 'alta_cheie_unica');
define('DISALLOW_FILE_EDIT', true); // securitate
define('FORCE_SSL_ADMIN', true);

# 4. Instalare tema custom + pluginuri
# Via wp-cli:
wp plugin install the-events-calendar wpforms-lite \
  wordpress-seo updraftplus wordfence --activate

# 5. Configurare SSL
# Certbot (dacă VPS):
certbot --nginx -d tsdsatumare.ro -d www.tsdsatumare.ro

# 6. DNS
# A record: @ → IP server
# A record: www → IP server
# MX records pentru email (Google Workspace / Zoho)

# 7. Backup inițial
wp db export backup-$(date +%Y%m%d).sql
```

### Varianta Next.js + Strapi (scalabilă):

```bash
# 1. Setup Strapi pe Render (cloud)
# render.yaml
services:
  - type: web
    name: tsd-strapi
    env: node
    buildCommand: cd backend && npm install && npm run build
    startCommand: cd backend && npm run start
    envVars:
      - key: DATABASE_URL
        fromDatabase: { name: tsd-postgres, property: connectionString }
      - key: APP_KEYS
        generateValue: true

# 2. Frontend Next.js pe Vercel
# vercel.json
{
  "framework": "nextjs",
  "env": {
    "NEXT_PUBLIC_API_URL": "https://api.tsdsatumare.ro"
  }
}
# git push origin main → deploy automat

# 3. CDN pentru media
# Cloudinary:
CLOUDINARY_CLOUD_NAME=tsdsatumare
CLOUDINARY_API_KEY=xxx
CLOUDINARY_API_SECRET=yyy

# 4. Email transacțional
SENDGRID_API_KEY=SG.xxx
EMAIL_FROM=noreply@tsdsatumare.ro

# 5. Domain + SSL (Cloudflare)
# Proxied A record + SSL Full (strict)
# Cache Rules pentru pagini statice
```

---

## 5. ADMIN PANEL — ROLURI

| Acțiune | Admin | Editor | Moderator Ev. |
|---------|-------|--------|---------------|
| Creare/editare articole | ✅ | ✅ | ❌ |
| Publicare articole | ✅ | Cu aprobare | ❌ |
| Creare/editare evenimente | ✅ | ✅ | ✅ |
| Vizualizare RSVP-uri | ✅ | ❌ | ✅ |
| Export CSV RSVP | ✅ | ❌ | ✅ |
| Scan QR check-in | ✅ | ❌ | ✅ |
| Gestionare membri | ✅ | ❌ | ❌ |
| Publicare proiecte | ✅ | ✅ | ❌ |
| Accesare date GDPR | ✅ | ❌ | ❌ |
| Configurare site | ✅ | ❌ | ❌ |
