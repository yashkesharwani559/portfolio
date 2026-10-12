# Yash Kesharwani — Portfolio

Responsive personal portfolio built with **Vite, React, TypeScript, Motion for React and Lucide**, deployed to GitHub Pages.

- **Live website:** https://yashkesharwani559.github.io/portfolio/
- **GitHub repository:** https://github.com/yashkesharwani559/portfolio
- **Deployment history:** https://github.com/yashkesharwani559/portfolio/actions

The existing design includes dark/light mode, theme-aware hero images, project cards, experience timeline, skills, achievements, resume download, social links, contact actions, responsive layouts and hover effects. The first visit follows the device's system theme; when a visitor manually selects light or dark, that choice is remembered in that browser.

---

## Quick guide: which file should I edit?

For normal portfolio updates, **start with `src/data/portfolio.json`**. You usually do not need to modify React or CSS.

| I want to update… | Exact location |
| --- | --- |
| Name, professional title, location, email or phone | `src/data/portfolio.json` → `name`, `title`, `location`, `email`, `phone` |
| LinkedIn, GitHub or LeetCode links | `src/data/portfolio.json` → `links` |
| Home/about introduction | `src/data/portfolio.json` → `intro` |
| Existing skills or add a skill | `src/data/portfolio.json` → `skills` |
| Add a new skills group/category | `src/data/portfolio.json` → add a property inside `skills` |
| Update a job title, company, dates or responsibilities | `src/data/portfolio.json` → an entry in `experience` |
| Add a new job or internship | `src/data/portfolio.json` → add an object to `experience` |
| Update a project or its GitHub URL | `src/data/portfolio.json` → an entry in `projects` |
| Add a new project card | `src/data/portfolio.json` → add an object to `projects` |
| Education details | `src/data/portfolio.json` → `education` |
| Certifications, GATE, LeetCode or other accomplishments | `src/data/portfolio.json` → `achievements` |
| Top highlight/stat cards | `src/data/portfolio.json` → `stats` |
| Your hero photo for dark/light mode | Add `public/profile-dark.jpg` and `public/profile-light.jpg` |
| Fallback hero illustrations | `public/profile-dark.svg` and `public/profile-light.svg` |
| Downloadable resume PDF | `public/Yash_Kesharwani_Resume.pdf` |
| Footer layout, wording or link structure | `src/App.tsx` → footer markup |
| Colors, hover effects, spacing, fonts and mobile layout | `src/styles.css` |
| Page structure, theme behavior and interactions | `src/App.tsx` |
| Build/deployment automation | `.github/workflows/deploy.yml` |

## Editing directly on GitHub

