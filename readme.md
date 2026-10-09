# Portofolio — Cucu Rusdiana, S.Kom.

Website portofolio personal modern untuk seorang **Full Stack AI Engineer**. Dibangun dengan HTML, CSS, dan JavaScript murni (100% client-side, tanpa backend, tanpa API call) — siap langsung dibuka di browser maupun di-deploy ke production.

![Tema](https://img.shields.io/badge/tema-dark%20modern-7c5cff) ![Stack](https://img.shields.io/badge/stack-HTML%20%7C%20CSS%20%7C%20JS-22d3ee) ![Responsive](https://img.shields.io/badge/responsive-mobile%20%7C%20tablet%20%7C%20desktop-f472b6)

## ✨ Fitur

- **Single-page scroll** dengan navigasi lompat ke bagian (Beranda, Tentang, Keahlian, Project, Pengalaman, Testimoni, Kontak)
- **Hero section** dengan efek *typewriter*, label "available for opportunities", foto profil placeholder, dan tombol CTA (Lihat Project & Download Resume)
- **Skills section** dengan *progress bar* animasi, dikelompokkan per kategori (Frontend, Backend, Database, AI & Cloud)
- **Projects section** berupa *interactive card* dengan thumbnail, tech stack, tombol GitHub & Live Demo
- **Experience section** berupa *timeline* profesional (zig-zag di desktop, rail tunggal di mobile)
- **Testimonials section** berupa kartu kutipan interaktif
- **Contact section** dengan form tervalidasi (nama, email, pesan), *success/error state*, dan peta embedded
- **Footer** dengan copyright, link navigasi, link media sosial, dan tombol smooth scroll ke atas
- **Animated gradient background** + partikel interaktif + floating glowing blobs
- **Glassmorphism cards** dengan efek hover glow dan tilt 3D halus
- **Animated statistics** (count-up saat masuk viewport)
- **Scroll reveal** bertahap (staggered) menggunakan IntersectionObserver
- **Fully responsive**: Mobile, Tablet, Desktop + menu mobile
- **Scroll progress bar** dan active-link highlighting
- Mendukung `prefers-reduced-motion` dan fokus keyboard (aksesibilitas)

> Catatan: Form kontak sepenuhnya *client-side* (sesuai batasan proyek — tanpa backend/API). Saat submit, form memvalidasi input lalu menampilkan status sukses tanpa mengirim data ke server mana pun.

## 🗂️ Struktur Folder

```
.
├── index.html            # Markup utama + root komponen
├── readme.md
├── assets/
│   └── resume.txt        # File resume untuk tombol download
├── components/           # Komponen UI reusable (per section)
│   ├── hero.js
│   ├── about.js
│   ├── skills.js
│   ├── projects.js
│   ├── experience.js
│   ├── testimonials.js
│   └── contact.js
├── css/                  # Styling termodularisasi
│   ├── variables.css     # Design tokens (warna, spacing, font)
│   ├── base.css          # Reset + background layers
│   ├── components.css    # Komponen (navbar, button, card, dll)
│   ├── layout.css        # Layout tiap section
│   ├── animations.css    # Keyframes + scroll reveal
│   └── responsive.css    # Breakpoint mobile/tablet/desktop
├── js/
│   ├── data.js           # Sumber data tunggal (profil, skills, dll)
│   ├── effects.js        # Partikel, typewriter, reveal, counter, nav
│   └── main.js           # Entry point (mount + init)
└── pages/                # Ruang untuk halaman tambahan di masa depan
```

## 🚀 Menjalankan

Karena menggunakan ES Modules, jalankan lewat server statis lokal (bukan `file://`):

```bash
# Opsi 1 — Python
python -m http.server 5173

# Opsi 2 — Node (npx)
npx serve .

# Opsi 3 — VS Code: ekstensi "Live Server"
```

Lalu buka `http://localhost:5173`.

## ☁️ Deploy

Cukup unggah seluruh folder ke layanan hosting statis apa pun (Vercel, Netlify, GitHub Pages). Tidak ada build step yang diperlukan.

## 🎨 Kustomisasi

- **Data pribadi** → edit `js/data.js`
- **Warna & tema** → edit variabel di `css/variables.css`
- **Resume** → ganti isi `assets/resume.txt`

---

© Cucu Rusdiana, S.Kom. — Garut, Indonesia.
