// Contact component — validated form, contact details, embedded map
import { profile } from "../js/data.js";

export function renderContact(root) {
  root.innerHTML = /* html */ `
    <section class="section" id="contact">
      <div class="container">
        <div class="section-head" data-reveal>
          <span class="section-eyebrow">// Kontak</span>
          <h2 class="section-title">Mari <span class="gradient-text">Berkolaborasi</span></h2>
          <p class="section-sub">Punya ide atau proyek menarik? Kirim pesan dan saya akan segera membalas.</p>
        </div>

        <div class="contact-grid">
          <!-- Left: info + map -->
          <div class="contact-left" data-reveal="left">
            <div class="glass contact-panel">
              <div class="contact-list">
                <a class="contact-item" href="mailto:${profile.email}">
                  <span class="contact-ico">✉️</span>
                  <span class="contact-meta">
                    <span class="k">Email</span>
                    <span class="v">${profile.email}</span>
                  </span>
                </a>
                <a class="contact-item" href="tel:${profile.phoneHref}">
                  <span class="contact-ico">📱</span>
                  <span class="contact-meta">
                    <span class="k">Telepon</span>
                    <span class="v">${profile.phone}</span>
                  </span>
                </a>
                <div class="contact-item">
                  <span class="contact-ico">📍</span>
                  <span class="contact-meta">
                    <span class="k">Lokasi</span>
                    <span class="v">${profile.location}</span>
                  </span>
                </div>
              </div>
            </div>

            <div class="glass map-embed" aria-label="Peta lokasi Garut, Indonesia">
              <iframe
                title="Peta Garut, Indonesia"
                src="https://www.openstreetmap.org/export/embed.html?bbox=107.75%2C-7.26%2C107.99%2C-7.13&layer=mapnik&marker=-7.2129%2C107.9075"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
              <span class="map-pin">📍 ${profile.location}</span>
            </div>
          </div>

          <!-- Right: form -->
          <div class="glass contact-panel" data-reveal="right">
            <form id="contactForm" class="contact-form" novalidate>
              <div class="field">
                <label for="cf-name">Nama</label>
                <input type="text" id="cf-name" name="name" placeholder="Nama lengkap Anda" autocomplete="name" required />
                <span class="field-error" data-error-for="name"></span>
              </div>

              <div class="field">
                <label for="cf-email">Email</label>
                <input type="email" id="cf-email" name="email" placeholder="email@contoh.com" autocomplete="email" required />
                <span class="field-error" data-error-for="email"></span>
              </div>

              <div class="field">
                <label for="cf-message">Pesan</label>
                <textarea id="cf-message" name="message" rows="5" placeholder="Tuliskan pesan Anda..." required></textarea>
                <span class="field-error" data-error-for="message"></span>
              </div>

              <button type="submit" class="btn btn-primary form-submit">
                Kirim Pesan <span aria-hidden="true">→</span>
              </button>

              <p class="form-status" id="formStatus" role="status" aria-live="polite"></p>
            </form>
          </div>
        </div>
      </div>
    </section>
  `;
}
