document.getElementById("currentYear").textContent = new Date().getFullYear();

// Reveal sections smoothly as they enter the viewport.
const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach(item => observer.observe(item));
} else {
  revealItems.forEach(item => item.classList.add("visible"));
}

// Subtle pointer-follow movement on navigation links.
if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
  document.querySelectorAll(".main-nav a").forEach(link => {
    link.addEventListener("pointermove", event => {
      const rect = link.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - .5;
      const y = (event.clientY - rect.top) / rect.height - .5;
      link.style.transform = `translate(${x * 3}px, ${-2 + y * 2}px)`;
    });
    link.addEventListener("pointerleave", () => { link.style.transform = ""; });
  });
}




/* === MIS Career Hub shared interactions === */
(() => {
  const body = document.body;
  const page = body.dataset.page || 'page';
  const header = document.querySelector('.site-header');
  const canvas = document.getElementById('networkCanvas');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Responsive interactive network grid: nodes gently react to the pointer.
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let width = 0, height = 0, points = [], columns = 0, raf = 0;
    const spacing = window.innerWidth < 650 ? 58 : 70;
    const pointer = { x: -1000, y: -1000, active: false };
    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      width = window.innerWidth; height = window.innerHeight;
      canvas.width = Math.round(width * dpr); canvas.height = Math.round(height * dpr);
      canvas.style.width = width + 'px'; canvas.style.height = height + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      columns = Math.ceil(width / spacing) + 2;
      const rows = Math.ceil(height / spacing) + 2; points = [];
      for (let row = 0; row < rows; row++) for (let col = 0; col < columns; col++) {
        const x = (col - 1) * spacing, y = (row - 1) * spacing;
        points.push({ x, y, ox: x, oy: y, phase: Math.random() * Math.PI * 2, row, col });
      }
      if (reduceMotion) draw(0);
    }
    function draw(time) {
      ctx.clearRect(0, 0, width, height);
      const t = reduceMotion ? 0 : time * .00025;
      for (const p of points) {
        let dx = reduceMotion ? 0 : Math.sin(t + p.phase) * 1.15;
        let dy = reduceMotion ? 0 : Math.cos(t + p.phase) * 1.15;
        if (pointer.active) {
          const mx = p.ox - pointer.x, my = p.oy - pointer.y, dist = Math.hypot(mx, my);
          if (dist < 185 && dist > 0) { const force = (185 - dist) / 185 * 9; dx += mx / dist * force; dy += my / dist * force; }
        }
        p.x = p.ox + dx; p.y = p.oy + dy;
      }
      for (let i = 0; i < points.length; i++) {
        const a = points[i];
        const neighbours = [a.col < columns - 1 ? i + 1 : -1, i + columns - 1, i + columns, a.col < columns - 1 ? i + columns + 1 : -1];
        for (const j of neighbours) {
          if (j < 0 || j >= points.length) continue;
          const b = points[j], dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < spacing * 1.65) {
            ctx.strokeStyle = 'rgba(98,230,194,' + ((1 - dist / (spacing * 1.65)) * .19) + ')';
            ctx.lineWidth = .7; ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
        const near = pointer.active && Math.hypot(a.x - pointer.x, a.y - pointer.y) < 170;
        ctx.fillStyle = near ? 'rgba(121,169,255,.8)' : 'rgba(98,230,194,.32)';
        ctx.beginPath(); ctx.arc(a.x, a.y, near ? 1.8 : 1, 0, Math.PI * 2); ctx.fill();
      }
      if (!reduceMotion) raf = requestAnimationFrame(draw);
    }
    window.addEventListener('pointermove', e => { pointer.x = e.clientX; pointer.y = e.clientY; pointer.active = true; if (reduceMotion) draw(0); }, { passive: true });
    window.addEventListener('pointerleave', () => { pointer.active = false; if (reduceMotion) draw(0); });
    window.addEventListener('resize', resize, { passive: true });
    document.addEventListener('visibilitychange', () => { if (document.hidden) cancelAnimationFrame(raf); else if (!reduceMotion) raf = requestAnimationFrame(draw); });
    resize(); if (!reduceMotion) raf = requestAnimationFrame(draw);
  }

  // Header interaction is independent from the background network.
  if (header) {
    const setHeaderPointer = e => {
      const r = header.getBoundingClientRect();
      header.style.setProperty('--header-x', (e.clientX - r.left) + 'px');
      header.style.setProperty('--header-y', (e.clientY - r.top) + 'px');
    };
    if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      header.addEventListener('pointermove', setHeaderPointer, { passive: true });
    }
    const updateProgress = () => {
      const doc = document.documentElement;
      const max = Math.max(1, doc.scrollHeight - window.innerHeight);
      header.style.setProperty('--scroll-progress', String(Math.min(1, Math.max(0, window.scrollY / max))));
    };
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress, { passive: true });
    updateProgress();
  }

  // Mobile menu, with safe checks for every page.
  const menuToggle = document.getElementById('menuToggle');
  const mainNav = document.getElementById('mainNav');
  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
      const open = mainNav.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', String(open));
    });
    mainNav.addEventListener('click', e => {
      if (e.target.closest('a')) { mainNav.classList.remove('open'); menuToggle.setAttribute('aria-expanded', 'false'); }
    });
  }

  // Smooth transition for navigation between local pages.
  const overlay = document.createElement('div');
  overlay.className = 'page-transition';
  overlay.setAttribute('aria-hidden', 'true');
  body.appendChild(overlay);
  document.querySelectorAll('a[href]').forEach(link => {
    link.addEventListener('click', e => {
      const raw = link.getAttribute('href');
      if (!raw || raw.startsWith('#') || link.target === '_blank' || e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) return;
      let url; try { url = new URL(raw, window.location.href); } catch { return; }
      if (url.origin !== location.origin || url.pathname === location.pathname) return;
      e.preventDefault(); overlay.classList.add('is-leaving');
      window.setTimeout(() => { window.location.href = url.href; }, 260);
    });
  });
  body.classList.add('page-enter');
})();
