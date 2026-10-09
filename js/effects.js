// ============================================================
// Interactive effects: particles, typewriter, reveal, counters,
// navbar behavior, scroll progress, mobile menu, active links.
// ============================================================

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------- Animated particle canvas ---------- */
export function initParticles() {
  const canvas = document.getElementById("particles");
  if (!canvas || reduceMotion) return;
  const ctx = canvas.getContext("2d");
  let w, h, particles, raf;

  const COUNT = Math.min(70, Math.floor(window.innerWidth / 22));
  const colors = ["124,92,255", "34,211,238", "244,114,182"];

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }

  function make() {
    particles = Array.from({ length: COUNT }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 1.8 + 0.6,
      c: colors[Math.floor(Math.random() * colors.length)],
      a: Math.random() * 0.5 + 0.2,
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${p.c},${p.a})`;
      ctx.fill();

      // link nearby particles
      for (let j = i + 1; j < particles.length; j++) {
        const q = particles[j];
        const dx = p.x - q.x;
        const dy = p.y - q.y;
        const dist = Math.hypot(dx, dy);
        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.strokeStyle = `rgba(${p.c},${(1 - dist / 120) * 0.12})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }
    raf = requestAnimationFrame(draw);
  }

  resize();
  make();
  draw();

  let t;
  window.addEventListener("resize", () => {
    clearTimeout(t);
    t = setTimeout(() => {
      cancelAnimationFrame(raf);
      resize();
      make();
      draw();
    }, 200);
  });
}

/* ---------- Typewriter rotating roles ---------- */
export function initTypewriter(roles) {
  const el = document.getElementById("typewriter");
  if (!el) return;
  if (reduceMotion) {
    el.textContent = roles[0];
    return;
  }

  let roleIdx = 0;
  let charIdx = 0;
  let deleting = false;

  function tick() {
    const current = roles[roleIdx];
    if (!deleting) {
      el.textContent = current.slice(0, ++charIdx);
      if (charIdx === current.length) {
        deleting = true;
        return setTimeout(tick, 1600);
      }
    } else {
      el.textContent = current.slice(0, --charIdx);
      if (charIdx === 0) {
        deleting = false;
        roleIdx = (roleIdx + 1) % roles.length;
      }
    }
    setTimeout(tick, deleting ? 45 : 85);
  }
  tick();
}

