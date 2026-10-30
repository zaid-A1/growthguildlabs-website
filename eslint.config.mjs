/**
 * Flat ESLint configuration.
 *
 * `eslint-config-next` 16.x ships native flat configs (`Linter.Config[]`),
 * so they are consumed directly — NOT via the legacy FlatCompat bridge
 * (which fails to stringify flat/reciprocal plugin annotations).
 */
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

const eslintConfig = [
  {
    ignores: [
      "node_modules/**",
      "node_modules.trash/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
      "APPS CREATED BY GROWTH GUILD LABS/**",
    ],
  },
  ...nextCoreWebVitals,
  ...nextTypescript,
];

export default eslintConfig;
