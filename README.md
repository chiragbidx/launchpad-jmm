# ClientPilot — Internal CRM App Boilerplate

This repository is a minimal Next.js 16 (App Router) starter with React 19, TypeScript, Tailwind-ready PostCSS, and **Drizzle ORM + PostgreSQL ready**. It now includes a working email/password auth system backed by Drizzle + Postgres, with token-based email verification and password reset flows, plus a unified Node.js server for Railway that serves both the Next app and a protected command-runner API on the same port. Use this document as the single operational reference. If anything is unclear: **STOP AND ASK** before proceeding.

---

## 1. Current Scope
- Purpose: Baseline internal CRM/Dashboard UI scaffold with Postgres-backed Drizzle schema and a DB-backed auth/team entry flow.
- Data: Drizzle configured for PostgreSQL with `users`, `teams`, `team_members`, `team_invitations`, `feature_items`, and `auth_tokens` tables.
- Auth: `/auth` route is implemented with Sign in / Sign up forms and server actions in `app/auth/actions.ts`, plus token routes for email verification and password reset.
- Current auth contract: credentials are validated against `users` table (`bcryptjs` for password hashing/compare).
- Current auth limitation: no middleware-level auth guard is wired yet (`middleware.ts` not used); route protection is enforced in server layouts/pages via `getAuthSession()`.
- Dashboard: authenticated routes with shared layout (`app/dashboard/layout.tsx`) at `/dashboard`, `/dashboard/settings`, and `/dashboard/team`.
- Feature scaffold: `/dashboard/feature` is the canonical CRUD reference route for adding new dashboard features.
- Dashboard actions:
  - `app/dashboard/actions.tsx` contains shared actions (currently `signOutAction`).
  - `app/dashboard/settings/actions.tsx` contains settings-specific actions (`updateProfileAction`, `updateEmailAction`, `updatePasswordAction`, `deleteAccountAction`).
  - `app/dashboard/team/actions.tsx` contains team management actions (invite, revoke, remove, role update, team name update).
- Dashboard Dialog example:
  - `components/dashboard/dashboard-content.tsx` includes a mock CRUD modal using `components/ui/dialog.tsx`.
  - This demo supports local-state `create` and `edit` for projects and does not persist to DB—reference pattern for extending with real flows.
- Teams: multi-tenant team system with roles (owner, admin, member). Auto-created on signup. Team invitation flow via `/invite/[token]` with SendGrid email delivery.
- Email: SendGrid integration for transactional email (`lib/email/sendgrid.ts`).
- AI integration default: OpenAI with model `gpt-4o-mini` (override via `OPENAI_MODEL`).
- Env vars: `env.example` lists `OPENAI_API_KEY`, `OPENAI_MODEL`, `DATABASE_URL`, `DATABASE_SSL`, `SENDGRID_API_KEY`, `SENDGRID_FROM_EMAIL`, `BASE_URL`, and optional `NEXTAUTH_SECRET` (only for future Auth.js/NextAuth adoption).
- Current landing: section-composed layout with centralized navbar and modular `Layout*Section` components rebranded for ClientPilot.
  - Run-time visibility control enabled via `ONLY_SECTIONS` / `HIDE_SECTIONS`.
  - Layout is responsive with wrapping controls and an app max width around `1600px`.
- Theme system is centralized under `components/theme` and mounted in `app/layout.tsx`.
- Client interactivity is isolated to small islands (`HeroOrbs`, `ThemeToggle`, etc.).
- Owner/contact: Chirag Dodiya (chirag@bidx.ai).

## Auth Strategy (Custom)
- (Unchanged—see original summary, updated for ClientPilot brand.)

## Technology, Structure, Features, and Usage

- (Match previous structure exactly, replacing "Panda", "SaaS Starter", or similar terms with "ClientPilot" and Internal CRM/Dashboard language.)

## Branding, Contact & Footer

- Brand name: **ClientPilot**
- Owner/contact: Chirag Dodiya (chirag@bidx.ai)
- Footer/contact sections: update to reflect this owner/contact

## Safe Operation

- See previous guidelines—structure, migrations, deploy, and section composition are unchanged except for clarity on extensible, internal CRM/app foundation.

---

Please operate cautiously, keep changes small, and align new features with the documented structure. When uncertain: **STOP AND ASK**.