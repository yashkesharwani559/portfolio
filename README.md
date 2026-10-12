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
| Demo profile avatar for dark mode | `public/profile-dark.svg` |
| Demo profile avatar for light mode | `public/profile-light.svg` |
| Footer wording, columns and links | Footer component in `src/App.tsx` |
| Colors, spacing, responsive/mobile layout, hover states and theme styles | `src/styles.css` |
| System theme detection and manual theme toggle behavior | `src/App.tsx` |
| Page structure, buttons, navigation and interactions | `src/App.tsx` |
| Automatic build and deployment | `.github/workflows/deploy.yml` |

### Changing the profile image

The home section currently uses two lightweight demo SVG avatars so the image changes when the site's dark/light theme changes. To use your own picture later, replace the relevant SVG with an image you own and update the `profileImage` assignment in `src/App.tsx` to point to the desired public file. A square 1:1 image works best. If an image fails to load, the UI displays the **YK** initials fallback.

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
