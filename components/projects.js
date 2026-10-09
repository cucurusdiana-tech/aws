// Projects component — interactive glassmorphism cards with
// image placeholder, tech tags, GitHub + live demo buttons
import { projects } from "../js/data.js";

export function renderProjects(root) {
  const cards = projects
    .map(
      (p, i) => `
      <article class="glass project-card" data-reveal="scale" data-stagger style="--i:${i}">
        <div class="project-thumb" style="background:${p.gradient}">
          <span class="project-thumb-icon">${p.icon}</span>
          <span class="project-thumb-glow"></span>
        </div>
        <div class="project-body">
          <h3 class="project-title">${p.title}</h3>
          <p class="project-desc">${p.desc}</p>
          <div class="project-tags">
            ${p.tags.map((t) => `<span class="project-tag">${t}</span>`).join("")}
          </div>
          <div class="project-actions">
            <a class="btn-mini btn-mini-ghost" href="${p.github}" target="_blank" rel="noopener noreferrer" aria-label="Lihat kode ${p.title} di GitHub">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 5 18.3 5.3 18.3 5.3c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.8 1 .8 2.1v3c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z"/></svg>
              GitHub
            </a>
            <a class="btn-mini btn-mini-primary" href="${p.demo}" target="_blank" rel="noopener noreferrer" aria-label="Live demo ${p.title}">
              Live Demo <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </article>`
    )
    .join("");

  root.innerHTML = /* html */ `
    <section class="section" id="projects">
      <div class="container">
        <div class="section-head" data-reveal>
          <span class="section-eyebrow">// Portofolio</span>
          <h2 class="section-title">Project <span class="gradient-text">Unggulan</span></h2>
          <p class="section-sub">Beberapa karya yang menggabungkan AI, web modern, dan arsitektur bersih.</p>
        </div>

        <div class="projects-grid" data-stagger>
          ${cards}
        </div>
      </div>
    </section>
  `;
}
