import solidPlugin from "vite-plugin-solid";
import globby from "globby";
import { defineConfig } from "vitest/config";

// @TODO: these should be specified in the workspace file so that they can be
// different based on env.
const setupFiles = globby.sync("vitest/setup-files/*.ts");

export default defineConfig({
  plugins: [solidPlugin()],
  test: {
    globals: true,
    clearMocks: true,
    setupFiles,
    coverage: {
      include: ["src/**/*.test.{ts,tsx}"],
      reporter: ["text", "html"],
    },
  },
});