1. Open the [repository](https://github.com/yashkesharwani559/portfolio).
2. Open the file shown in the table above. For profile data, open [`src/data/portfolio.json`](https://github.com/yashkesharwani559/portfolio/blob/main/src/data/portfolio.json).
3. Click the pencil icon to edit the file.
4. Make the change, then use **Commit changes** and commit to `main`.
5. Open [GitHub Actions](https://github.com/yashkesharwani559/portfolio/actions) to check the automatic deployment.
6. Once the workflow succeeds, refresh the live website. If you still see the old version, hard-refresh the browser (`Ctrl + F5` on Windows).

### Important JSON rules

`portfolio.json` is JSON, so please follow these rules:

- Keep keys and text inside **double quotes**.
- Put a comma between properties and between objects in an array.
- Do not add a comma after the final property or final array item.
- Keep the outer braces `{}` and square brackets `[]) balanced.
- Do not add comments inside the JSON file.
- Preserve the existing key names unless you also update the React code that reads them.

A missing comma or an extra comma can stop the site from building.

---

## 1. Update personal details and links

**File:** `src/data/portfolio.json`

Near the top, update these properties:

```json
{
  "name": "Yash Kesharwani",
  "title": "Software Engineer I",
  "location": "Pune, India",
  "email": "yashkesharwani559@gmail.com",
  "phone": "+91-7489967083"
}
```

This is an example of the fields to edit—not a replacement for the entire file. Change only the values, and keep the other properties in place.

Profile links are held under `links`:

```json
"links": {
  "linkedin": "https://www.linkedin.com/in/your-profile/",
  "linkedinMessage": "YOUR_LINKEDIN_MESSAGE_URL",
  "github": "https://github.com/your-username",
  "leetcode": "https://leetcode.com/u/your-username/",
  "email": "mailto:you@example.com"
}
```

Use your actual URLs. The `email` value should begin with `mailto:`. The LinkedIn message link may depend on LinkedIn sign-in and its messaging restrictions.

## 2. Update the introduction

**File:** `src/data/portfolio.json` → `intro`

Replace the text inside the quotes with a short, accurate introduction. Two or three concise sentences usually work well. Mention the areas you actually work in and the kinds of problems you enjoy solving.

The file also contains a `summary` property for a compact professional summary; if you want it displayed in a new section, that would require a small change in `src/App.tsx`.

## 3. Add, remove or change skills

**File:** `src/data/portfolio.json` → `skills`

Skills are grouped into categories such as Languages, Backend & frontend, Data & messaging, Cloud & DevOps, and Engineering.

### Add one skill to an existing category

For example, to add **GitHub Actions** to Cloud & DevOps, change this:

```json
"Cloud & DevOps": ["AWS", "Azure", "Docker", "Kubernetes", "Terraform", "Ansible", "Jenkins", "CI/CD"]
```

to this:

```json
"Cloud & DevOps": ["AWS", "Azure", "Docker", "Kubernetes", "Terraform", "Ansible", "Jenkins", "CI/CD", "GitHub Actions"]
```

You can add, rename or remove items in the list. Keep every skill in double quotes and separate the items with commas.

### Add a completely new skills category

Add another key inside the existing `skills` object, for example:

```json
"Testing": ["JUnit", "Mockito", "Postman"]
```

Place a comma after the previous category before adding the new one. The skills section generates its groups from this data, so a new category can appear without adding a new React component.

Only list skills that you are comfortable discussing in an interview. You can distinguish hands-on work from training exposure in the wording of your experience bullets.

## 4. Update existing work experience

**File:** `src/data/portfolio.json` → `experience`

Each experience entry has these fields:

- `company`: employer name.
- `role`: your role/title to display.
- `period`: date range as text, for example `"Jul 2025 — Present"`.
- `location`: location to display.
- `points`: an array of responsibility or impact bullets.

To update your current Cognizant role, find the object whose `company` is `"Cognizant"`, then edit the `role`, `period`, `location` or `points` values. Do not create a second Cognizant entry just to change a responsibility.

Example of the `points` format:

```json
"points": [
  "Automated repeatable Linux server patching using Azure DevOps pipelines.",
  "Used Ansible and Terraform files for configuration and infrastructure tasks.",
  "Worked with teams to troubleshoot issues and improve deployment reliability."
]
```

Keep statements truthful and specific. If a result can be measured, add the metric only when you can support it.

## 5. Add a new job or internship

**File:** `src/data/portfolio.json` → `experience`

The `experience` property is an array. Add a comma after the existing last experience object, then add another object using this template:

```json
{
  "company": "Company Name",
  "role": "Your Role",
  "period": "Month YYYY — Month YYYY",
  "location": "City, Country",
  "points": [
    "Describe a responsibility or contribution.",
    "Describe the tools you used and what you delivered.",
    "Add an outcome only when it is accurate."
  ]
}
```

Keep the new object inside the existing `experience` square brackets. Put the latest experience first so the timeline reads in reverse chronological order. Check commas between experience objects.

## 6. Update an existing project

**File:** `src/data/portfolio.json` → `projects`

Each project has the following fields:

| Field | What it controls |
| --- | --- |
| `name` | Project heading |
| `subtitle` | Short project type/one-line description |
| `description` | Project summary |
| `stack` | Technology tags displayed on the card |
| `category` | Filter category |
| `repository` | GitHub repository URL opened by the project link |
| `accent` | Project card accent colour |
| `symbol` | Short text/initials displayed in the project artwork |

To update a project, find its current `name` and edit that object. Update its `repository` when the project repository changes.

The existing supported accent values are `"green"`, `"violet"`, `"blue"` and `"orange"`. Use one of these unless you also add a matching CSS class in `src/styles.css`.

## 7. Add a new project

**File:** `src/data/portfolio.json` → `projects`

Add a comma after the existing last project, then add a project object like this:

```json
{
  "name": "Project Name",
  "subtitle": "Short description",
  "description": "What the project does, what you built, and the main technical decisions.",
  "stack": ["Java", "Spring Boot", "MySQL"],
  "category": "Backend",
  "repository": "https://github.com/your-username/project-repo",
  "accent": "blue",
  "symbol": "PJ"
}
```

Replace every example with your actual project information. Keep `stack` as an array of strings and use a short `symbol` such as `"API"`, `"JS"` or `"PJ"`. The project filter categories are created from the `category` values, so you can introduce a new category simply by using it consistently.

If you add a new project, verify that its repository is public or otherwise accessible to the audience you intend.

## 8. Update education

**File:** `src/data/portfolio.json` → `education`

Each education entry uses:

```json
{
  "institution": "College or School Name",
  "degree": "Degree or qualification",
  "period": "Start — End",
  "result": "CGPA, percentage or other result"
}
```

Edit the existing entry to correct a value. Add another object inside the `education` array if you want to list another qualification.

## 9. Update achievements and certifications

**File:** `src/data/portfolio.json` → `achievements`

Each item uses a title and detail:

```json
{
  "title": "Certification or Achievement",
  "detail": "Issuer, score, year or concise explanation"
}
```

Edit an existing item to update it. Add a comma and a new object to add another. Avoid including certification claims until you have actually earned them.

## 10. Update the top highlight cards

**File:** `src/data/portfolio.json` → `stats`

Each highlight contains `value` and `label`:

```json
{
  "value": "700+",
  "label": "LeetCode problems solved"
}
```

Update the value as your number changes. You can edit a label to describe another true milestone. Keep the values concise so the highlight cards remain readable on mobile.

## 11. Add your own hero/profile photo

**Folder:** `public/`

- Dark-theme photo: `public/profile-dark.jpg`
- Light-theme photo: `public/profile-light.jpg`
- Dark-theme illustrated fallback: `public/profile-dark.svg`
- Light-theme illustrated fallback: `public/profile-light.svg`

Upload a square head-and-shoulders picture, ideally around 500 × 500 pixels or larger, using the exact JPG filenames. You can use the same picture for both themes. Commit the new photos; the hero will use the matching file automatically. If a JPG is missing, the illustrated SVG is shown instead, then the **YK** initials if the fallback also cannot load.

If you want to replace the illustrated fallback itself, edit the relevant SVG in the `public/` folder.

## 12. Update the downloadable resume

**File:** `public/Yash_Kesharwani_Resume.pdf`

Upload your new PDF with this exact filename, replacing the old file, and commit it. The workflow copies it to the stable download name used by the website, so the resume buttons keep working.

If you rename the PDF, update the copy step in `.github/workflows/deploy.yml` as well. Avoid storing confidential or private information in a public resume because the PDF is downloadable by anyone who can access the site.

## 13. Change the design or behavior

Only edit these files when you want to change the way the website looks or works:

- **`src/styles.css`** — theme colors, background, text contrast, hover effects, transitions, spacing, responsive/mobile layout and card styling.
- **`src/App.tsx`** — page structure and visible sections, navigation, footer layout, buttons, image/theme logic and interactions.
- **`index.html`** — browser page title, description and social-share metadata.
- **`vite.config.ts`** — Vite configuration and the GitHub Pages base path.
- **`.github/workflows/deploy.yml`** — automated build and publish steps.

The site follows the visitor's system light/dark preference by default. Once the visitor manually chooses a theme, that browser remembers the choice.

### Keep the website design unchanged while updating content

For routine updates—new skill, new job bullet, new project, changed link, education, achievement, photo or resume—edit only the data or asset paths described above. You should not need to edit `src/App.tsx` or `src/styles.css`.

## 14. Preview locally (optional)

Install Node.js 22 or a compatible current version. Then run:

```bash
npm install
npm run dev
```

To verify a production build before publishing:

```bash
npm run build
npm run preview
```

## 15. Publish changes

The portfolio is deployed with **GitHub Pages** using GitHub Actions.

1. Commit changes to `main`.
2. Open the [Actions page](https://github.com/yashkesharwani559/portfolio/actions).
3. Confirm the **Build and deploy portfolio** workflow succeeds.
4. Visit the [live site](https://yashkesharwani559.github.io/portfolio/). If your browser shows cached content, hard-refresh it.

Repository setting: **Settings → Pages → Build and deployment → Source: GitHub Actions**. The Vite base path is `/portfolio/`; keep it consistent unless you change the hosting URL.

## 16. Can the hosting stay free?

GitHub Pages is currently available at no additional charge for public repositories on GitHub Free and suits this static portfolio. There is no paid server or database in this project. **No provider can guarantee that a service will be free forever**—plans, terms, limits or policies may change. To continue with the current free setup, keep the repository public, keep Pages set to GitHub Actions and stay within GitHub's applicable terms and usage limits.

## 17. Undo / roll back a change

Every commit is recorded in the repository history. To undo a change safely, **revert its commit** rather than deleting Git history.

1. Open the [commit history](https://github.com/yashkesharwani559/portfolio/commits/main).
2. Open the commit that introduced the unwanted change and select **Revert** if the option is available.
3. Commit and push the revert. GitHub Actions will publish the reverted version.

From a local clone, use:

```bash
git revert <commit-sha>
git push origin main
```

Replace `<commit-sha>` with the actual commit hash. If you are reverting more than one related commit, revert newest first. Avoid force-pushing or resetting `main` for a normal rollback.

---

## Useful links

- [Live portfolio](https://yashkesharwani559.github.io/portfolio/)
- [Edit portfolio data](https://github.com/yashkesharwani559/portfolio/blob/main/src/data/portfolio.json)
- [Browse public assets](https://github.com/yashkesharwani559/portfolio/tree/main/public)
- [Commit history](https://github.com/yashkesharwani559/portfolio/commits/main)
- [GitHub Actions / deployment status](https://github.com/yashkesharwani559/portfolio/actions)
- [GitHub Pages settings](https://github.com/yashkesharwani559/portfolio/settings/pages)
- [GitHub Pages documentation](https://docs.github.com/pages)
