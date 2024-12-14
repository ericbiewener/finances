import assert from "assert";
import pkgDir from "pkg-dir";

// Use this variable to get around mocks in tests
export const __PROJECT_ROOT__ = __dirname;

/**
 * `packageDirectorySync` can return `undefined`, so this wrapper explicitly
 * throws an error instead and provides a non-undefined return type.
 */

export const getProjectRoot = () => {
  const root = pkgDir.sync();
  assert(root, "Could not find project root");
  return root;
};
