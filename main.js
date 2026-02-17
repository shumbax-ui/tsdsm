/**
 * TSD Satu Mare — main.js
 * Funcționalități: slider hero, counter animat, calendar mini,
 * evenimente dinamice, proiecte cu filtre, RSVP modal, newsletter,
 * testimoniale, cookie banner, animații scroll.
 *
 * Date simulate (fără backend) — înlocuiesc cu API real la implementare.
 */

'use strict';

// ============================================================
// 1. DATE SIMULATE (Mock API)
// ============================================================

const EVENTS_DATA = [
  {
    id: 1,
    title: "Dezbatere Publică: Tineretul și Piața Muncii",
    date: new Date(2025, 6, 18), // Iulie 18
    time: "18:00",
    location: "Casa de Cultură Satu Mare",
    category: "dezbatere",
    description: "Discutăm despre oportunitățile de angajare pentru tineri în județul Satu Mare. Invitați speciali: antreprenori locali și reprezentanți ai AJOFM.",
    spotsLeft: 45
  },
  {
    id: 2,
    title: "Curățenie Ecologică — Parcul Poligon",
    date: new Date(2025, 6, 26), // Iulie 26
    time: "09:00",
    location: "Parcul Poligon, Satu Mare",
    category: "voluntariat",
    description: "Acțiune de curățenie și plantare arbori în Parcul Poligon. Adu mânuși și o sticlă de apă. Echipamentul e asigurat.",
    spotsLeft: 80
  },
  {
    id: 3,
    title: "Workshop: Cum să-ți Pornești un Business",
    date: new Date(2025, 7, 8), // August 8
    time: "14:00",
    location: "Biblioteca Județeană Satu Mare",
    category: "workshop",
    description: "Trainer: [Nume trainer]. Vei învăța: plan de afaceri, finanțare, primii pași legali. Locuri limitate — înscrie-te acum!",
    spotsLeft: 25
  },
  {
    id: 4,
    title: "Festivalul Tineretului Satu Mare 2025",
    date: new Date(2025, 7, 22), // August 22
    time: "17:00",
    location: "Piața 25 Octombrie, Satu Mare",
    category: "eveniment",
    description: "Cel mai mare eveniment TSD din an! Muzică live, expoziție proiecte, surprize. Intrare liberă.",
    spotsLeft: 500
  }
];

const PROJECTS_DATA = [
  {
    id: 1,
    title: "After-School Satu Mare",
    category: "educatie",
    description: "Sprijin educațional gratuit pentru 60 de elevi din familii defavorizate. Meditații, materiale didactice, mese calde.",
    status: "activ",
    progress: 75,
    volunteers: 12,
    img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80"
  },
  {
    id: 2,
    title: "Satu Mare Verde 2025",
    category: "mediu",
    description: "Plantăm 500 de arbori în școli, parcuri și locuri publice din municipiu și comune până la finalul anului.",
    status: "activ",
    progress: 40,
    volunteers: 28,
    img: "https://images.unsplash.com/photo-1542601906897-b4e0a6e0e0c4?w=600&q=80"
  },
  {
    id: 3,
    title: "Pachet Social — Sate Izolate",
    category: "social",
    description: "Distribuim pachete cu alimente și medicamente în 6 sate izolate din județ. Parteneriat cu Caritas SM.",
    status: "activ",
    progress: 60,
    volunteers: 18,
    img: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=600&q=80"
  },
  {
    id: 4,
    title: "Festivalul Culturii Locale",
    category: "cultura",
    description: "Promovăm tradițiile și artiștii locali. 3 zile de concerte, expoziții și ateliere meșteșugărești.",
    status: "planificat",
    progress: 20,
    volunteers: 9,
    img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80"
  },
  {
    id: 5,
    title: "Digitalizare Școli Rurale",
    category: "educatie",
    description: "Donăm laptopuri și asigurăm internet în 4 școli din mediul rural. Scopul: reducerea decalajului digital.",
    status: "planificat",
    progress: 15,
    volunteers: 6,
    img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80"
  },
  {
    id: 6,
    title: "Tineri în Consiliu",
    category: "social",
    description: "Formăm 20 de tineri pentru a participa activ în consiliile locale. Cursuri de oratorie, drept public, advocacy.",
    status: "finalizat",
    progress: 100,
    volunteers: 0,
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80"
  }
];

