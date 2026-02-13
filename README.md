# Personal Portfolio (Next.js)

A one-page personal portfolio built with Next.js App Router, TypeScript, and Tailwind CSS.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000)

## Build for Production

```bash
npm run build
npm run start
```

## Edit Content

All content comes from a single file:

- `lib/content.ts`

Update that file to change:

- Hero text and links
- About copy/photo
- Project cards
- Experience entries
- Hobbies cards

## Replace Images

Put your images in:

- `public/images`

Then ensure paths in `lib/content.ts` match, for example:

- `/images/me.jpg`
- `/images/project-one.jpg`
- `/images/project-two.jpg`
- `/images/guitar.jpg`
- `/images/figures.jpg`

## Project Structure

- `app/layout.tsx` - Root layout + metadata
- `app/page.tsx` - One-page assembly
- `app/globals.css` - Global styles + Tailwind layers
- `components/` - Reusable section components
- `lib/content.ts` - Single source for all content
- `public/images/` - Static images
- `tailwind.config.ts` - Tailwind theme and content config
- `postcss.config.js` - PostCSS plugins

## Notes

- This is a static site setup (no database, no CMS).
- If an image file is missing from `public/images`, the page will still run but that image path will 404 until replaced.
