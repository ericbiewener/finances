import { FCC } from "../../../types/react";
import { withClassName } from "./with-class-name";

type Props = { className?: string };

export const H1: FCC<Props> = withClassName(
  "h1",
  "text-3xl font-bold text-sky-500",
);
export const H2: FCC<Props> = withClassName(
  "h2",
  "text-xl font-bold text-sky-700",
);
