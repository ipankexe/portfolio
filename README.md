# Muhammad Irfan Setiawan — Personal Portfolio & Engineering Showcase 🚀

[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

> **Live Portfolio:** [https://ipankexe.github.io/portfolio](https://github.com/ipankexe/portfolio) (or custom deployment domain)  
> **Contact:** [irfaanmuh27@gmail.com](mailto:irfaanmuh27@gmail.com) • [WhatsApp (+62 857-9947-9834)](https://wa.me/6285799479834) • [LinkedIn](https://linkedin.com/in/irfanswettiawan) • [GitHub](https://github.com/ipankexe)

---

## 🌟 Overview

A state-of-the-art developer portfolio built for **Muhammad Irfan Setiawan, S.Kom** (Informatics Engineering graduate from Universitas Dian Nuswantoro / UDINUS). Designed with **UI/UX Pro Max** principles, this portfolio highlights full-stack software engineering competencies, municipal government system deliverables, and interactive data science & machine learning foundations.

---

## ✨ Key Features

- **🌐 Bilingual Support (Indonesian 🇮🇩 & English 🇬🇧):**
  - Seamless instant language toggle with animated pill indicator.
  - Persistent preference in `localStorage` synced with `<html lang="...">`.
  - Comprehensive translations covering all sections, modals, and spotlight commands.
- **⚡ Spotlight Command Menu (`Ctrl+K` / `⌘K`):**
  - macOS/Raycast-style fast launcher for navigation, copying contacts, downloading CV, and switching themes/languages.
- **💻 Interactive Terminal Simulator (`irfan-os`):**
  - Built-in developer CLI supporting commands like `help`, `projects`, `stack`, `education`, `contact`, and `clear`.
- **🧪 Data & Machine Learning Studio:**
  - Interactive 4-step Data Preprocessing pipeline visualizer.
  - Real-time Confusion Matrix & Classification Metrics simulator (Accuracy, Precision, Recall, F1-Score).
- **📂 Detailed Project Case Studies:**
  - Modular modals and dedicated route pages (`/project/:slug`) detailing Problem Statements, Legacy Workflows, System Architecture, Waterfall Methodology, and Black-box Testing.
- **📄 ATS-Compliant Interactive Resume (CV):**
  - Clean recruiter-friendly CV view with quick summary copying and direct PDF download.
- **🎨 Glassmorphic Dark & Light Theme:**
  - Tailwind CSS v4 design tokens, smooth spring animations with Framer Motion, and mobile drawer responsiveness.

---

## 🛠️ Tech Stack

- **Frontend Core:** React 19, React Router v7, Vite 8
- **Styling & Design System:** Tailwind CSS v4, Vanilla CSS Custom Variables, Modern Glassmorphism
- **Animations & Icons:** Framer Motion, Lucide React
- **Document Utilities:** PDF-Lib
- **Code Quality:** Oxlint

---

## 🚀 Getting Started

### Prerequisites

Make sure you have Node.js (v18 or higher) and npm installed:

```bash
node -v
npm -v
```

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ipankexe/portfolio.git
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start local development server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

4. **Build for production:**
   ```bash
   npm run build
   ```
   The production-ready bundle will be created in the `dist/` directory.

---

## 📁 Project Structure

```text
portfolio/
├── public/                 # Static assets, CV documents & icons
├── src/
│   ├── components/
│   │   ├── layout/         # Navbar, Footer, Mobile Drawer, ScrollProgress
│   │   ├── projects/       # ProjectCard, ProjectModal
│   │   ├── sections/       # Hero, About, Skills, DataMachineLearning, Projects,
│   │   │                   # Experience, Education, Certifications, Resume, Contact
│   │   ├── skills/         # SkillCard, Tech Pills
│   │   └── ui/             # LanguageToggle, ThemeToggle, CommandMenu, Button, Modal
│   ├── context/            # LanguageContext (ID & EN dictionaries, state, hooks)
│   ├── data/               # Personal info, project case studies, certifications, resume
│   ├── pages/              # Home, ProjectDetails
│   ├── App.jsx             # Main router & provider setup
│   ├── main.jsx            # Entry point
│   └── index.css           # Global tokens & Tailwind styles
├── index.html              # HTML shell & SEO meta tags
├── package.json            # Project manifest & scripts
└── vite.config.js          # Vite bundler configuration
```

---

## 📬 Connect & Collaborate

- **Email:** [irfaanmuh27@gmail.com](mailto:irfaanmuh27@gmail.com)
- **WhatsApp:** [+62 857-9947-9834](https://wa.me/6285799479834)
- **LinkedIn:** [linkedin.com/in/irfanswettiawan](https://linkedin.com/in/irfanswettiawan)
- **GitHub:** [github.com/ipankexe](https://github.com/ipankexe)
- **Instagram:** [@irfaanstwn](https://instagram.com/irfaanstwn)

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
