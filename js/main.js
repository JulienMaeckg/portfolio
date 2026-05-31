/* ============================================================
   main.js — Logique principale
   Stars · Scroll reveal · Filtres projets · Moteur i18n
   ============================================================ */

/* ── ÉTOILES ─────────────────────────────────────────────────── */
(function () {
  const canvas = document.getElementById('stars');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let stars = [];

  function resize() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function initStars() {
    stars = [];
    const n = Math.floor((canvas.width * canvas.height) / 6000);
    for (let i = 0; i < n; i++) {
      stars.push({
        x:     Math.random() * canvas.width,
        y:     Math.random() * canvas.height,
        r:     Math.random() * 1.2 + 0.2,
        a:     Math.random(),
        speed: Math.random() * 0.003 + 0.001,
        dir:   Math.random() > 0.5 ? 1 : -1,
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const s of stars) {
      s.a += s.speed * s.dir;
      if (s.a > 1 || s.a < 0.1) s.dir *= -1;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(148,163,184,${s.a})`;
      ctx.fill();
    }
    requestAnimationFrame(draw);
  }

  resize(); initStars(); draw();
  window.addEventListener('resize', () => { resize(); initStars(); });
})();


/* ── SCROLL REVEAL ───────────────────────────────────────────── */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));


/* ── GÉNÉRATION DES CARTES PROJETS ───────────────────────────── */
function buildProjects(lang) {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;
  grid.innerHTML = '';

  PROJECTS.forEach(p => {
    const t = p[lang];
    const cats = p.categories.join(' ');
    const badgeClass = p.type === 'school' ? 'badge-school' : 'badge-perso';
    const badgeLabel = TRANSLATIONS[lang][p.type === 'school' ? 'badge_school' : 'badge_perso'];

    const tagsHtml = t.tags.map(tag => `<span class="tag">${tag}</span>`).join('');

    const awardHtml = p.award ? `
      <div class="award-banner">
        <div class="award-icon">🏆</div>
        <div class="award-text">
          <strong>${p.award[lang].strong}</strong> — ${p.award[lang].text}
        </div>
      </div>` : '';

    const card = document.createElement('div');
    card.className = 'project-card reveal';
    card.dataset.cat = cats;
    card.innerHTML = `
      <div class="project-img-wrap">
        <img src="${p.image}" alt="${t.title}" loading="lazy" />
      </div>
      <div class="project-body">
        <div class="project-header">
          <span class="badge ${badgeClass}">${badgeLabel}</span>
        </div>
        <div class="project-title">${t.title}</div>
        <div class="project-desc">${t.desc}</div>
        <div class="project-tags">${tagsHtml}</div>
        ${awardHtml}
      </div>`;

    // Lightbox on image click
    card.querySelector('.project-img-wrap').addEventListener('click', () => {
      openLightbox(p.image, t.title);
    });

    grid.appendChild(card);
    revealObserver.observe(card);
  });

  // Re-apply active filter
  const active = document.querySelector('.filter-btn.active');
  if (active) applyFilter(active.dataset.filter);
}


/* ── FILTRES ─────────────────────────────────────────────────── */
function applyFilter(filter) {
  document.querySelectorAll('.project-card').forEach(card => {
    const cats = card.dataset.cat || '';
    card.style.display = (filter === 'all' || cats.includes(filter)) ? 'flex' : 'none';
  });
}

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    applyFilter(btn.dataset.filter);
  });
});


/* ── MOTEUR i18n ─────────────────────────────────────────────── */
let currentLang = 'fr';

function setLang(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;

  // Toggle button states
  document.getElementById('btn-fr').classList.toggle('active', lang === 'fr');
  document.getElementById('btn-en').classList.toggle('active', lang === 'en');

  // Update all [data-i18n] elements
  const t = TRANSLATIONS[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  // Rebuild project cards in new language
  buildProjects(lang);
}

// Initial render
buildProjects('fr');


/* ── LIGHTBOX ────────────────────────────────────────────────── */
(function () {
  // Create lightbox DOM
  const overlay = document.createElement('div');
  overlay.id = 'lightbox';
  overlay.innerHTML = `
    <div class="lightbox-inner">
      <button class="lightbox-close" aria-label="Fermer">✕</button>
      <img class="lightbox-img" src="" alt="" />
      <p class="lightbox-caption"></p>
    </div>`;
  document.body.appendChild(overlay);

  const img     = overlay.querySelector('.lightbox-img');
  const caption = overlay.querySelector('.lightbox-caption');

  function close() {
    overlay.classList.remove('lightbox-open');
    document.body.style.overflow = '';
    img.src = '';
  }

  overlay.addEventListener('click', e => {
    if (e.target === overlay) close();
  });
  overlay.querySelector('.lightbox-close').addEventListener('click', close);
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && overlay.classList.contains('lightbox-open')) close();
  });

  window.openLightbox = function (src, title) {
    img.src     = src;
    img.alt     = title;
    caption.textContent = title;
    overlay.classList.add('lightbox-open');
    document.body.style.overflow = 'hidden';
  };
})();
