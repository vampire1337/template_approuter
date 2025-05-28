# template_approuter — Coding Contract (Next.js 14 + Nx)

## 1 · Architecture Layers

| Layer                            | Tag           | Allowed Imports                 |
| -------------------------------- | ------------- | ------------------------------- |
| Application (pages & API routes) | `app`       | `feature-*`,`ui`,`shared` |
| Domain feature libs              | `feature-*` | `ui`,`shared`               |
| UI component libs                | `ui`        | `shared`                      |
| Shared utilities                 | `shared`    | `shared`                      |

> Violations are blocked by **`@nx/enforce-module-boundaries`** ESLint rule.

---

## 2 · Coding Standards

* **TypeScript strict** (`noImplicitAny`, `strictNullChecks`).
* **Tailwind CSS** — no inline styles.
* **Forbidden** in production code: `any`, `console.log`.
* **Testing requirements**
  * Unit → Jest with global coverage ≥ 80 %.
  * E2E → Playwright (`apps/template-approuter-e2e`).
* Every exported function / class must include JSDoc.
* Code must compile via `nx build template-approuter`.

---

## 3 · Database Strategy

> **Development & local CI** → **SQLite** (file‐based, fastest).
>
> **Staging / Production** →  **Supabase Postgres** .

* Prisma `datasource` stays `postgresql`; `DATABASE_URL` points to `file:./dev.db` locally — Prisma transparently switches to SQLite.
* Migrations run with `prisma migrate deploy` on Supabase.
* When creating a new model, always generate migration & seed scripts.

---

## 4 · Code Templates

### API Route (App Router)

```ts
// app/api/<route>/route.ts
import { NextResponse } from 'next/server';
import { z } from 'zod';
import { db } from 'shared/prisma';

const schema = z.object({ name: z.string() });

export async function POST(req: Request) {
  const input = schema.parse(await req.json());
  await db.user.create({ data: input });
  return NextResponse.json({ ok: true });
}
```

### Unit Test

```ts
import { handler } from './route';

describe('POST /api/user', () => {
  it('returns 200', async () => {
    const res = await handler(/* mock Request */);
    expect(res.status).toBe(200);
  });
});
```

---

## 5 · Workflow Checklist

1. Modify code **only** inside allowed layers.
2. Add/adjust unit & e2e tests for every change.
3. CI gates (lint/test/CodeQL/build) **must be green** before merge.
4. For large features:  *plan → implement → test → refine* .

> Always return either a **minimal diff** or a concise explanation when requested — no extra text.



## 6 · Repository discovery checklist  ✅

*Before you start coding a feature, always:*

1. Run `nx show projects` and `nx graph` to see existing libs and tags.
2. Open `eslint.config.mjs` to remind yourself of tag boundaries.
3. Run `npm run test` — all tests must stay green (coverage ≥ 80 %).
4. After changes: `npm run build` must compile without errors.
5. If you add e2e, append `[e2e]` flag to the commit message so CI runs Playwright.

_Never commit code that violates any of the above._
