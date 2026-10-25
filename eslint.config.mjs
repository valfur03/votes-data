import js from "@eslint/js";
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import betterTailwindcss from "eslint-plugin-better-tailwindcss";
import perfectionist from "eslint-plugin-perfectionist";
import prettierRecommended from "eslint-plugin-prettier/recommended";
import tseslint from "typescript-eslint";

const config = [
  { ignores: [".next/**", "node_modules/**"] },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...nextCoreWebVitals,
  {
    ...betterTailwindcss.configs.recommended,
    rules: {
      ...betterTailwindcss.configs.recommended.rules,
      "better-tailwindcss/enforce-consistent-line-wrapping": "off",
      "better-tailwindcss/enforce-shorthand-classes": "warn",
      "better-tailwindcss/no-unknown-classes": [
        "error",
        { ignore: ["^page-header$"] },
      ],
    },
    settings: {
      "better-tailwindcss": {
        detectComponentClasses: true,
        entryPoint: "src/app/globals.css",
      },
    },
  },
  prettierRecommended,
  {
    plugins: { perfectionist },
    rules: {
      "perfectionist/sort-imports": [
        "error",
        {
          groups: [
            [
              "type-builtin",
              "type-external",
              "value-builtin",
              "value-external",
            ],
            ["type-internal", "value-internal"],
            [
              "type-parent",
              "value-parent",
              "type-sibling",
              "value-sibling",
              "type-index",
              "value-index",
            ],
            "unknown",
          ],
        },
      ],
    },
  },
];

export default config;
