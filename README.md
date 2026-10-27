# Make My Marriage

Make My Marriage is a wedding planning workspace for couples and their families, with event and task planning, guests and RSVPs, expenses, vendors, a wedding website, livestream embeds, and private photo sharing.

## Technology

- TypeScript, React, and Next.js App Router
- REST API Route Handlers in a modular monolith
- MongoDB Atlas with Mongoose
- Zod validation
- Cloudflare R2, Resend, Google Places, and Vercel integrations

The product and system decisions are documented in [`docs/`](docs/): [PRD](docs/PRD.md), [system design](docs/SYSTEM_DESIGN.md), [database design](docs/DATABASE_DESIGN.md), and [API design](docs/API_DESIGN.md).

## Prerequisites

- Node.js 20.9 or newer
- npm
- MongoDB Atlas connection string for database-backed work

Provider credentials are not needed to run the scaffold placeholder pages.

## Local setup

```bash
npm install
Copy-Item .env.example .env.local
npm run dev
```

Set the required environment values in `.env.local` when implementing the corresponding integrations. Never commit `.env.local` or real credentials.

## Commands

```bash
npm run dev        # local development
npm run lint       # lint source and configuration
npm run typecheck  # TypeScript checks
npm test           # unit/service/API test foundation
npm run build      # production build
npm run start      # serve a production build
npx playwright test # end-to-end test foundation
```

## Architecture and folders

- `src/app/` — dashboard, public wedding website, guest token surfaces, and API route placement
- `src/modules/` — domain-owned services, repositories, models, and validation as features are added
- `src/server/` — database, auth/authorization contracts, HTTP utilities, configuration, logging, and provider adapters
- `src/components/` — shared UI primitives and layouts
- `src/shared/` — small cross-domain types and utilities
- `tests/` — unit, integration, authorization, API, and end-to-end tests
- `docs/` — authoritative product and system design documents

The initial pages and module notes are placeholders. Authentication, database models, API feature endpoints, and product workflows are not implemented in this scaffold.
