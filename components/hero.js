// Hero component — fullscreen landing with typewriter + floating avatar
import { profile } from "../js/data.js";

export function renderHero(root) {
  root.innerHTML = /* html */ `
    <section class="section hero" id="hero">
      <div class="container">
        <div class="hero-grid">
          <div class="hero-copy">
            <div class="badge hero-badge hero-anim d1">
              <span class="dot"></span> Available for opportunities
            </div>

            <h1 class="hero-title hero-anim d2">
              <span>Halo, saya</span>
              <span class="line-2 gradient-text">${profile.firstName} ${profile.lastName}</span>
            </h1>

            <p class="hero-role hero-anim d3">
              <span id="typewriter"></span><span class="cursor"></span>
            </p>

            <p class="hero-tagline hero-anim d4">${profile.tagline}</p>

            <div class="hero-cta hero-anim d4">
              <a href="#projects" class="btn btn-primary">
                Lihat Project
                <span aria-hidden="true">→</span>
              </a>
              <a href="assets/resume.txt" download="CV-Cucu-Rusdiana.txt" class="btn btn-ghost">
                Download Resume
                <span aria-hidden="true">↓</span>
              </a>
            </div>

            <div class="hero-meta hero-anim d5">
              <span>📍 ${profile.location}</span>
              <span>✉️ ${profile.email}</span>
            </div>
          </div>

          <div class="hero-visual hero-visual-anim">
            <div class="avatar-ring">
              <div class="avatar">
                <img class="avatar-img" src="assets/profile.png" alt="Foto profil ${profile.name}" loading="eager" decoding="async" />
              </div>
              <div class="float-chip c1">&lt;/&gt; Clean Code</div>
              <div class="float-chip c2">🤖 AI Powered</div>
              <div class="float-chip c3">☁️ Cloud Ready</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
