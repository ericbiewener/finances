import { defineWorkspace } from "vitest/config";

const BROWSER_TEST_INCLUDE = ["src/**/*.browser.test.{ts,tsx}"];

export default defineWorkspace([
  {
    extends: "vitest/vitest.config.ts",
    test: {
      name: "node",
      environment: "node",
      include: ["src/**/*.test.{ts,tsx}"],
      exclude: BROWSER_TEST_INCLUDE,
      typecheck: {
        tsconfig: "tsconfig.test.json",
      },
    },
  },
  {
    extends: "vitest/vitest.config.ts",
    test: {
      name: "browser",
      environment: "jsdom",
      include: BROWSER_TEST_INCLUDE,
      typecheck: {
        tsconfig: "tsconfig.test.json",
      },
      environmentOptions: {
        jsdom: { url: "https://local.ebay.com:8082" },
      },
    },
  },
]);