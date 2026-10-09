// Experience component — professional timeline
import { experience } from "../js/data.js";

export function renderExperience(root) {
  const items = experience
    .map(
      (e, i) => `
      <div class="timeline-item ${e.current ? "is-current" : ""}" data-reveal="${i % 2 === 0 ? "left" : "right"}" data-stagger style="--i:${i}">
        <span class="timeline-dot" aria-hidden="true"></span>
        <div class="glass timeline-card">
          <span class="timeline-duration">${e.duration}</span>
          <h3 class="timeline-role">${e.role}</h3>
          <p class="timeline-company">${e.company}</p>
          <p class="timeline-desc">${e.desc}</p>
        </div>
      </div>`
    )
    .join("");

  root.innerHTML = /* html */ `
    <section class="section" id="experience">
      <div class="container">
        <div class="section-head" data-reveal>
          <span class="section-eyebrow">// Karier</span>
          <h2 class="section-title">Pengalaman <span class="gradient-text">Profesional</span></h2>
          <p class="section-sub">Perjalanan karier membangun produk digital dan sistem cerdas.</p>
        </div>

        <div class="timeline">
          <span class="timeline-line" aria-hidden="true"></span>
          ${items}
        </div>
      </div>
    </section>
  `;
}
