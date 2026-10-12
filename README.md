# Yash Kesharwani — Portfolio

Responsive portfolio built with Vite, React, TypeScript, Motion for React and Lucide.

## Local development

```bash
npm install
npm run dev
```

## Update your content

- Edit `src/data/portfolio.json` for profile links, introduction, skills, experience, projects, education and achievements.
- Replace `public/Yash-Kesharwani-Resume.pdf` to update the downloadable resume.
- Commit to `main`; GitHub Actions builds and deploys the site.

## GitHub Pages deployment

The workflow in `.github/workflows/deploy.yml` builds the project and deploys the `dist` directory to GitHub Pages. The Vite base path is `/portfolio/`; after deployment, the site URL is `https://yashkesharwani559.github.io/portfolio/`.

In repository **Settings → Pages**, choose **GitHub Actions** as the build and deployment source.

## Contact behavior

The email actions use `mailto:`. LinkedIn messaging opens a LinkedIn compose URL and may require sign-in or may be restricted by LinkedIn. No private API keys are required for this static portfolio.
