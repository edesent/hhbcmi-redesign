# Highland Hills Baptist Church — Website

The website for **Highland Hills Baptist Church**, an independent Baptist church
in Highland, Michigan.

- **Live preview:** https://hhbcmi-redesign.vercel.app
- **Address:** 179 Woodruff Lake Rd, Highland, MI 48357
- **Phone:** (248) 887-0698
- **Pastor:** Matt Leathley (Senior Pastor)
- **Facebook:** https://www.facebook.com/HHBC1611/
- **YouTube:** https://www.youtube.com/@highlandhillsbaptistchurch4533

Built with Next.js 16 (App Router) + React 19 + Tailwind CSS v4. Deployed on Vercel.

---

## For whoever is editing this site (humans + AI assistants)

**Read this before changing anything** — it applies whether you're editing in
Claude, ChatGPT, or by hand.

### ⚠️ This is a newer version of Next.js than you may know
This project runs **Next.js 16** with the App Router and **React 19**. APIs and
conventions may differ from older Next.js you were trained on. When in doubt,
match the patterns already in the existing files — don't invent new ones.

### This is a single-page site
Almost everything visitors see lives on the **home page**:

### `src/app/page.tsx`

It is one file split into clearly named sections (`Hero`, `ActionBar`,
`Welcome`, `ServiceRhythm`, `Pastor`, `Ministries`, `Connect`, `Location`,
`Footer`). To change wording, find the section by name and edit the text between
the tags or `"quotes"`, save, and the site updates automatically.

Common edits and where they live in `src/app/page.tsx`:

| Want to change…                         | Edit this in `src/app/page.tsx`      |
| --------------------------------------- | ------------------------------------ |
| Service times                           | the `serviceTimes` list at the top   |
| The three "Life Together" cards         | the `ministries` list at the top     |
| Pastor name / bio                       | the `Pastor` section                 |
| Welcome wording                         | the `Welcome` section                |
| Address, phone, map link                | `ActionBar`, `Location`, `Footer`    |
| Facebook / YouTube links                | search the file for the existing URL |
| Search-engine info (name/phone/address) | the `churchSchema` block at the top  |

The site name, page title, and description for Google/Facebook previews live in
**`src/app/layout.tsx`** (the `metadata` block).

The top navigation menu lives in **`src/components/Navbar.tsx`** (the `navLinks`
list).

> **Tip for ChatGPT:** When asked to change content, edit the words inside
> `src/app/page.tsx`. Keep the surrounding code (tags, quotes, commas, brackets)
> exactly as it is — only change the words a visitor would read.

### Styling is Tailwind utility classes
The look is built with **Tailwind CSS v4** utility classes directly on the
elements (e.g. `bg-navy-950`, `text-white`, `py-24`). The custom colors and a
few helper classes (`.section-shell`, `.fine-label`, `.soft-shadow`,
`.lift-link`) are defined in **`src/app/globals.css`**. To add a new color or
restyle globally, edit that file; the brand colors (navy, cream, gold, etc.)
live in the `@theme` block at the top.

### Changing a picture
1. Put the new image in the **`public/`** folder.
2. In `src/app/page.tsx`, update the matching `src="/your-file.jpg"` to the new
   file name.

Key images in `public/`: `hero-video.mp4` + `hero-poster.jpg` (the home hero and
the Welcome photo), `hhbc-iphone-mockup.png` (the phone in "Stay Connected"),
`highland-hills-baptist-logo.svg` (header logo), and `hhbc-mark.svg` (the round
badge).

---

## 🎨 Design

Clean, modern Baptist design: deep **navy** (`#061a34`) with cream and sky-blue,
a gold accent, and a serif/sans pairing (Newsreader + Inter). Full-bleed
**video hero** of the church. Color tokens and fonts are in
`src/app/globals.css` and `src/app/layout.tsx`.

## 🚀 Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

Auto-deploys to Vercel on every push to `main`.

## 🚀 Deployment & analytics (operator notes)

- **Auto-deploy:** connected to the Vercel project `hhbcmi-redesign` via the
  GitHub git integration. Every push to `main` builds and deploys automatically;
  the production alias is **www.hhbcmi.com**.
- **This repo is PUBLIC — keep it that way.** On a Vercel Pro team, a **private**
  repo only deploys commits authored by a Vercel team member; a commit from the
  church's own `HHBCMi` GitHub account (not a team member) gets silently
  **BLOCKED** ("Deployment Blocked — HHBCMi does not have a Vercel account linked
  to their GitHub account"). Vercel makes collaboration **free for public repos**,
  so as a public repo the `HHBCMi` account's pushes deploy normally. (Fork
  protection is unrelated — it only affects pull requests from forks.)
- If a deploy ever shows **BLOCKED** again: confirm the repo is still **public**,
  or have the commit authored by an account on the Vercel team. Not a code change.
- **Web Analytics** is enabled on the Vercel project, and the `<Analytics />`
  tracker (`@vercel/analytics/next`) is wired into `src/app/layout.tsx` so page
  views are actually collected. View them in the Vercel dashboard → Analytics.
