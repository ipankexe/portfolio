# Personal Portfolio Website — Muhammad Irfan Setiawan, S.Kom

![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-8.3-646CFF?logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v4-06B6D4?logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-14.1-EA4C89?logo=framer&logoColor=white)
![Vitest](https://img.shields.io/badge/Tests-13%20Passed-22c55e?logo=vitest&logoColor=white)
![Oxlint](https://img.shields.io/badge/Linter-0%20Errors-10b981)
![Bilingual](https://img.shields.io/badge/Language-ID%20%7C%20EN-blue)

A modern, high-performance, and fully responsive personal portfolio website built for **Muhammad Irfan Setiawan, S.Kom** — an Informatics Engineering graduate from Universitas Dian Nuswantoro (UDINUS, IPK 3.22/4.00) focusing on Web Development, Backend Systems, and Database Management, with active explorations in Python, Data Analytics, and Machine Learning.

---

## 🌟 Key Highlights & Philosophy

- **100% Authentic & Grounded Data:** Strictly built upon verified materials (Official CV PDF and active GitHub repository `@ipankexe`). Zero fabricated metrics, fake user counts, or inflated titles.
- **Dual-Track Experience Presentation:** Separates technical engineering (Fullstack Capstone POS with pessimistic locking `lockForUpdate`, Diskominfo Kota Semarang Web Damkar internship) and high-impact operational leadership (Dikala Kopi Group) with a dedicated **Transferable Soft Skills** analysis.
- **Deep-Dive Case Study Architecture:** Detailed 13-point technical case studies with problem statements, architectural decisions, challenges, solutions, and code highlights accessible via interactive modals and dedicated permalinks (`/projects/:slug`).
- **Interactive WhatsApp Message Composer:** Live message generator with pre-filled professional inquiries directly launching to WhatsApp (`+62 857 9947 9834`).
- **One-Click Email Copy with Celebration Confetti:** Instant clipboard action with feedback alert and lightweight canvas confetti celebration.
- **Bilingual Internationalization (i18n):** Native support for Indonesian (Default) and English with zero hydration flicker, reactive translation hook `useLanguage()`, and 100% synchronized dictionary keys.
- **Fluid Dark / Light Mode:** Class-based theme system synced to `localStorage`, with an inline anti-FOUC (Flash of Unstyled Content) script in `index.html`.
- **Live GitHub Integration:** Dynamic repository cards fetched from the GitHub REST API (`https://api.github.com/users/ipankexe/repos`) with 30-minute client caching (`sessionStorage`) and reliable static fallbacks.
- **Production Asset Integration:** Authentic downloadable CV PDF (`/Muhammad-Irfan-Setiawan-CV.pdf`), high-resolution portrait (`/irfan-hero.jpg`), custom monogram SVG favicon (`/favicon.svg`), and crawler-ready `robots.txt` and `sitemap.xml`.

---

## 🛠️ Tech Stack & Tooling

| Domain | Technology / Library | Purpose |
| :--- | :--- | :--- |
| **Framework** | [React 19](https://react.dev/) | Core UI rendering with React Server/Client compatibility |
| **Build Tool** | [Vite 8](https://vite.dev/) | Ultra-fast HMR and optimized production bundling with Rolldown |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) | Modern utility-first styling with `@tailwindcss/vite` |
| **Animations** | [Framer Motion 14](https://www.framer.com/motion/) | Smooth layout transitions, bento entrance animations, and modals |
| **Routing** | [React Router DOM v7](https://reactrouter.com/) | Client-side routing (`/`, `/projects`, `/projects/:slug`, `*`) |
| **Icons** | [Lucide React](https://lucide.dev/) + Custom SVG | Scalable UI icons & pristine brand vectors (GitHub, LinkedIn, IG, WA) |
| **Celebrations** | [Canvas Confetti](https://github.com/catdad/canvas-confetti) | Micro-interactions upon email copy and contact engagements |
| **Testing** | [Vitest 5](https://vitest.dev/) | Lightning-fast test runner for data integrity and translations |
| **Linting** | [Oxlint](https://oxc.rs/) | Rust-based linter executing 104 rules in under 50ms |

---

## 📁 Project Architecture

```
portofolio/
├── public/
│   ├── Muhammad-Irfan-Setiawan-CV.pdf   # Authentic PDF CV for direct download
│   ├── irfan-hero.jpg                   # High-res editorial photo
│   ├── favicon.svg                      # Custom "IS" monogram vector
│   ├── robots.txt                       # SEO crawler configuration
│   ├── sitemap.xml                      # XML sitemap for search indexing
│   └── _redirects                       # SPA routing fallback for Netlify
├── src/
│   ├── __tests__/                       # Vitest automated test suite
│   │   ├── experienceData.test.js       # Experience & soft skill verification
│   │   ├── projectsData.test.js         # Project schema & slug validation
│   │   └── translations.test.js         # ID & EN key parity check
│   ├── components/
│   │   ├── layout/                      # Navbar, Footer, ScrollToTop
│   │   ├── sections/                    # Page sections (Hero, About, Projects, etc.)
│   │   └── ui/                          # Button, Modal, Card, ThemeToggle, BrandIcons
│   ├── context/                         # ThemeContext & LanguageContext
│   ├── data/                            # Verified factual project & experience data
│   │   ├── translations/                # ID and EN translation dictionaries
│   │   ├── experience.js                # Career history & transferable skills
│   │   ├── projects.js                  # 6 verified project case studies
│   │   └── skills.js                    # Technical & soft skills matrix
│   ├── hooks/                           # useTheme, useLanguage, useGitHubRepos
│   ├── layouts/                         # MainLayout wrapper
│   ├── pages/                           # Home, Projects archive, ProjectDetail, NotFound
│   ├── services/                        # githubService.js (API client + cache)
│   ├── App.jsx                          # Router configuration
│   ├── index.css                        # Tailwind v4 directives & theme tokens
│   └── main.jsx                         # Application entrypoint
├── index.html                           # SEO meta tags, OpenGraph, anti-FOUC script
├── package.json                         # Scripts & dependencies
├── vercel.json                          # SPA routing rewrites for Vercel
└── vite.config.js                       # Vite 8 config with manual chunk splitting
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed:
- Node.js `v18.x`, `v20.x`, or `v22+` (v24.x tested and supported)
- npm `v9+` or `v10+`

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ipankexe/portofolio.git
   cd portofolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start local development server:**
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:5173`.

---

## 🧪 Testing & Quality Assurance

This project includes automated unit test suites and linting to guarantee zero regressions:

```bash
# Run Vitest unit tests (data integrity, translation parity, schema checks)
npm test

# Run Rust-based Oxlint linter
npm run lint

# Build production bundle and check asset sizes
npm run build

# Preview production build locally
npm run preview
```

### Current Quality Metrics:
- **Unit Tests:** 13/13 passed (100% pass rate in <600ms)
- **Oxlint:** 0 errors, 0 warnings across 45 files
- **Vite Build:** Clean production bundle with code splitting (`vendor-react`, `vendor-motion`, and app chunks)

---

## 📝 Customization & Maintenance

### 1. Adding or Updating Projects
Open [`src/data/projects.js`](file:///d:/ipn/project/portofolio/src/data/projects.js). Each project has a structured schema:
- `id`, `slug`, `title`, `category`, `featured`, `year`, `role`, `status`
- `summary`: Short punchy description in Indonesian and English
- `tags`: Array of technology labels
- `metrics`: Realistic, grounded outcomes
- `caseStudy`: Detailed breakdown with `problemStatement`, `architecture`, `challenges`, `solution`, and `codeHighlight`
- `githubUrl` and `demoUrl` (only specify `demoUrl` if an active live deployment exists)

### 2. Updating Work Experience & Soft Skills
Open [`src/data/experience.js`](file:///d:/ipn/project/portofolio/src/data/experience.js) to edit engineering roles (Capstone POS, Diskominfo Semarang) or transferable soft skills (Dikala Kopi Group leadership, customer dispute resolution, speed under pressure).

### 3. Updating Translations
Translations are stored in:
- Indonesian: [`src/data/translations/id.js`](file:///d:/ipn/project/portofolio/src/data/translations/id.js)
- English: [`src/data/translations/en.js`](file:///d:/ipn/project/portofolio/src/data/translations/en.js)

Keep both files synchronized. Running `npm test` will automatically assert that all keys in `id.js` are present in `en.js`.

### 4. Replacing the CV Document
Place your updated CV PDF into [`public/Muhammad-Irfan-Setiawan-CV.pdf`](file:///d:/ipn/project/portofolio/public/Muhammad-Irfan-Setiawan-CV.pdf). The download buttons across the Navbar, Hero, and Contact sections automatically reference this static path.

### 5. Updating the Profile Image
Replace [`public/irfan-hero.jpg`](file:///d:/ipn/project/portofolio/public/irfan-hero.jpg) with any high-resolution portrait photograph.

---

## 🌐 Deployment Guide

### Deploying to Vercel (Recommended)
This repository includes a [`vercel.json`](file:///d:/ipn/project/portofolio/vercel.json) file configured for client-side Single Page Application (SPA) routing:
1. Push your repository to GitHub (`github.com/ipankexe/portofolio`).
2. Go to [Vercel](https://vercel.com/) and click **Add New Project**.
3. Import your GitHub repository.
4. Framework preset: **Vite** (Build command: `npm run build`, Output directory: `dist`).
5. Click **Deploy**.

### Deploying to Netlify
This repository includes a [`public/_redirects`](file:///d:/ipn/project/portofolio/public/_redirects) file containing:
```
/*    /index.html   200
```
1. Drag and drop the `dist` folder into [Netlify Drop](https://app.netlify.com/drop), or link your GitHub repository.
2. Build command: `npm run build`, Publish directory: `dist`.

---

## 📬 Contact & Official Links

- **Full Name:** Muhammad Irfan Setiawan, S.Kom
- **Location:** Semarang, Central Java, Indonesia
- **GitHub:** [@ipankexe](https://github.com/ipankexe)
- **LinkedIn:** [linkedin.com/in/irfanswettiawan](https://www.linkedin.com/in/irfanswettiawan)
- **WhatsApp:** [+62 857 9947 9834](https://wa.me/6285799479834)
- **Instagram:** [@irfaanstwn](https://instagram.com/irfaanstwn)

---

## 📄 License
This project is open-source and licensed under the [MIT License](LICENSE).
Feel free to use it as inspiration for your own portfolio!
