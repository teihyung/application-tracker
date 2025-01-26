import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import nextConfig from "eslint-config-next";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  // For all JS and TS files
  {
    files: ["**/*.{js,ts,jsx,tsx}"],
    languageOptions: {
      parser: tsParser, // TypeScript parser
      globals: globals.browser, // Browser globals (e.g., window, document)
    },
    plugins: {
      "@typescript-eslint": tseslint,
    },
    rules: {
      ...pluginJs.configs.recommended.rules, // JS recommended rules
      ...tseslint.configs.recommended.rules, // TypeScript recommended rules
    },
  },
  // For Next.js-specific linting
  nextConfig(),
];