const NEWS_DATA = [
  {
    id: 1,
    title: "TSD Satu Mare lansează programul de burse pentru studenți performanți",
    category: "Educație",
    excerpt: "Organizația alocă 10 burse a câte 1.000 lei pentru studenții din Satu Mare cu medii peste 9.50. Dosarele se depun până pe 31 august.",
    date: "12 Iulie 2025",
    img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80",
    url: "/stiri/burse-studenti-2025"
  },
  {
    id: 2,
    title: "250 de copaci plantați în cadrul campaniei „Satu Mare Verde"",
    category: "Mediu",
    excerpt: "Weekend-ul trecut, 40 de voluntari TSD au plantat 250 de copaci în Parcul Poligon și în curtea a trei școli. Campania continuă!",
    date: "5 Iulie 2025",
    img: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=600&q=80",
    url: "/stiri/satu-mare-verde-250-copaci"
  },
  {
    id: 3,
    title: "Conferința Tineretului Social Democrat: Raport 2024",
    category: "Organizație",
    excerpt: "Am publicat raportul de activitate 2024. Cifre, proiecte, impact — totul transparent, totul verificabil.",
    date: "28 Iunie 2025",
    img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80",
    url: "/stiri/raport-activitate-2024"
  }
];

const TESTIMONIALS_DATA = [
  {
    quote: "M-am alăturat TSD la 19 ani fără să știu ce așteptam. Doi ani mai târziu am coordonat un proiect cu 30 de voluntari. Dacă există un loc unde ideile tinerilor chiar contează, acesta e.",
    name: "Ana M.",
    role: "Voluntar, 21 ani — Proiectul After-School",
    initials: "AM"
  },
  {
    quote: "Primul meu eveniment public organizat a fost cu TSD. Erorile mele au fost tratate ca lecții, nu ca eșecuri. Asta face diferența față de orice altă organizație.",
    name: "Mihai P.",
    role: "Coordonator Proiecte, 24 ani",
    initials: "MP"
  },
  {
    quote: "Eram sceptic față de politică. TSD m-a convins că implicarea civică și politica locală pot fi sinonime cu schimbarea reală. Sunt mândru că sunt parte din asta.",
    name: "Cristina L.",
    role: "Membră din 2022, 26 ani",
    initials: "CL"
  },
  {
    quote: "Ca student la drept, TSD mi-a oferit platforma să aplic teoriile în practică: advocacy real, proiecte reale, impact real în comunitate.",
    name: "Radu B.",
    role: "Voluntar juridic, 22 ani",
    initials: "RB"
  }
];

// ============================================================
// 2. UTILITARE
// ============================================================

const $ = (selector, ctx = document) => ctx.querySelector(selector);
const $$ = (selector, ctx = document) => [...ctx.querySelectorAll(selector)];

const MONTHS_RO = ['Ianuarie','Februarie','Martie','Aprilie','Mai','Iunie',
                   'Iulie','August','Septembrie','Octombrie','Noiembrie','Decembrie'];
const DAYS_SHORT = ['Lu','Ma','Mi','Jo','Vi','Sâ','Du'];

function formatDate(date) {
  return `${date.getDate()} ${MONTHS_RO[date.getMonth()]} ${date.getFullYear()}`;
}

function getMonthShort(date) {
  return MONTHS_RO[date.getMonth()].substring(0, 3).toUpperCase();
}

function debounce(fn, wait = 200) {
  let t;
  return (...args) => { clearTimeout(t); t = setTimeout(() => fn(...args), wait); };
}

