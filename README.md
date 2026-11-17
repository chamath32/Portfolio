# Chamath Weerathunga — Personal Portfolio

A responsive personal portfolio website for **Chamath Weerathunga** (*AI Undergraduate | Machine Learning & Full-Stack Development*), built with **React**, **TypeScript**, and **Vite**.

- **Repository:** [https://github.com/chamath32/Portfolio](https://github.com/chamath32/Portfolio)
- **Live Site (GitHub Pages):** [https://chamath32.github.io/Portfolio/](https://chamath32.github.io/Portfolio/)
- **GitHub Profile:** [https://github.com/chamath32](https://github.com/chamath32)
- **LinkedIn:** [https://www.linkedin.com/in/chamath-weerathunga](https://www.linkedin.com/in/chamath-weerathunga)

---

## 1. Local Setup & Commands

### Install Dependencies

```bash
npm install
```

### Run Locally (Development Server)

```bash
npm run dev
```

Opens the local Vite development server (typically at `http://localhost:5173`).

### Build for Production

```bash
npm run build
```

Type-checks the project with TypeScript, syncs images from `Resorces/` into `public/images/`, and outputs optimized production assets into `dist/`.

### Preview Production Build Locally

```bash
npm run preview
```

---

## 2. How to Replace Project Images & Profile Photo

You can replace any project cover image or the profile portrait **without modifying any React components or TypeScript files**.

All replaceable source images are stored in **`Resorces/`** (and mirrored in **`public/images/projects/`** and **`public/images/profile/`**):

| Asset / Project | Exact Filename |
| :--- | :--- |
| **Hero Profile Photo** | `Chamath Weerathunga.png` |
| **1. AI-Powered Restaurant Inventory & Procurement Management System** | `restaurant-inventory.png` |
| **2. AI-Based Academic Risk Prediction & Decision Support System** | `academic-risk.png` |
| **3. LandSalesDZ / LandConnect** | `landsales.png` |
| **4. Online Medical Store Web Application** | `medical-store.png` |
| **5. AI-Based CCTV Anomaly & Human Safety Detection System** | `cctv-anomaly.png` |
| **6. IoT Greenhouse Automation System** | `greenhouse-iot.png` |

### Steps to Replace an Image:

1. Open the **`Resorces/`** folder (or **`public/images/projects/`**).
2. Replace the image file with your new image using the **exact same filename and `.png` extension** (recommended `1200 × 675 px`, `16:9` aspect ratio).
3. Run `npm run dev` or `npm run build` locally to preview, or commit and push the replaced image file to GitHub:
   ```bash
   git add Resorces/ public/images/
   git commit -m "Update project cover image"
   git push
   ```
4. During both local development and GitHub Actions deployment, Vite automatically syncs updated images from `Resorces/` into `public/images/`.

---

## 3. How to Update Portfolio Content

All portfolio content is cleanly separated from presentation components:

- **Personal Branding, Hero, About & Social Links:** `src/config/site.ts`
  - To add an email link later, set `email: 'your-email@example.com'` in `src/config/site.ts`.
  - To enable a CV download button later, place your PDF in `public/` and set `cvUrl: '/Your_CV.pdf'` in `src/config/site.ts`.
- **Selected Projects:** `src/data/projects.ts`
- **Expertise & Skills:** `src/data/skills.ts`
- **Experience, Activities & Education:** `src/data/experience.ts`
- **Theme & Palette Variables:** `src/styles/index.css`

---

## 4. GitHub Pages Deployment

Deployment is automated via **GitHub Actions** (`.github/workflows/deploy.yml`):

1. Vite is configured with `base: '/Portfolio/'` for production builds matching `https://github.com/chamath32/Portfolio.git`.
2. Every push to the `main` branch automatically installs dependencies, builds the production bundle into `dist/`, and deploys it to GitHub Pages.
3. **One-Time GitHub Repository Settings Check:**
   - In your GitHub repository (`chamath32/Portfolio`), go to **Settings → Pages**.
   - Under **Build and deployment → Source**, select **GitHub Actions**.
