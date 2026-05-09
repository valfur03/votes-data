import js from "@eslint/js";
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import perfectionist from "eslint-plugin-perfectionist";
import prettierRecommended from "eslint-plugin-prettier/recommended";
import tailwindcss from "eslint-plugin-tailwindcss";
import tseslint from "typescript-eslint";

const config = [
  { ignores: [".next/**", "node_modules/**"] },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...nextCoreWebVitals,
  ...tailwindcss.configs["flat/recommended"],
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