function trapFocus(element) {
  const focusable = $$('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])', element);
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  element.addEventListener('keydown', (e) => {
    if (e.key !== 'Tab') return;
    if (e.shiftKey) {
      if (document.activeElement === first) { e.preventDefault(); last.focus(); }
    } else {
      if (document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });
}

// ============================================================
// 3. COOKIE BANNER
// ============================================================

function initCookieBanner() {
  const banner = $('#cookie-banner');
  if (!banner) return;

  const accepted = localStorage.getItem('tsd_cookie_consent');
  if (accepted) { banner.classList.add('hidden'); return; }

  $('#cookie-accept')?.addEventListener('click', () => {
    localStorage.setItem('tsd_cookie_consent', 'all');
    banner.classList.add('hidden');
    // Poate activa analytics, etc.
  });
  $('#cookie-reject')?.addEventListener('click', () => {
    localStorage.setItem('tsd_cookie_consent', 'essential');
    banner.classList.add('hidden');
  });
}

// ============================================================
// 4. ALERT BANNER
// ============================================================

function initAlertBanner() {
  const banner = $('#alert-banner');
  const closeBtn = $('#alert-close');
  if (!banner || !closeBtn) return;

  const dismissed = sessionStorage.getItem('tsd_alert_dismissed');
  if (dismissed) { banner.classList.add('hidden'); return; }

  closeBtn.addEventListener('click', () => {
    banner.classList.add('hidden');
    sessionStorage.setItem('tsd_alert_dismissed', 'true');
  });
}

// ============================================================
// 5. HEADER — scroll shadow + hamburger
// ============================================================

function initHeader() {
  const header = $('.site-header');
  const hamburger = $('#hamburger');
  const mobileMenu = $('#mobile-menu');
  if (!header) return;

  // Scroll shadow
  const handleScroll = debounce(() => {
    header.classList.toggle('scrolled', window.scrollY > 20);
  }, 50);
  window.addEventListener('scroll', handleScroll, { passive: true });

  // Hamburger toggle
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const isOpen = hamburger.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', String(isOpen));
      mobileMenu.hidden = !isOpen;
      mobileMenu.classList.toggle('open', isOpen);
      if (isOpen) {
        document.body.style.overflow = 'hidden';
        trapFocus(mobileMenu);
        const firstLink = $('a, button', mobileMenu);
        firstLink?.focus();
      } else {
        document.body.style.overflow = '';
      }
    });

    // Închide la click link
    $$('.mobile-nav-link', mobileMenu).forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        mobileMenu.hidden = true;
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
        hamburger.focus();
      });
    });

    // Închide la Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !mobileMenu.hidden) {
        hamburger.click();
      }
    });
  }

  // Active nav link bazat pe secțiune vizibilă
  const sections = $$('section[id]');
  const navLinks = $$('.nav-link[href^="#"]');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(l => {
          l.classList.toggle('active', l.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, { threshold: .3 });
  sections.forEach(s => io.observe(s));
}

// ============================================================
// 6. HERO SLIDER
// ============================================================

function initHeroSlider() {
  const slides = $$('.hero-slide');
  const btns = $$('.slider-btn');
  if (!slides.length) return;

  let current = 0;
  let interval;

  function goTo(index) {
    slides[current].classList.remove('active');
    btns[current].classList.remove('active');
    btns[current].setAttribute('aria-current', 'false');
    current = (index + slides.length) % slides.length;
    slides[current].classList.add('active');
    btns[current].classList.add('active');
    btns[current].setAttribute('aria-current', 'true');
  }

  function startAuto() {
    interval = setInterval(() => goTo(current + 1), 5500);
  }
  function stopAuto() { clearInterval(interval); }

  btns.forEach((btn, i) => {
    btn.addEventListener('click', () => { stopAuto(); goTo(i); startAuto(); });
  });

  startAuto();

  // Pauza la hover
  const hero = $('.hero');
  hero?.addEventListener('mouseenter', stopAuto);
  hero?.addEventListener('mouseleave', startAuto);
}

// ============================================================
// 7. COUNTER ANIMAT
// ============================================================

function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  const duration = 2000;
  const start = performance.now();

  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(eased * target);
    if (progress < 1) requestAnimationFrame(update);
    else el.textContent = target.toLocaleString('ro-RO');
  }
  requestAnimationFrame(update);
}

function initCounters() {
  const counters = $$('[data-target]');
  if (!counters.length) return;

  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: .5 });

  counters.forEach(c => io.observe(c));
}

// ============================================================
// 8. RENDER PROIECTE
// ============================================================

