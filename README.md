# Next.js AppRouter Tutorial

> Next.js 13 and the new AppRouter

## Build Using:

- [Next.js](https://nextjs.org/)
- [Drizzle](https://orm.drizzle.team/) (sqlite)
- [shadcn/ui](https://ui.shadcn.com/)	

## Features

- Chapter 1: [AppRouter](/app/1-app-routing/page.tsx)
- Chapter 2: [Data Fetching](/app/2-data-fetching/page.tsx)
- Chapter 3: [Caching](/app/3-caching/page.tsx)
	- Chapter 3.1: [static](/app/3-caching/static/page.tsx)	
	- Chapter 3.2: [no-store](/app/3-caching/no-store/page.tsx)	
	- Chapter 3.3: [revalidate](/app/3-caching/revalidate//page.tsx)	
- Chapter 4: [Server Actions](/app/4-server-actions/page.tsx)
  - Chapter 4.1: [Client Actions](/app/4-server-actions/client-actions/page.tsx)

## Getting Started

Install dependencies

```bash
pnpm install
```

Generate Drizzle schemas

```bash
pnpm generate
```

Push Drizzle schemas to db

```bash
pnpm push
```

Start the server

```bash
pnpm dev
```
