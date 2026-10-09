// Testimonials component — interactive quote cards
import { testimonials } from "../js/data.js";

export function renderTestimonials(root) {
  const cards = testimonials
    .map(
      (t, i) => `
      <figure class="glass testimonial-card" data-reveal="scale" data-stagger style="--i:${i}">
        <span class="quote-mark" aria-hidden="true">&ldquo;</span>
        <blockquote class="testimonial-quote">${t.quote}</blockquote>
        <figcaption class="testimonial-author">
          <span class="testimonial-avatar">${t.initials}</span>
          <span class="testimonial-meta">
            <span class="testimonial-name">${t.name}</span>
            <span class="testimonial-title">${t.title}</span>
          </span>
        </figcaption>
      </figure>`
    )
    .join("");

  root.innerHTML = /* html */ `
    <section class="section" id="testimonials">
      <div class="container">
        <div class="section-head" data-reveal>
          <span class="section-eyebrow">// Testimoni</span>
          <h2 class="section-title">Apa Kata <span class="gradient-text">Mereka</span></h2>
          <p class="section-sub">Umpan balik dari rekan kerja dan klien yang pernah berkolaborasi.</p>
        </div>

        <div class="testimonials-grid" data-stagger>
          ${cards}
        </div>
      </div>
    </section>
  `;
}
