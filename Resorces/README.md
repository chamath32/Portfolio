# Replaceable Portfolio Images Guide (`Resorces/` & `public/images/projects/`)

You can replace the profile photo or any of the six project cover images **without editing any React components or TypeScript files**.

## How to Replace an Image

1. Open either the root **`Resorces/`** folder or **`public/images/projects/`**.
2. Replace the target image file with your new image using the **exact same filename and `.png` extension**.
3. During `npm run dev` or `npm run build` (including the GitHub Actions deployment workflow), Vite automatically syncs updated images from `Resorces/` into `public/images/` so your new image appears automatically.
4. Commit and push the updated image file to GitHub (`git add . && git commit -m "Update project cover" && git push`) to update the live GitHub Pages deployment.

## Filename Mapping (Exact Order)

| Position | Project Title | Exact Filename |
| :--- | :--- | :--- |
| **Profile** | Hero Profile Portrait | `Chamath Weerathunga.png` |
| **Project 1** | AI-Powered Restaurant Inventory & Procurement Management System | `restaurant-inventory.png` |
| **Project 2** | AI-Based Academic Risk Prediction & Decision Support System | `academic-risk.png` |
| **Project 3** | LandSalesDZ / LandConnect | `landsales.png` |
| **Project 4** | Online Medical Store Web Application | `medical-store.png` |
| **Project 5** | AI-Based CCTV Anomaly & Human Safety Detection System | `cctv-anomaly.png` |
| **Project 6** | IoT Greenhouse Automation System | `greenhouse-iot.png` |

## Recommended Image Specifications

- **Project Cover Images:** `16:9` aspect ratio (recommended `1200 × 675 px` or `1280 × 720 px`), `.png` format, under `500 KB` for fast loading.
- **Profile Image:** Square `1:1` aspect ratio (e.g., `600 × 600 px` or higher), `.png` format.
