// Skills component — grouped tech stack with animated progress bars
import { skills } from "../js/data.js";

export function renderSkills(root) {
  const groups = skills
    .map(
      (g, i) => `
      <div class="glass skill-group" data-reveal="scale" data-stagger style="--i:${i}">
        <h3><span class="ico">${g.icon}</span> ${g.title}</h3>
        <div class="skill-bars">
          ${g.items
            .map(
              (it) => `
            <div class="skill-bar">
              <div class="skill-bar-top">
                <span class="skill-name">${it.name}</span>
                <span class="skill-level">${it.level}%</span>
              </div>
              <div class="skill-track">
                <span class="skill-fill" data-level="${it.level}" style="--lvl:${it.level}%"></span>
              </div>
            </div>`
            )
            .join("")}
        </div>
      </div>`
    )
    .join("");

  root.innerHTML = /* html */ `
    <section class="section" id="skills">
      <div class="container">
        <div class="section-head" data-reveal>
          <span class="section-eyebrow">// Keahlian</span>
          <h2 class="section-title">Tech <span class="gradient-text">Stack</span></h2>
          <p class="section-sub">Teknologi yang saya kuasai, dikelompokkan berdasarkan kategori.</p>
        </div>

        <div class="skills-grid" data-stagger>
          ${groups}
        </div>
      </div>
    </section>
  `;
}