function renderProjects(filter = 'all') {
  const grid = $('#projects-grid');
  if (!grid) return;

  const filtered = filter === 'all'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(p => p.category === filter);

  grid.innerHTML = filtered.map(p => `
    <article class="project-card" role="listitem" data-category="${p.category}" data-animate>
      <div class="project-card-img" style="background-image: url('${p.img}')" role="img" aria-label="Imagine proiect ${p.title}">
        <span class="project-category-badge">${getCategoryLabel(p.category)}</span>
        <span class="project-status-badge ${p.status}">${getStatusLabel(p.status)}</span>
      </div>
      <div class="project-card-body">
        <h3 class="project-card-title">${p.title}</h3>
        <p class="project-card-desc">${p.description}</p>
        <div class="project-card-footer">
          <div class="project-progress" aria-label="Progres proiect: ${p.progress}%">
            <p class="progress-label">Progres: ${p.progress}%</p>
            <div class="progress-bar-wrap" role="progressbar" aria-valuenow="${p.progress}" aria-valuemin="0" aria-valuemax="100">
              <div class="progress-bar-fill" style="width: ${p.progress}%"></div>
            </div>
          </div>
          ${p.volunteers > 0
            ? `<span class="project-volunteers" aria-label="${p.volunteers} voluntari activi">👥 ${p.volunteers} voluntari</span>`
            : '<span class="project-volunteers">✅ Finalizat</span>'
          }
        </div>
        ${p.status !== 'finalizat'
          ? `<a href="/proiecte/${p.category}/${p.id}" class="btn btn--secondary" style="margin-top: 16px; font-size: .85rem;" aria-label="Alătură-te proiectului ${p.title}">Mă implic</a>`
          : ''
        }
      </div>
    </article>
  `).join('');

  // Re-observă animațiile noi
  observeAnimations();
}

function getCategoryLabel(cat) {
  const map = { educatie: 'Educație', mediu: 'Mediu', social: 'Social', cultura: 'Cultură' };
  return map[cat] || cat;
}

function getStatusLabel(status) {
  const map = { activ: '🟢 Activ', planificat: '🔵 Planificat', finalizat: '✅ Finalizat' };
  return map[status] || status;
}

function initProjectFilters() {
  const filterBtns = $$('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');
      renderProjects(btn.dataset.filter);
    });
  });
  renderProjects('all');
}

// ============================================================
// 9. RENDER EVENIMENTE
// ============================================================

function renderEvents() {
  const list = $('#events-list');
  if (!list) return;

  list.innerHTML = EVENTS_DATA.map(ev => `
    <article class="event-card" role="listitem" tabindex="0" data-event-id="${ev.id}"
      aria-label="${ev.title}, ${formatDate(ev.date)} la ${ev.time}"
      data-animate>
      <div class="event-date" aria-hidden="true">
        <span class="event-day">${ev.date.getDate()}</span>
        <span class="event-month">${getMonthShort(ev.date)}</span>
      </div>
      <div class="event-info">
        <h3 class="event-title">${ev.title}</h3>
        <div class="event-meta">
          <span>🕐 ${ev.time}</span>
          <span>📍 ${ev.location}</span>
          <span>👥 ${ev.spotsLeft} locuri disponibile</span>
        </div>
      </div>
      <div class="event-rsvp-btn">
        <button class="btn btn--primary btn--sm rsvp-trigger"
          data-event-id="${ev.id}"
          aria-label="Participă la ${ev.title}">
          Participă
        </button>
      </div>
    </article>
  `).join('');

  // Event listeners pe RSVP triggers
  $$('.rsvp-trigger').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = parseInt(btn.dataset.eventId, 10);
      openRsvpModal(id);
    });
  });

  // Click pe card deschide modal
  $$('.event-card').forEach(card => {
    card.addEventListener('click', () => {
      const id = parseInt(card.dataset.eventId, 10);
      openRsvpModal(id);
    });
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const id = parseInt(card.dataset.eventId, 10);
        openRsvpModal(id);
      }
    });
  });
}

// ============================================================
// 10. CALENDAR MINI
// ============================================================

let calDate = new Date();

