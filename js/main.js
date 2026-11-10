(function () {
  'use strict';
  const D = window.PORTFOLIO;
  const root = document.documentElement;
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  const state = {
    get mode() { return root.dataset.mode === 'web' ? 'web' : 'game'; },
    get lang() { return root.lang === 'en' ? 'en' : 'es'; },
  };
  const save = (k, v) => { try { localStorage.setItem(k, v); } catch (e) {} };
  const get = (obj, path) => path.split('.').reduce((o, k) => (o ? o[k] : undefined), obj);

  /* ───────────── Pixel sprites para portadas de proyectos (modo game) ───────────── */
  const SPRITES = {
    mentality: { bg: ['#1b1440', '#2d1b69'], pal: { a: '#ff5ea8', b: '#ffd166', c: '#7cf7ff', d: '#ffffff' }, map: [
      '....aaaaaa....', '..aaaaaaaaaa..', '.aaddaaaaddaa.', '.aaaaabbaaaaa.', 'aaacaaaaaacaaa', 'aaaaaaaaaaaaaa',
      'aaaabbbbbbaaaa', '.aaaaaaaaaaaa.', '..aaaaaaaaaa..', '....cccccc....', '.....c..c.....', '....cc..cc....'] },
    danmaku: { bg: ['#12082a', '#3a0d3f'], pal: { a: '#ff4d6d', b: '#ffffff', c: '#ffd6e0', d: '#9b5de5' }, map: [
      'd.....b.....d.', '...c.....c....', '.b...aaa...b..', '....aabaa.....', 'c..aabbbaa..c.', '....aabaa.....',
      '.b...aaa...b..', '...c.....c....', 'd.....b.....d.', '......d.......', '.....ddd......', '....d.d.d.....'] },
    platformer: { bg: ['#0b2545', '#13315c'], pal: { a: '#4cc9f0', b: '#ffffff', c: '#f72585', d: '#ffd166' }, map: [
      '.....aaaa.....', '....aaaaaa....', '....abbaab....', '....aaaaaa....', '...aaacaaaa...', '..dd.aaaa.....',
      '..ddaaaaaaa...', '.....aaaa.....', '....aa..aa....', '...aaa..aaa...', '..............', 'cccccccccccccc'] },
    gems: { bg: ['#06281f', '#0b3d2e'], pal: { a: '#2ef2b0', b: '#ffffff', c: '#16a37c', d: '#b8fff0' }, map: [
      '..............', '.....aaaa.....', '....abaaaa....', '...abdaaaaa...', '..aaaaaaaaaa..', '..cccccccccc..',
      '...cccaacc....', '....ccaacc....', '.....caac.....', '......cc......', '..............', '..............'] },
    jam: { bg: ['#2b1400', '#552100'], pal: { a: '#ff9f1c', b: '#ffffff', c: '#ffbf69', d: '#2b1400' }, map: [
      '.....aaaa.....', '...aaccccaa...', '..acbbbbbbca..', '.acbbbbdbbbca.', '.acbbbbdbbbca.', 'acbbbbbdbbbbca',
      'acbbbbbddddbca', 'acbbbbbbbbbbca', '.acbbbbbbbbca.', '.acbbbbbbbbca.', '..accbbbbcca..', '....aaaaaa....'] },
  };
  const spriteCache = {};
  function sprite(name) {
    if (spriteCache[name]) return spriteCache[name];
    const s = SPRITES[name]; if (!s) return '';
    const px = 10, w = 28, h = 16, c = document.createElement('canvas');
    c.width = w * px; c.height = h * px;
    const g = c.getContext('2d');
    const grd = g.createLinearGradient(0, 0, 0, c.height);
    grd.addColorStop(0, s.bg[0]); grd.addColorStop(1, s.bg[1]);
    g.fillStyle = grd; g.fillRect(0, 0, c.width, c.height);
    // estrellas de fondo deterministas
    let seed = name.length * 97;
    const rnd = () => ((seed = (seed * 9301 + 49297) % 233280) / 233280);
    g.fillStyle = 'rgba(255,255,255,.35)';
    for (let i = 0; i < 26; i++) g.fillRect(Math.floor(rnd() * w) * px, Math.floor(rnd() * h) * px, px / 2, px / 2);
    const ox = Math.floor((w - s.map[0].length) / 2), oy = Math.floor((h - s.map.length) / 2);
    s.map.forEach((row, y) => [...row].forEach((ch, x) => {
      if (ch === '.') return;
      g.fillStyle = s.pal[ch]; g.fillRect((ox + x) * px, (oy + y) * px, px, px);
    }));
    return (spriteCache[name] = c.toDataURL());
  }

  /* ───────────── Render ───────────── */
  function render() {
    const m = state.mode, l = state.lang;
    const P = D[m][l], UI = D.ui[l];

    $$('[data-i]').forEach((el) => { el.textContent = get(UI, el.dataset.i) ?? ''; });
    $$('[data-c]').forEach((el) => { el.textContent = P[el.dataset.c] ?? ''; });
    $$('[data-s]').forEach((el) => { el.textContent = P.sections[el.dataset.s]; el.dataset.text = el.textContent; });
    $('.hello').textContent = l === 'en' ? 'Hi, I’m' : 'Hola, soy';
    $$('#nav a').forEach((a) => { const k = a.getAttribute('href').slice(1); a.textContent = m === 'game' ? P.sections[k] : UI.nav[k]; });

    $('#lang').textContent = l === 'es' ? 'EN' : 'ES';
    $('#lang').setAttribute('aria-label', l === 'es' ? 'Switch to English' : 'Cambiar a español');
    $('#switch').setAttribute('aria-checked', String(m === 'web'));
    $('#switch').setAttribute('aria-label', UI.switchHint);

    // Social
    $('#social').innerHTML = [
      ['GitHub', D.links.github, ICON.github],
      ['LinkedIn', D.links.linkedin, ICON.linkedin],
      ['Email', 'mailto:' + D.links.email, ICON.mail],
    ].map(([n, h, i]) => `<li><a href="${h}" ${h.startsWith('http') ? 'target="_blank" rel="noopener"' : ''} aria-label="${n}">${i}<span>${n}</span></a></li>`).join('');

    // Stats (game) / code (web)
    if (m === 'game') {
      $('#stats').innerHTML = P.stats.map((s) => `<li><span>${esc(s.k)}</span><b><i style="--w:${s.v}%"></i></b><em>${s.v}</em></li>`).join('');
    } else {
      typeCode(l);
    }

    // About
    $('#about-text').innerHTML = P.about.map((p) => `<p>${esc(p)}</p>`).join('');
    $('#attrs').innerHTML = P.attrs.map((a) => `<li><span>${esc(a.k)}</span><b>${esc(a.v)}</b></li>`).join('');
    const E = D.education[l];
    $('#edu').innerHTML = `
      <h3>${esc(UI.education)}</h3><p><b>${esc(E.degree)}</b><br>${esc(E.school)}<br><small>${esc(E.when)}</small></p>
      <h3>${esc(UI.languages)}</h3><p>${esc(E.spanish)}<br>${esc(E.english)}</p>`;

    // Timeline
    $('#timeline').innerHTML = D[m].path.map((it, idx) => {
      const t = it[l];
      const bullets = t.bullets ? `<ul>${t.bullets.map((b) => `<li>${esc(b)}</li>`).join('')}</ul>` : '';
      const cls = ['tl-item', it.job && 'is-job', it.boss && 'is-boss', it.current && 'is-current'].filter(Boolean).join(' ');
      const stage = m === 'game' ? `<span class="tl-stage">${it.current ? '★' : (it.boss ? 'BOSS' : 'STAGE ' + (idx + 1))}</span>` : '';
      return `<li class="${cls}" style="--i:${idx}">
        <div class="tl-dot">${m === 'game' ? (it.icon || '■') : ''}</div>
        <article class="panel tl-card">
          <header>${stage}<time>${esc(it.date)}</time></header>
          <h3>${esc(t.title)}</h3>
          <p class="tl-org">${esc(t.org)}</p>
          ${t.text ? `<p>${esc(t.text)}</p>` : ''}${bullets}
        </article></li>`;
    }).join('');

    // Projects
    $('#project-list').innerHTML = D[m].projects.map((p) => {
      const t = p[l];
      const cover = m === 'game'
        ? `<div class="pj-cover"><img src="${sprite(p.art)}" alt="" loading="lazy"><span class="pj-tag">${esc(p.tag)}</span></div>`
        : `<div class="pj-cover pj-cover-web art-${p.art}"><div class="pj-browser"><i></i><i></i><i></i></div><span class="pj-mark">${esc(p.title.split(' ')[0])}</span><span class="pj-tag">${esc(p.tag)}</span></div>`;
      const links = p.repo
        ? `<a class="btn btn-small" href="${p.repo}" target="_blank" rel="noopener">${ICON.github}<span>${esc(UI.repo)}</span></a>`
        : `<span class="pj-private">🔒 ${esc(UI.private)}</span>`;
      return `<article class="panel project">
        ${cover}
        <div class="pj-body">
          <div class="pj-head"><h3>${esc(p.title)}</h3><span class="pj-year">${esc(p.year)}</span></div>
          <p class="pj-role">${esc(t.role)}</p>
          <p>${esc(t.text)}</p>
          ${t.bullets ? `<ul>${t.bullets.map((b) => `<li>${esc(b)}</li>`).join('')}</ul>` : ''}
          <ul class="chips">${p.tech.map((x) => `<li>${esc(x)}</li>`).join('')}</ul>
          <div class="pj-links">${links}</div>
        </div></article>`;
    }).join('');

    // Skills
    $('#skill-list').innerHTML = D[m].skills.map((g) => {
      const title = (l === 'en' && g.en) || g.group;
      const items = g.items.map((s) => m === 'game'
        ? `<li class="slot" title="${esc(s.n)}"><span class="slot-icon">${s.i}</span><span class="slot-name">${esc(s.n)}</span><span class="slot-lv">${'★'.repeat(s.lv)}${'☆'.repeat(5 - s.lv)}</span></li>`
        : `<li>${esc(s.n)}</li>`).join('');
      return `<div class="panel skill-group"><h3>${esc(title)}</h3><ul class="${m === 'game' ? 'slots' : 'chips chips-lg'}">${items}</ul></div>`;
    }).join('');

    // Community
    const C = D.community[l];
    $('#community-box').innerHTML = `
      <article class="panel com-card com-spooky">
        <img class="com-poster" src="assets/img/spooky-poster.webp" alt="Spooky Game Dev" loading="lazy">
        <div><h3>${esc(C.spooky.title)}</h3><p class="com-date">${esc(C.spooky.date)}</p><p>${esc(C.spooky.text)}</p>
        <ul class="com-stats">${C.spooky.stats.map((s) => `<li><b>${esc(s.v)}</b><span>${esc(s.k)}</span></li>`).join('')}</ul></div>
      </article>
      <article class="panel com-card com-gdupn"><div class="com-badge">🎮</div><div><h3>${esc(C.gdupn.title)}</h3><p>${esc(C.gdupn.text)}</p></div></article>
      <figure class="panel com-photo"><img src="assets/img/spooky-grupo.webp" alt="Spooky Game Dev — grupo" loading="lazy"></figure>
      <figure class="panel com-photo"><img src="assets/img/spooky-equipo.webp" alt="Spooky Game Dev — equipo organizador" loading="lazy"></figure>`;

    // Contact
    const K = D.contact[m][l];
    $('#contact-title').textContent = K.title;
    $('#contact-text').textContent = K.text;
    $('#contact-actions').innerHTML = `
      <a class="btn btn-primary" href="mailto:${D.links.email}">${ICON.mail}<span>${D.links.email}</span></a>
      <button class="btn btn-ghost" type="button" id="copy-mail">${ICON.copy}<span>Copy</span></button>
      <a class="btn btn-ghost" href="${D.links.linkedin}" target="_blank" rel="noopener">${ICON.linkedin}<span>LinkedIn</span></a>
      <a class="btn btn-ghost" href="${D.links.github}" target="_blank" rel="noopener">${ICON.github}<span>GitHub</span></a>`;
    $('#copy-mail').onclick = () => {
      navigator.clipboard?.writeText(D.links.email).then(() => toast(UI.copied), () => {});
    };

    document.title = m === 'game' ? 'Alexis Herencia — Game Developer' : 'Alexis Herencia — Web Developer';
    observeReveal();
  }

  /* ───────────── Código tipeado (web) ───────────── */
  let typeTimer;
  function typeCode(l) {
    const lines = l === 'en'
      ? ['const alexis = {', "  role: 'Full-Stack Developer',", "  frontend: ['Angular', 'TypeScript'],", "  backend: ['Spring Boot', '.NET'],", "  patterns: ['MVVM', 'MVC', 'SOLID'],", "  location: 'Lima, PE',", '  openToWork: true,', '};']
      : ['const alexis = {', "  rol: 'Full-Stack Developer',", "  frontend: ['Angular', 'TypeScript'],", "  backend: ['Spring Boot', '.NET'],", "  patrones: ['MVVM', 'MVC', 'SOLID'],", "  ciudad: 'Lima, PE',", '  disponible: true,', '};'];
    const text = lines.join('\n');
    const pre = $('#code');
    clearTimeout(typeTimer);
    const hl = (s) => esc(s)
      .replace(/(&#39;[^&]*?&#39;)/g, '<span class="tk-s">$1</span>')
      .replace(/\b(const|true)\b/g, '<span class="tk-k">$1</span>')
      .replace(/^(\s+)(\w+):/gm, '$1<span class="tk-p">$2</span>:');
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) { pre.innerHTML = hl(text); return; }
    let i = 0;
    (function step() {
      i += 2;
      pre.innerHTML = hl(text.slice(0, i)) + '<span class="caret"></span>';
      if (i < text.length) typeTimer = setTimeout(step, 18);
    })();
  }

  /* ───────────── Cambio de modo con transición ───────────── */
  let switching = false;
  function setMode(next) {
    if (switching || next === state.mode) return;
    switching = true;
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const wipe = $('.wipe');
    wipe.className = 'wipe to-' + next;
    const apply = () => {
      root.dataset.mode = next; save('mode', next); syncUrl(); render(); bg.reset();
    };
    if (reduce) { apply(); switching = false; return; }
    requestAnimationFrame(() => wipe.classList.add('in'));
    setTimeout(() => {
      apply();
      wipe.classList.remove('in'); wipe.classList.add('out');
      setTimeout(() => { wipe.className = 'wipe'; switching = false; }, 450);
    }, 430);
    beep(next === 'web' ? 660 : 330);
  }
  function syncUrl() {
    const u = new URL(location.href);
    u.searchParams.set('mode', state.mode);
    if (state.lang === 'en') u.searchParams.set('lang', 'en'); else u.searchParams.delete('lang');
    history.replaceState(null, '', u);
  }

  /* ───────────── Sonidito retro (solo al cambiar a mano) ───────────── */
  let actx;
  function beep(f) {
    try {
      actx = actx || new (window.AudioContext || window.webkitAudioContext)();
      const o = actx.createOscillator(), g = actx.createGain();
      o.type = 'square'; o.frequency.setValueAtTime(f, actx.currentTime);
      o.frequency.exponentialRampToValueAtTime(f * 2, actx.currentTime + 0.12);
      g.gain.setValueAtTime(0.04, actx.currentTime); g.gain.exponentialRampToValueAtTime(0.0001, actx.currentTime + 0.18);
      o.connect(g).connect(actx.destination); o.start(); o.stop(actx.currentTime + 0.2);
    } catch (e) {}
  }

  /* ───────────── Fondo animado ───────────── */
  const bg = (function () {
    const c = $('#bg'), g = c.getContext('2d');
    let w, h, dpr, parts = [], raf;
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    function size() {
      dpr = Math.min(devicePixelRatio || 1, 2);
      w = c.width = innerWidth * dpr; h = c.height = innerHeight * dpr;
      c.style.width = innerWidth + 'px'; c.style.height = innerHeight + 'px';
    }
    function reset() {
      const game = state.mode === 'game';
      const n = Math.round((innerWidth * innerHeight) / (game ? 9000 : 26000));
      parts = Array.from({ length: n }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        z: Math.random() * 0.9 + 0.1, t: Math.random() * 6.28,
      }));
      if (reduce) draw(0);
    }
    function draw(dt) {
      g.clearRect(0, 0, w, h);
      const game = state.mode === 'game';
      for (const p of parts) {
        if (game) {
          p.y += p.z * 0.6 * dpr * dt; if (p.y > h) { p.y = 0; p.x = Math.random() * w; }
          p.t += 0.03 * dt;
          const a = 0.35 + Math.sin(p.t) * 0.3 * p.z;
          const s = Math.ceil(p.z * 3) * dpr;
          g.fillStyle = p.z > 0.8 ? `rgba(255,94,168,${a})` : p.z > 0.6 ? `rgba(124,247,255,${a})` : `rgba(255,255,255,${a})`;
          g.fillRect(Math.round(p.x / s) * s, Math.round(p.y / s) * s, s, s);
        } else {
          p.t += 0.004 * dt; p.x += Math.cos(p.t) * 0.15 * dpr * dt; p.y += Math.sin(p.t * 0.8) * 0.15 * dpr * dt;
          if (p.x < 0) p.x = w; if (p.x > w) p.x = 0; if (p.y < 0) p.y = h; if (p.y > h) p.y = 0;
          g.beginPath(); g.arc(p.x, p.y, 1.4 * dpr * p.z + 0.5, 0, 6.28);
          g.fillStyle = `rgba(99,102,241,${0.18 + p.z * 0.25})`; g.fill();
        }
      }
      if (!game) {
        g.lineWidth = dpr * 0.6;
        for (let i = 0; i < parts.length; i++) for (let j = i + 1; j < parts.length; j++) {
          const a = parts[i], b = parts[j], d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 140 * dpr) { g.strokeStyle = `rgba(99,102,241,${0.12 * (1 - d / (140 * dpr))})`; g.beginPath(); g.moveTo(a.x, a.y); g.lineTo(b.x, b.y); g.stroke(); }
        }
      }
    }
    let last = performance.now();
    function loop(now) {
      const dt = Math.min((now - last) / 16.7, 3); last = now;
      if (!document.hidden) draw(dt);
      raf = requestAnimationFrame(loop);
    }
    addEventListener('resize', () => { size(); reset(); });
    size(); reset();
    if (!reduce) raf = requestAnimationFrame(loop);
    return { reset };
  })();

  /* ───────────── Reveal al hacer scroll ───────────── */
  let io;
  function observeReveal() {
    if (!('IntersectionObserver' in window)) return;
    io = io || new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('seen'); io.unobserve(e.target); } }), { threshold: 0.12 });
    $$('.panel, .tl-item, .section-title').forEach((el) => { if (!el.classList.contains('seen')) { el.classList.add('reveal'); io.observe(el); } });
  }

  /* ───────────── Toast ───────────── */
  let toastT;
  function toast(msg) {
    const t = $('#toast'); t.textContent = msg; t.classList.add('show');
    clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove('show'), 2200);
  }

  /* ───────────── Konami code ───────────── */
  const KONAMI = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
  let kpos = 0;
  addEventListener('keydown', (e) => {
    kpos = e.key.toLowerCase() === KONAMI[kpos].toLowerCase() ? kpos + 1 : (e.key === KONAMI[0] ? 1 : 0);
    if (kpos === KONAMI.length) {
      kpos = 0;
      root.classList.toggle('rainbow');
      toast(state.lang === 'en' ? '★ +30 LIVES — cheat unlocked!' : '★ +30 VIDAS — ¡truco desbloqueado!');
      [523, 659, 784, 1046].forEach((f, i) => setTimeout(() => beep(f / 2), i * 90));
    }
  });

  /* ───────────── Controles ───────────── */
  $('#switch').addEventListener('click', () => setMode(state.mode === 'game' ? 'web' : 'game'));
  $('#lang').addEventListener('click', () => {
    root.lang = state.lang === 'es' ? 'en' : 'es'; save('lang', root.lang); syncUrl(); render();
  });
  const burger = $('#burger'), nav = $('#nav');
  burger.addEventListener('click', () => {
    const open = nav.classList.toggle('open'); burger.setAttribute('aria-expanded', String(open));
  });
  nav.addEventListener('click', (e) => { if (e.target.tagName === 'A') { nav.classList.remove('open'); burger.setAttribute('aria-expanded', 'false'); } });
  addEventListener('scroll', () => $('.topbar').classList.toggle('scrolled', scrollY > 20), { passive: true });
  $('#year').textContent = new Date().getFullYear();

  /* ───────────── Iconos ───────────── */
  const ICON = {
    github: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.7 18.3 5 18.3 5c.6 1.6.2 2.8.1 3.2.8.8 1.3 1.9 1.3 3.1 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M20.4 20.5h-3.6v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.3V9h3.4v1.6h.1c.5-.9 1.6-1.8 3.4-1.8 3.6 0 4.3 2.4 4.3 5.5v6.2ZM5.3 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2ZM7.1 20.5H3.5V9h3.6v11.5ZM22.2 0H1.8C.8 0 0 .8 0 1.7v20.6c0 .9.8 1.7 1.8 1.7h20.4c1 0 1.8-.8 1.8-1.7V1.7C24 .8 23.2 0 22.2 0Z"/></svg>',
    mail: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="2" d="M3 5h18v14H3z M3 6l9 7 9-7"/></svg>',
    copy: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="2" d="M9 9h11v11H9z M5 15H4V4h11v1"/></svg>',
  };

  render();
  syncUrl();
})();