/* ---------- Scroll reveal (IntersectionObserver) ---------- */
export function initReveal() {
  const els = document.querySelectorAll("[data-reveal]");
  if (reduceMotion || !("IntersectionObserver" in window)) {
    els.forEach((e) => e.classList.add("in-view"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14, rootMargin: "0px 0px -8% 0px" }
  );
  els.forEach((e) => io.observe(e));
}

/* ---------- Animated number counters ---------- */
export function initCounters() {
  const nums = document.querySelectorAll("[data-count]");
  if (!nums.length) return;

  const run = (el) => {
    const target = parseInt(el.dataset.count, 10);
    const suffix = el.dataset.suffix || "";
    if (reduceMotion) {
      el.textContent = target + suffix;
      return;
    }
    const dur = 1500;
    const start = performance.now();
    const step = (now) => {
      const prog = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - prog, 3);
      el.textContent = Math.round(eased * target) + suffix;
      if (prog < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  if (!("IntersectionObserver" in window)) {
    nums.forEach(run);
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          run(entry.target);
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );
  nums.forEach((n) => io.observe(n));
}

/* ---------- Navbar: scroll state + progress + active link ---------- */
export function initNav() {
  const navbar = document.getElementById("navbar");
  const progress = document.getElementById("scrollProgress");
  const links = Array.from(document.querySelectorAll(".nav-link"));
  const sections = links
    .map((l) => document.querySelector(l.getAttribute("href")))
    .filter(Boolean);

  const onScroll = () => {
    const y = window.scrollY;
    navbar.classList.toggle("scrolled", y > 20);

    const docH = document.documentElement.scrollHeight - window.innerHeight;
    if (progress) progress.style.width = (y / docH) * 100 + "%";

    // active section detection
    let currentId = sections[0]?.id;
    const mid = y + window.innerHeight * 0.32;
    for (const sec of sections) {
      if (sec.offsetTop <= mid) currentId = sec.id;
    }
    links.forEach((l) =>
      l.classList.toggle("active", l.getAttribute("href") === "#" + currentId)
    );
  };

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

/* ---------- Mobile menu toggle ---------- */
export function initMobileMenu() {
  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");
  if (!toggle || !links) return;

  const close = () => {
    links.classList.remove("open");
    toggle.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Buka menu");
  };

  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Tutup menu" : "Buka menu");
  });

  links.querySelectorAll(".nav-link").forEach((l) =>
    l.addEventListener("click", close)
  );
}

/* ---------- Animated skill progress bars ---------- */
export function initSkillBars() {
  const fills = document.querySelectorAll(".skill-fill");
  if (!fills.length) return;

  const run = (el) => {
    const lvl = el.dataset.level || "0";
    el.style.width = reduceMotion ? lvl + "%" : "";
    if (!reduceMotion) requestAnimationFrame(() => (el.style.width = lvl + "%"));
    else el.style.width = lvl + "%";
  };

  if (!("IntersectionObserver" in window)) {
    fills.forEach(run);
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          run(entry.target);
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );
  fills.forEach((f) => io.observe(f));
}

/* ---------- Contact form validation + states ---------- */
export function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;
  const status = document.getElementById("formStatus");

  const fields = {
    name: form.querySelector("#cf-name"),
    email: form.querySelector("#cf-email"),
    message: form.querySelector("#cf-message"),
  };

  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const setError = (key, msg) => {
    const errEl = form.querySelector(`[data-error-for="${key}"]`);
    const input = fields[key];
    if (errEl) errEl.textContent = msg || "";
    if (input) {
      input.classList.toggle("invalid", !!msg);
      input.setAttribute("aria-invalid", msg ? "true" : "false");
    }
    return !msg;
  };

  const validate = (key) => {
    const val = (fields[key]?.value || "").trim();
    if (key === "name") {
      if (!val) return setError("name", "Nama wajib diisi.");
      if (val.length < 2) return setError("name", "Nama terlalu pendek.");
      return setError("name", "");
    }
    if (key === "email") {
      if (!val) return setError("email", "Email wajib diisi.");
      if (!emailRe.test(val)) return setError("email", "Format email tidak valid.");
      return setError("email", "");
    }
    if (key === "message") {
      if (!val) return setError("message", "Pesan wajib diisi.");
      if (val.length < 10) return setError("message", "Pesan minimal 10 karakter.");
      return setError("message", "");
    }
    return true;
  };

  // live validation on blur/input
  Object.keys(fields).forEach((key) => {
    fields[key]?.addEventListener("blur", () => validate(key));
    fields[key]?.addEventListener("input", () => {
      if (fields[key].classList.contains("invalid")) validate(key);
    });
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const valid = ["name", "email", "message"].map(validate).every(Boolean);

    if (!valid) {
      status.textContent = "⚠️ Mohon perbaiki kolom yang ditandai.";
      status.className = "form-status error";
      return;
    }

    // Client-side only (no backend/API): simulate success state.
    const btn = form.querySelector(".form-submit");
    btn.disabled = true;
    btn.classList.add("loading");
    status.textContent = "Mengirim...";
    status.className = "form-status";

    setTimeout(() => {
      btn.disabled = false;
      btn.classList.remove("loading");
      status.textContent = "✅ Terima kasih! Pesan Anda berhasil dikirim.";
      status.className = "form-status success";
      form.reset();
      Object.keys(fields).forEach((k) => setError(k, ""));
    }, 1100);
  });
}

/* ---------- Back to top button ---------- */
export function initBackTop() {
  const btn = document.getElementById("backTop");
  if (!btn) return;
  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  });
}

/* ---------- Subtle tilt on glass cards ---------- */
export function initTilt() {
  if (reduceMotion || window.matchMedia("(hover: none)").matches) return;
  const cards = document.querySelectorAll(".project-card, .stat-card, .testimonial-card");
  cards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = `translateY(-6px) rotateX(${-py * 5}deg) rotateY(${px * 5}deg)`;
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });
  });
}
