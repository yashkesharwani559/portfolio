# Yash Kesharwani - Developer Portfolio

A responsive, recruiter-focused personal portfolio built with **Vite, React, TypeScript, Motion for React and Lucide**. It includes dark/light themes, filtered project cards, work history, skills, education, achievements, contact links and a resume download.

## Development

Requires Node.js 22 or compatible with Vite 8.

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Update content in GitHub

- Edit `src/data/portfolio.json` to update the introduction, profile URLs, skill lists, experience, projects, education and achievements.
- The workflow uses `public/Yash-Kesharwani-Resume.pdf` if you commit an official PDF there. If it is absent, it generates a downloadable resume from `scripts/generate_resume.py`. Update that script when resume details change.
- Commit changes to `main`; GitHub Actions builds the Vite app and publishes it to GitHub Pages.

The fallback PDF is recreated from the resume details supplied for this portfolio. To use the exact official PDF, upload it to `public/Yash-Kesharwani-Resume.pdf` and commit it; the deployment workflow will prefer that file automatically.

## GitHub Pages

Repository Pages source was set to **GitHub Actions**. The workflow is defined in `.github/workflows/deploy.yml`. It installs dependencies, generates the downloadable resume, builds the Vite app, and deploys the `dist` folder.

Expected site URL: **https://yashkesharwani559.github.io/portfolio/**

The Vite base path is `/portfolio/`, matching the project repository. No paid hosting, database, or private API key is required.

If the first deployment asks for a Pages configuration, open **Repository Settings → Pages** and set **Build and deployment → Source** to **GitHub Actions**.

## Contact behavior

- The email button uses `mailto:`, so it opens the visitor's configured mail app.
- The email-copy action uses the clipboard when permitted and falls back to opening an email.
- LinkedIn messaging opens a LinkedIn compose URL. LinkedIn may require sign-in and the compose shortcut may be limited by LinkedIn's own account rules.
- All social profiles and project repository links open in a new tab.
