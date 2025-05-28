/* eslint.config.mjs – Hyperstack (Next 14 App Router starter) */
import nx from '@nx/eslint-plugin';

export default [
  /* ---------- базовые пресеты Nx (оставляем как есть) ---------- */
  ...nx.configs['flat/base'],
  ...nx.configs['flat/typescript'],
  ...nx.configs['flat/javascript'],

  /* ---------- игнорируем собранный dist ---------- */
  {
    ignores: ['**/dist'],
  },

  /* ---------- правила для исходного кода ---------- */
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {
      /* === “забор” между слоями  ========================== */
      '@nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: true,
          allow: ['^.*/eslint(\\.base)?\\.config\\.[cm]?js$'], // разрешаем импорт конфигов
          depConstraints: [
            /* приложения (Next apps) могут зависеть
               только от feature-либр, ui и shared */
            {
              sourceTag: 'app',
              onlyDependOnLibsWithTags: ['feature-*', 'ui', 'shared'],
            },
            /* бизнес-фичи могут тянуть ui и shared,
               но не друг друга напрямую */
            {
              sourceTag: 'feature-*',
              onlyDependOnLibsWithTags: ['ui', 'shared'],
            },
            /* UI-библиотеки используют только shared код */
            {
              sourceTag: 'ui',
              onlyDependOnLibsWithTags: ['shared'],
            },
            /* shared — независим от всех, кроме себя */
            {
              sourceTag: 'shared',
              onlyDependOnLibsWithTags: ['shared'],
            },
          ],
        },
      ],
    },
  },

  /* ---------- отдельный набор для конфиг-файлов, скриптов и пр. ---------- */
  {
    files: [
      '**/*.ts',
      '**/*.tsx',
      '**/*.cts',
      '**/*.mts',
      '**/*.js',
      '**/*.jsx',
      '**/*.cjs',
      '**/*.mjs',
    ],
    // можно переопределить / добавить правила только для tooling-кодa
    rules: {},
  },
];
