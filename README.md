# Server Metadata SEO

Demonstrates how to use `getGT` inside Next.js `generateMetadata` to create translated page titles, descriptions, and Open Graph tags for multilingual SEO.

**[Live Demo](https://server-metadata-seo.generaltranslation.dev)** | **[General Translation Docs](https://generaltranslation.com/docs)**

## About

This example app shows how to produce locale-aware metadata in a Next.js App Router project using General Translation. Each supported language gets its own translated `<title>`, `<meta description>`, Open Graph tags, and `hreflang` alternate links — improving search engine visibility across languages.

## GT Features Used

- `getGT` — Server-side string translations (used inside `generateMetadata`)
- `<T>` — JSX translation for page content
- `<LocaleSelector>` — Language picker
- `loadTranslations` — Local translation storage

## Getting Started

```bash
git clone https://github.com/gt-examples/server-metadata-seo.git
cd server-metadata-seo
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Built With

- [Next.js](https://nextjs.org)
- [General Translation](https://generaltranslation.com) (gt-next)
- [Tailwind CSS](https://tailwindcss.com)
