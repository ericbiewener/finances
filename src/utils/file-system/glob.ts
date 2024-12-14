import globby from "globby";
import { getProjectRoot } from "../../../project-root";

type Args = Parameters<typeof globby>;
type Glob = (...args: Args) => ReturnType<typeof globby>;

export const glob: Glob = (pattern, opts) =>
  globby(pattern, { cwd: getProjectRoot(), absolute: true, ...opts });
