# Language Learning Platform

A personal learning platform, Japanese-first, built with Next.js + TypeScript + Tailwind CSS. See the project plan for full context on architecture and the phased roadmap.

## Running this project

This machine doesn't have Node.js installed (and can't install it due to org policy), so development happens in [StackBlitz](https://stackblitz.com), which runs Node in the browser. To open this project there:

1. Push this repo to GitHub (see below).
2. Go to `https://stackblitz.com/github/<your-username>/<repo-name>` to open it in StackBlitz — it will run `npm install` and `npm run dev` automatically.

If you ever do have Node.js available locally instead:

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Pushing to GitHub

Git is installed locally as a portable, no-admin copy. From this folder:

```bash
git add .
git commit -m "Your message"
git push
```

(The remote needs to be set up once — see setup notes.)
