import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // We don't want Next.js to decide what to lint. We want our `eslintrc` and
  // `eslintignore` files to be the source of truth for that, since that is the
  // standard setup in frontend codebases.
  // https://nextjs.org/docs/pages/building-your-application/configuring/eslint#linting-custom-directories-and-files
  eslint: {
    dirs: ["."],
  },
};

export default nextConfig;
