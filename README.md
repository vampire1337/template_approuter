# StarterApprouter

# template_approuter – README (русский | English)

---

## 🇷🇺 Кратко

1. **Клонируйте репозиторий-шаблон**
   ```bash
   gh repo create my-app --template YOUR_GH_USER/template_approuter --clone
   cd my-app && npm install
   cp .env.example .env.local  # настройте переменные
   git add . && git commit -m "chore: init"
   ```
2. **Локальная разработка** — `npm run dev` (SQLite).
3. **Пуш** → Husky (lint+unit) → GitHub CI (build, CodeQL, e2e, deploy).
4. Добавьте `[e2e]` или `[deploy]` в коммит, чтобы запустить E2E или деплой на Vercel.
5. Failure? CI откроет Issue `ci-failure` – исправьте через Copilot Chat (`/fix-build`) или Devika.

### Структура слоёв

| Слой                              | Тег        | Импортирует |
| ------------------------------------- | ------------- | ---------------------- |
| Приложение                  | `app`       | feature, ui, shared    |
| Доменные библиотеки | `feature-*` | ui, shared             |
| UI                                    | `ui`        | shared                 |
| Shared                                | `shared`    | shared                 |

Правило `@nx/enforce-module-boundaries` запрещает нарушения.

### Базы данных

* **Dev/CI** – SQLite `file:./dev.db`.
* **Prod** – Supabase Postgres (установите `DATABASE_URL`).

---

## 🇬🇧 Quick Start

1. **Clone the template**
   ```bash
   gh repo create my-app --template YOUR_GH_USER/template_approuter --clone
   cd my-app && npm install
   cp .env.example .env.local   # tweak variables
   git add . && git commit -m "chore: init"
   ```
2. **Local dev** — `npm run dev` (SQLite).
3. **Push** → Husky (lint+unit) → GitHub CI (build, CodeQL, e2e, deploy).
4. Add `[e2e]` or `[deploy]` in commit message to trigger E2E or deploy to Vercel.
5. Failure? CI opens Issue `ci-failure` – fix via Copilot Chat (`/fix-build`) or Devika.

### Layer rules

| Layer            | Tag           | Allowed imports     |
| ---------------- | ------------- | ------------------- |
| App (pages, API) | `app`       | feature, ui, shared |
| Domain feature   | `feature-*` | ui, shared          |
| UI libraries     | `ui`        | shared              |
| Shared utilities | `shared`    | shared              |

ESLint `@nx/enforce-module-boundaries` blocks violations.

### Databases

* **Dev/CI** – SQLite `file:./dev.db`.
* **Prod** – Supabase Postgres (`DATABASE_URL`).

---

### CI Flags

| Flag         | Effect                            |
| ------------ | --------------------------------- |
| `[e2e]`    | run Playwright tests              |
| `[deploy]` | run Playwright + deploy to Vercel |

Happy hacking! 

`<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45">``</a>`

✨ Your new, shiny [Nx workspace](https://nx.dev) is almost ready ✨.

[Learn more about this workspace setup and its capabilities](https://nx.dev/nx-api/next?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) or run `npx nx graph` to visually explore what was created. Now, let's get you up to speed!

## Finish your CI setup

[Click here to finish setting up your workspace!](https://cloud.nx.app/connect/bdYBy0Yqm9)

## Run tasks

To run the dev server for your app, use:

```sh
npx nx dev starter_approuter
```

To create a production bundle:

```sh
npx nx build starter_approuter
```

To see all available targets to run for a project, run:

```sh
npx nx show project starter_approuter
```

These targets are either [inferred automatically](https://nx.dev/concepts/inferred-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) or defined in the `project.json` or `package.json` files.

[More about running tasks in the docs &raquo;](https://nx.dev/features/run-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Add new projects

While you could add new projects to your workspace manually, you might want to leverage [Nx plugins](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) and their [code generation](https://nx.dev/features/generate-code?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) feature.

Use the plugin's generator to create new projects.

To generate a new application, use:

```sh
npx nx g @nx/next:app demo
```

To generate a new library, use:

```sh
npx nx g @nx/react:lib mylib
```

You can use `npx nx list` to get a list of installed plugins. Then, run `npx nx list <plugin-name>` to learn about more specific capabilities of a particular plugin. Alternatively, [install Nx Console](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) to browse plugins and generators in your IDE.

[Learn more about Nx plugins &raquo;](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) | [Browse the plugin registry &raquo;](https://nx.dev/plugin-registry?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

[Learn more about Nx on CI](https://nx.dev/ci/intro/ci-with-nx#ready-get-started-with-your-provider?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Install Nx Console

Nx Console is an editor extension that enriches your developer experience. It lets you run tasks, generate code, and improves code autocompletion in your IDE. It is available for VSCode and IntelliJ.

[Install Nx Console &raquo;](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Useful links

Learn more:

- [Learn more about this workspace setup](https://nx.dev/nx-api/next?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Learn about Nx on CI](https://nx.dev/ci/intro/ci-with-nx?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Releasing Packages with Nx release](https://nx.dev/features/manage-releases?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [What are Nx plugins?](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

And join the Nx community:

- [Discord](https://go.nx.dev/community)
- [Follow us on X](https://twitter.com/nxdevtools) or [LinkedIn](https://www.linkedin.com/company/nrwl)
- [Our Youtube channel](https://www.youtube.com/@nxdevtools)
- [Our blog](https://nx.dev/blog?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
