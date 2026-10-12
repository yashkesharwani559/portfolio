# Yash Kesharwani — Portfolio

A responsive portfolio built with **Vite, React, TypeScript, Motion for React and Lucide**. The existing visual design uses a dark/light theme toggle, project cards, a career timeline, skills, achievements, social links, resume download and contact actions. The default theme follows the device preference until a visitor manually selects a theme.

**Live site:** https://yashkesharwani559.github.io/portfolio/  
**Repository:** https://github.com/yashkesharwani559/portfolio

## Where to update the website

Most content changes do not require editing React components.

| What you want to change | File to edit |
| --- | --- |
| Name, professional title, email, location and profile links | `src/data/portfolio.json` |
| Introduction and summary | `src/data/portfolio.json` |
| Skills and technology lists | `src/data/portfolio.json` |
| Cognizant and internship experience, dates and bullet points | `src/data/portfolio.json` |
| Project names, descriptions, categories, tech stacks and GitHub URLs | `src/data/portfolio.json` |
| Education, certifications and achievements | `src/data/portfolio.json` |
| Project statistics / highlight cards | `src/data/portfolio.json` |
| Your photo for dark mode (upload your own image) | `public/profile-dark.jpg` |
| Your photo for light mode (upload your own image) | `public/profile-light.jpg` |
| Default illustrated fallback for dark mode | `public/profile-dark.svg` |
| Default illustrated fallback for light mode | `public/profile-light.svg` |
| Footer wording, columns and links | Footer component in `src/App.tsx` |
| Colors, spacing, responsive/mobile layout, hover states and theme styles | `src/styles.css` |
| System theme detection and manual theme toggle behavior | `src/App.tsx` |
| Page structure, buttons, navigation and interactions | `src/App.tsx` |
| Automatic build and deployment | `.github/workflows/deploy.yml` |

### Add your own picture to the home / hero section

The hero image supports your own photo in each theme, and it falls back to the included illustrated avatar if a photo file is missing.

1. In the repository, open the `public/` folder.
2. Upload a square photo named **`profile-dark.jpg`** for dark mode.
3. Upload a photo named **`profile-light.jpg`** for light mode. You can use the same photo twice if you prefer.
4. Keep the filenames exactly as shown, commit the files, and wait for GitHub Actions to deploy.

The website automatically selects the matching JPG when the visitor changes theme. Use a clear head-and-shoulders image cropped square (around 500 × 500 px or larger). If a JPG is missing or fails to load, the site uses `public/profile-dark.svg` or `public/profile-light.svg`; if that placeholder also fails, it displays the **YK** initials. You do not need to change the React code just to replace your photo.

### Updating your downloadable resume

The repository contains `public/Yash_Kesharwani_Resume.pdf`. Replace it with your new PDF using the same filename and commit the change. The deployment workflow copies it to the stable public download path, `Yash-Kesharwani-Resume.pdf`, so the site's Resume buttons do not need to change.

If you rename the source PDF, also update the copy step in `.github/workflows/deploy.yml`.

## Local development

Use Node.js 22 or a compatible current Node.js version.

```bash
npm install
npm run dev
```

Create and inspect a production build locally:

```bash
npm run build
npm run preview
```

## Publishing changes

The live site is published with **GitHub Pages**. The workflow in `.github/workflows/deploy.yml` runs when commits are pushed to `main`; it installs dependencies, prepares the resume file, builds the Vite app and deploys the `dist` directory.

1. Edit the relevant files in GitHub, or clone the repository and edit them locally.
2. Commit and push to `main`.
3. Open the repository's **Actions** tab if you want to watch the build.
4. After the workflow succeeds, refresh the live website. Cached browser content may take a little time to update.

The Vite base path is configured for this repository as `/portfolio/`.

## Can the hosting stay free?

GitHub Pages is currently offered at no additional charge for public repositories on GitHub Free, and it is suitable for this static personal portfolio. There is no paid server or database in this project. **No hosting provider can promise that a service will remain free forever**: future plans, terms, quotas or policies may change. To keep using the current free setup, keep the repository public, keep Pages configured to use GitHub Actions, and stay within GitHub's applicable usage policies and limits.

## Roll back a change

Every update is recorded in Git history. The safest rollback is to **revert the specific commit**, which creates a new commit that undoes that change without deleting history:

1. Open the repository's **Commits** page.
2. Open the commit you want to undo and choose **Revert** if GitHub offers that action; alternatively use Git locally.
3. Push the revert commit to `main`. GitHub Actions will deploy the reverted version automatically.

From a local clone, the usual command is:

```bash
git revert <commit-sha>
git push origin main
```

Use the exact commit SHA you want to undo. Avoid force-pushing or resetting the public `main` branch for a normal rollback.

## Useful links

- [Live portfolio](https://yashkesharwani559.github.io/portfolio/)
- [Repository](https://github.com/yashkesharwani559/portfolio)
- [GitHub Actions](https://github.com/yashkesharwani559/portfolio/actions)
- [GitHub Pages settings](https://github.com/yashkesharwani559/portfolio/settings/pages)
- [GitHub Pages documentation](https://docs.github.com/pages)
