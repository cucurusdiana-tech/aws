// About component — bio, highlights, animated statistics
import { bio, highlights, stats } from "../js/data.js";

export function renderAbout(root) {
  const bioHtml = bio.map((p) => `<p>${p}</p>`).join("");

  const highlightsHtml = highlights
    .map(
      (h, i) => `
      <div class="highlight" data-reveal data-stagger style="--i:${i}">
        <span class="check">✓</span>
        <span class="h-text">
          <strong>${h.title}</strong>
          <span>${h.desc}</span>
        </span>
      </div>`
    )
    .join("");

  const statsHtml = stats
    .map(
      (s, i) => `
      <div class="stat-card" data-reveal="scale" data-stagger style="--i:${i}">
        <div class="stat-num" data-count="${s.num}" data-suffix="${s.suffix}">0${s.suffix}</div>
        <div class="stat-label">${s.label}</div>
      </div>`
    )
    .join("");

  root.innerHTML = /* html */ `
    <section class="section" id="about">
      <div class="container">
        <div class="section-head" data-reveal>
          <span class="section-eyebrow">// Tentang Saya</span>
          <h2 class="section-title">Mengenal <span class="gradient-text">Lebih Dekat</span></h2>
          <p class="section-sub">Dedikasi pada kualitas, inovasi, dan dampak nyata di setiap baris kode.</p>
        </div>

        <div class="about-grid">
          <div class="about-bio" data-reveal="left">
            ${bioHtml}
            <div class="about-highlights" data-stagger>
              ${highlightsHtml}
            </div>
          </div>

          <div class="stats-grid" data-stagger>
            ${statsHtml}
          </div>
        </div>
      </div>
    </section>
  `;
}
