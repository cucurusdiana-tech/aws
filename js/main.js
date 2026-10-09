// ============================================================
// Entry point — mount components, wire up effects.
// ============================================================
import { profile } from "./data.js";
import { renderHero } from "../components/hero.js";
import { renderAbout } from "../components/about.js";
import { renderSkills } from "../components/skills.js";
import { renderProjects } from "../components/projects.js";
import { renderExperience } from "../components/experience.js";
import { renderTestimonials } from "../components/testimonials.js";
import { renderContact } from "../components/contact.js";
import {
  initParticles,
  initTypewriter,
  initReveal,
  initCounters,
  initNav,
  initMobileMenu,
  initTilt,
  initSkillBars,
  initContactForm,
  initBackTop,
} from "./effects.js";

function mountSections() {
  renderHero(document.getElementById("hero-root"));
  renderAbout(document.getElementById("about-root"));
  renderSkills(document.getElementById("skills-root"));
  renderProjects(document.getElementById("projects-root"));
  renderExperience(document.getElementById("experience-root"));
  renderTestimonials(document.getElementById("testimonials-root"));
  renderContact(document.getElementById("contact-root"));
}

function wireFooterLinks() {
  const gh = document.getElementById("footerGithub");
  const ig = document.getElementById("footerInstagram");
  const mail = document.getElementById("footerEmail");
  if (gh) gh.href = profile.github;
  if (ig) ig.href = profile.instagram;
  if (mail) mail.href = `mailto:${profile.email}`;
}

function init() {
  mountSections();
  wireFooterLinks();

  // dynamic footer year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // background + hero
  initParticles();
  initTypewriter(profile.roles);

  // scroll-driven behaviors (run after DOM is populated)
  initReveal();
  initCounters();
  initSkillBars();
  initNav();
  initMobileMenu();
  initTilt();
  initContactForm();
  initBackTop();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