function renderCalendar(date) {
  const label = $('#cal-month-label');
  const grid = $('#calendar-grid');
  if (!label || !grid) return;

  label.textContent = `${MONTHS_RO[date.getMonth()]} ${date.getFullYear()}`;

  const year = date.getFullYear();
  const month = date.getMonth();
  const today = new Date();

  // Zile cu evenimente
  const eventDays = EVENTS_DATA
    .filter(e => e.date.getFullYear() === year && e.date.getMonth() === month)
    .map(e => e.date.getDate());

  // Header zile
  const headers = DAYS_SHORT.map(d =>
    `<div class="cal-day-header" aria-hidden="true">${d}</div>`
  ).join('');

  // Prima zi a lunii (ajust pt Luni=0)
  const firstDay = new Date(year, month, 1).getDay();
  const startOffset = firstDay === 0 ? 6 : firstDay - 1;

  const daysInMonth = new Date(year, month + 1, 0).getDate();

  let cells = '';
  for (let i = 0; i < startOffset; i++) {
    cells += `<div class="cal-day empty" aria-hidden="true"></div>`;
  }
  for (let d = 1; d <= daysInMonth; d++) {
    const isToday = d === today.getDate() && month === today.getMonth() && year === today.getFullYear();
    const hasEvent = eventDays.includes(d);
    cells += `
      <div class="cal-day${isToday ? ' today' : ''}${hasEvent ? ' has-event' : ''}"
        tabindex="${hasEvent ? '0' : '-1'}"
        role="${hasEvent ? 'button' : 'presentation'}"
        aria-label="${hasEvent ? `${d} ${MONTHS_RO[month]} — eveniment programat` : String(d)}"
        data-day="${d}" data-month="${month}" data-year="${year}">
        ${d}
      </div>
    `;
  }

  grid.innerHTML = headers + cells;

  // Click pe zi cu eveniment
  $$('.cal-day.has-event', grid).forEach(dayEl => {
    dayEl.addEventListener('click', () => {
      const d = parseInt(dayEl.dataset.day, 10);
      const ev = EVENTS_DATA.find(e => e.date.getDate() === d && e.date.getMonth() === month);
      if (ev) openRsvpModal(ev.id);
    });
    dayEl.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); dayEl.click(); }
    });
  });
}

function initCalendar() {
  calDate = new Date();
  renderCalendar(calDate);

  $('#cal-prev')?.addEventListener('click', () => {
    calDate.setMonth(calDate.getMonth() - 1);
    renderCalendar(calDate);
  });
  $('#cal-next')?.addEventListener('click', () => {
    calDate.setMonth(calDate.getMonth() + 1);
    renderCalendar(calDate);
  });
}

// ============================================================
// 11. RSVP MODAL
// ============================================================

let currentEventId = null;

function openRsvpModal(eventId) {
  const modal = $('#rsvp-modal');
  const infoEl = $('#rsvp-event-info');
  if (!modal) return;

  const ev = EVENTS_DATA.find(e => e.id === eventId);
  if (!ev) return;

  currentEventId = eventId;

  if (infoEl) {
    infoEl.innerHTML = `
      <strong>${ev.title}</strong>
      <span>📅 ${formatDate(ev.date)} la ${ev.time} &nbsp;|&nbsp; 📍 ${ev.location}</span>
    `;
  }

  // Reset form
  const form = $('#rsvp-form');
  form?.reset();
  $$('.field-error', form).forEach(el => { el.textContent = ''; });
  $$('.form-input', form).forEach(el => { el.classList.remove('error', 'valid'); });
  $('#rsvp-error').hidden = true;
  $('#rsvp-success').hidden = true;
  const submitBtn = $('#rsvp-submit');
  if (submitBtn) {
    submitBtn.disabled = false;
    $('.btn-text', submitBtn).hidden = false;
    $('.btn-loading', submitBtn).hidden = true;
  }

  modal.hidden = false;
  document.body.style.overflow = 'hidden';
  trapFocus(modal);
  setTimeout(() => $('#rsvp-name')?.focus(), 50);
}

function closeRsvpModal() {
  const modal = $('#rsvp-modal');
  if (!modal) return;
  modal.hidden = true;
  document.body.style.overflow = '';
  currentEventId = null;
}

function initRsvpModal() {
  const modal = $('#rsvp-modal');
  if (!modal) return;

  // Buton închidere
  $('#rsvp-close')?.addEventListener('click', closeRsvpModal);

  // Închide la click overlay
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeRsvpModal();
  });

  // Închide la Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.hidden) closeRsvpModal();
  });

  // Formular RSVP
  const form = $('#rsvp-form');
  form?.addEventListener('submit', handleRsvpSubmit);

  // Validare live
  $('#rsvp-name')?.addEventListener('blur', () => validateField('rsvp-name'));
  $('#rsvp-email')?.addEventListener('blur', () => validateField('rsvp-email'));
}

