/* ===========================
   HAMBURGER MENU
   =========================== */
(function () {
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');
  if (!hamburger || !navLinks) return;

  hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}());


/* ===========================
   HERO CANVAS — MOLECULAR NETWORK
   =========================== */
(function () {
  const canvas = document.getElementById('heroBg');
  if (!canvas) return;

  const ctx       = canvas.getContext('2d');
  const TOTAL     = 68;
  const CONNECT   = 168;
  const HUB_RATIO = 0.14;
  const MOUSE_PULL = 190;
  const MOUSE_F    = 0.055;
  const MAX_SPD    = 1.6;

  let W, H, nodes, tick = 0;
  const mouse = { x: -9999, y: -9999 };

  function mkNode() {
    const isHub = Math.random() < HUB_RATIO;
    return {
      x:     Math.random() * W,
      y:     Math.random() * H,
      vx:    (Math.random() - 0.5) * 0.5,
      vy:    (Math.random() - 0.5) * 0.38,
      r:     isHub ? Math.random() * 3.5 + 4 : Math.random() * 2.6 + 1.4,
      baseA: Math.random() * 0.4 + 0.25,
      phase: Math.random() * Math.PI * 2,
      isHub,
      white: !isHub && Math.random() > 0.68,
    };
  }

  function init() {
    W = canvas.width  = canvas.offsetWidth  || 1200;
    H = canvas.height = canvas.offsetHeight || 580;
    nodes = Array.from({ length: TOTAL }, mkNode);
  }

  function drawGlow(n, a) {
    const g = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r * 4.5);
    g.addColorStop(0,   `rgba(58,157,145,${a * 0.9})`);
    g.addColorStop(0.4, `rgba(42,127,116,${a * 0.35})`);
    g.addColorStop(1,   `rgba(42,127,116,0)`);
    ctx.beginPath();
    ctx.arc(n.x, n.y, n.r * 4.5, 0, Math.PI * 2);
    ctx.fillStyle = g;
    ctx.fill();
  }

  function frame() {
    tick++;
    ctx.clearRect(0, 0, W, H);

    // Draw edges
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const d  = Math.sqrt(dx * dx + dy * dy);
        if (d < CONNECT) {
          const t  = 1 - d / CONNECT;
          const lw = (nodes[i].isHub || nodes[j].isHub) ? t * 1.4 : t * 0.85;
          ctx.beginPath();
          ctx.strokeStyle = `rgba(58,157,145,${t * 0.26})`;
          ctx.lineWidth   = lw;
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.stroke();
        }
      }
    }

    // Update & draw nodes
    nodes.forEach(n => {
      // Mouse attraction
      const mdx = mouse.x - n.x;
      const mdy = mouse.y - n.y;
      const md  = Math.sqrt(mdx * mdx + mdy * mdy);
      if (md < MOUSE_PULL && md > 1) {
        const f = (1 - md / MOUSE_PULL) * MOUSE_F;
        n.vx += (mdx / md) * f;
        n.vy += (mdy / md) * f;
      }

      // Damping + speed clamp
      n.vx *= 0.982;
      n.vy *= 0.982;
      const spd = Math.sqrt(n.vx * n.vx + n.vy * n.vy);
      if (spd > MAX_SPD) { n.vx = n.vx / spd * MAX_SPD; n.vy = n.vy / spd * MAX_SPD; }

      // Move + wrap
      n.x += n.vx; n.y += n.vy;
      if (n.x < -20) n.x = W + 20; if (n.x > W + 20) n.x = -20;
      if (n.y < -20) n.y = H + 20; if (n.y > H + 20) n.y = -20;

      const a = n.isHub
        ? n.baseA + Math.sin(tick * 0.022 + n.phase) * 0.22
        : n.baseA;

      if (n.isHub) drawGlow(n, a);

      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fillStyle = n.white
        ? `rgba(255,255,255,${a * 0.55})`
        : `rgba(58,157,145,${a})`;
      ctx.fill();
    });

    requestAnimationFrame(frame);
  }

  // Mouse tracking
  const heroEl = canvas.closest('section') || canvas.parentElement.parentElement;
  heroEl.addEventListener('mousemove', e => {
    const r = canvas.getBoundingClientRect();
    mouse.x = e.clientX - r.left;
    mouse.y = e.clientY - r.top;
  });
  heroEl.addEventListener('mouseleave', () => { mouse.x = -9999; mouse.y = -9999; });

  // Debounced resize
  let rt;
  window.addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(init, 180); });

  init();
  frame();
}());
