import { FC, ReactNode } from "react";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export type FCC<P = {}> = FC<P & { children?: ReactNode }>;