function validateField(fieldId) {
  const field = $(`#${fieldId}`);
  const errorEl = $(`#${fieldId}-error`);
  if (!field || !errorEl) return true;

  field.classList.remove('error', 'valid');
  errorEl.textContent = '';

  if (field.required && !field.value.trim()) {
    field.classList.add('error');
    errorEl.textContent = 'Câmpul este obligatoriu.';
    return false;
  }

  if (field.type === 'email' && field.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value)) {
    field.classList.add('error');
    errorEl.textContent = 'Introduceți o adresă de email validă.';
    return false;
  }

  if (field.value.trim()) {
    field.classList.add('valid');
  }
  return true;
}

async function handleRsvpSubmit(e) {
  e.preventDefault();

  const nameValid = validateField('rsvp-name');
  const emailValid = validateField('rsvp-email');

  const gdprCheck = $('#rsvp-gdpr');
  const gdprError = $('#rsvp-gdpr-error');
  if (!gdprCheck.checked) {
    gdprError.textContent = 'Trebuie să accepți politica de confidențialitate.';
    return;
  } else {
    if (gdprError) gdprError.textContent = '';
  }

  if (!nameValid || !emailValid) return;

  const submitBtn = $('#rsvp-submit');
  const btnText = $('.btn-text', submitBtn);
  const btnLoading = $('.btn-loading', submitBtn);
  const errorMsg = $('#rsvp-error');
  const successMsg = $('#rsvp-success');

  // Loading state
  submitBtn.disabled = true;
  btnText.hidden = true;
  btnLoading.hidden = false;

  try {
    // Simulare request API (înlocuiți cu fetch real)
    await new Promise(resolve => setTimeout(resolve, 1500));

    const data = {
      eventId: currentEventId,
      name: $('#rsvp-name').value.trim(),
      email: $('#rsvp-email').value.trim(),
      phone: $('#rsvp-phone').value.trim(),
      timestamp: new Date().toISOString()
    };

    console.log('RSVP Data (mock):', data);

    // Succes
    successMsg.textContent = `✅ Ai confirmat participarea! Vei primi un email la ${data.email} cu detalii. Ne vedem la eveniment! 🎉`;
    successMsg.hidden = false;
    errorMsg.hidden = true;
    e.target.reset();

    // Închide modal după 3 secunde
    setTimeout(closeRsvpModal, 3000);

  } catch (err) {
    errorMsg.textContent = '❌ Ceva n-a mers. Încearcă din nou sau contactează-ne la contact@tsdsatumare.ro';
    errorMsg.hidden = false;
  } finally {
    submitBtn.disabled = false;
    btnText.hidden = false;
    btnLoading.hidden = true;
  }
}

// ============================================================
// 12. NEWSLETTER
// ============================================================

function initNewsletter() {
  const form = $('#newsletter-form');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const emailInput = $('#newsletter-email');
    const errorEl = $('#newsletter-error');
    const successEl = $('#newsletter-success');

    errorEl.hidden = true;
    successEl.hidden = true;
    emailInput.classList.remove('error', 'valid');

    const email = emailInput.value.trim();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      emailInput.classList.add('error');
      errorEl.textContent = '⚠️ Introduceți un email valid (ex: ion@gmail.com).';
      errorEl.hidden = false;
      emailInput.focus();
      return;
    }

    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.textContent;
    btn.disabled = true;
    btn.textContent = 'Se înscrie…';

    try {
      await new Promise(resolve => setTimeout(resolve, 1200));
      emailInput.value = '';
      emailInput.classList.add('valid');
      successEl.textContent = '🎉 Ești abonat! Te așteptăm în căsuța de email.';
      successEl.hidden = false;
    } catch {
      errorEl.textContent = '❌ Eroare. Încearcă din nou.';
      errorEl.hidden = false;
    } finally {
      btn.disabled = false;
      btn.textContent = originalText;
    }
  });
}

// ============================================================
// 13. STIRI
// ============================================================

