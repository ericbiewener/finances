import js from "@eslint/js";
import importPlugin from "eslint-plugin-import-x";
import globals from "globals";
import tseslint from "typescript-eslint";

const languageOptions = {
  globals: {
    ...globals.node,
    ...globals.amd,
  },
};

const settings = {
  "import-x/parsers": { "@typescript-eslint/parser": [".ts", ".tsx"] },
  "import-x/resolver": { typescript: true },
};

const sharedConfigs = { languageOptions, settings };

export default [
  js.configs.recommended,
  importPlugin.flatConfigs.recommended,
  ...tseslint.configs.recommended,
  {
    ...sharedConfigs,
    files: ["**/*.cjs"],
  },
  {
    ...sharedConfigs,
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-import-type-side-effects": "error",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/no-empty-function": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-var-requires": "off",
      "@typescript-eslint/ban-ts-comment": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          args: "all",
          argsIgnorePattern: "^_",
          caughtErrors: "all",
          caughtErrorsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          ignoreRestSiblings: true,
        },
      ],
      "import-x/no-named-as-default": "error",
    },
  },
  {
    ...sharedConfigs,
    files: ["**/*.test.ts", "**/*.test.tsx"],
    rules: {
      "testing-library/no-node-access": "off",
      "testing-library/render-result-naming-convention": "off",
      "testing-library/await-async-utils": "off",
    },
  },
  // No idea how to fix this. This comment suggests that using
  // eslint-plugin-import-x should do it, but it doesn't:
  // https://github.com/iamturns/eslint-config-airbnb-typescript/issues/345#issuecomment-2269783683
  {
    files: ["eslint.config.js"],
    rules: {
      "import-x/no-unresolved": "off",
    },
  },
];
