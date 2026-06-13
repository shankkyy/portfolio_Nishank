# Nishank Verma — Portfolio (React + Vite)

A fast, single-page portfolio focused on AI / LLM / RAG engineering, built with React + Vite. No backend — the contact form posts directly to [Web3Forms](https://web3forms.com), which emails submissions to your inbox.

## Quick start

```bash
npm install      # install dependencies
npm run dev      # local dev server (http://localhost:5173)
npm run build    # production build → dist/
npm run preview  # preview the production build locally
```

## Configure the contact form (one step)

1. Go to https://web3forms.com, enter your email (**shaannkkyy2403@gmail.com**), and copy the free access key they send you.
2. Open `.env` and set:
   ```
   VITE_WEB3FORMS_KEY=your-real-key-here
   ```
3. Restart `npm run dev` (env vars load at startup).

Until a real key is set, the form shows a "not configured" message instead of failing silently.

### About "secrets"

The Web3Forms access key is **public by design** — it only authorizes "send a form to the inbox tied to this key." Any client-side app ships its code to the browser, so this key is always visible in the built bundle. Keeping it in `.env` is for **convenience and hygiene** (easy to swap, not committed to git), **not** secrecy. There is no genuine secret in this project. Real secrets (database keys, paid APIs, auth) would require a backend or serverless function.

## Project structure

```
portfolio/
├─ index.html              # Vite entry (fonts + #root)
├─ .env                    # your Web3Forms key (gitignored)
├─ .env.example            # template
├─ vite.config.js
├─ src/
│  ├─ main.jsx             # React entry
│  ├─ App.jsx              # composes all sections
│  ├─ index.css            # global styles + design tokens
│  ├─ data/content.js      # ALL text/data — edit copy here
│  ├─ hooks/useReveal.js   # scroll-reveal animation
│  └─ components/          # Nav, Hero, Tape, About, Skills,
│                          #   Projects, Experience, Contact, Footer
└─ standalone-backup.html  # original no-build single-file version
```

## Editing content

All copy, skills, projects, experience and buzzwords live in **`src/data/content.js`** — change them there without touching the components. Update your real **LinkedIn** and **GitHub** URLs in the `profile` object at the top of that file.

## Deploy

Run `npm run build` and host the `dist/` folder anywhere static — Netlify, Vercel, GitHub Pages, Cloudflare Pages. Set the `VITE_WEB3FORMS_KEY` environment variable in your host's dashboard so the form works in production.