function renderNews() {
  const grid = $('#news-grid');
  if (!grid) return;

  grid.innerHTML = NEWS_DATA.map((n, i) => `
    <article class="news-card" role="listitem" data-animate data-animate-delay="${i}">
      <div class="news-card-img" style="background-image: url('${n.img}')" role="img" aria-label="Imagine știre: ${n.title}"></div>
      <div class="news-card-body">
        <span class="news-category">${n.category}</span>
        <h3 class="news-card-title">
          <a href="${n.url}" aria-label="${n.title}">${n.title}</a>
        </h3>
        <p class="news-card-excerpt">${n.excerpt}</p>
        <div class="news-card-meta">
          <span>📅 ${n.date}</span>
          <div class="news-share" aria-label="Distribuie știrea">
            <button class="share-btn" aria-label="Distribuie pe Facebook" data-network="facebook" data-url="${n.url}">FB</button>
            <button class="share-btn" aria-label="Distribuie pe WhatsApp" data-network="whatsapp" data-url="${n.url}">WA</button>
          </div>
        </div>
      </div>
    </article>
  `).join('');

  // Share buttons
  $$('.share-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const url = encodeURIComponent(window.location.origin + btn.dataset.url);
      const title = encodeURIComponent(btn.closest('.news-card').querySelector('.news-card-title')?.textContent || '');
      let shareUrl = '';
      if (btn.dataset.network === 'facebook') {
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
      } else if (btn.dataset.network === 'whatsapp') {
        shareUrl = `https://api.whatsapp.com/send?text=${title}%20${url}`;
      }
      if (shareUrl) window.open(shareUrl, '_blank', 'width=600,height=400');
    });
  });
}

// ============================================================
// 14. TESTIMONIALE SLIDER
// ============================================================

let testimonialsIndex = 0;

function renderTestimonials() {
  const slider = $('#testimonials-slider');
  if (!slider) return;

  slider.innerHTML = TESTIMONIALS_DATA.map((t, i) => `
    <div class="testimonial-card ${i === 0 ? 'active' : ''}" role="listitem" aria-hidden="${i !== 0}">
      <blockquote class="testimonial-quote">${t.quote}</blockquote>
      <div class="testimonial-author">
        <div class="author-avatar" aria-hidden="true">${t.initials}</div>
        <div>
          <p class="author-name">${t.name}</p>
          <p class="author-role">${t.role}</p>
        </div>
      </div>
    </div>
  `).join('');
}

function goTestimonial(dir) {
  const cards = $$('.testimonial-card');
  if (!cards.length) return;

  cards[testimonialsIndex].classList.remove('active');
  cards[testimonialsIndex].setAttribute('aria-hidden', 'true');

  testimonialsIndex = (testimonialsIndex + dir + cards.length) % cards.length;
  cards[testimonialsIndex].classList.add('active');
  cards[testimonialsIndex].setAttribute('aria-hidden', 'false');
}

function initTestimonials() {
  renderTestimonials();
  $('#t-prev')?.addEventListener('click', () => goTestimonial(-1));
  $('#t-next')?.addEventListener('click', () => goTestimonial(1));

  // Auto-rotate
  setInterval(() => goTestimonial(1), 7000);
}

// ============================================================
// 15. SCROLL ANIMATIONS
// ============================================================

function observeAnimations() {
  const elements = $$('[data-animate]:not(.visible)');
  if (!elements.length) return;

  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: .15, rootMargin: '0px 0px -40px 0px' });

  elements.forEach(el => io.observe(el));
}

// ============================================================
// 16. SMOOTH SCROLL + SKIP LINK
// ============================================================

function initSmoothScroll() {
  // Skip link
  const skipLink = document.createElement('a');
  skipLink.href = '#main-content';
  skipLink.className = 'skip-link';
  skipLink.textContent = 'Sari la conținut principal';
  document.body.prepend(skipLink);

  // Scroll pe hash links
  $$('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href').slice(1);
      const target = document.getElementById(targetId);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Focus pe target pentru accesibilitate
      if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
    });
  });
}

// ============================================================
// 17. INIT
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  initCookieBanner();
  initAlertBanner();
  initHeader();
  initHeroSlider();
  initCounters();
  initProjectFilters();
  renderEvents();
  initCalendar();
  initRsvpModal();
  initNewsletter();
  renderNews();
  initTestimonials();
  observeAnimations();
  initSmoothScroll();

  console.log('✅ TSD Satu Mare — site inițializat. Date simulate activ.');
  console.log('ℹ️  Înlocuiți datele simulate cu apeluri API la /api/events, /api/projects, /api/news');
});
