import type { Component, JSXElement } from "solid-js";
import { withClass } from "./with-class";

type Props = {
  children: JSXElement;
  className?: string;
};

export const H1: Component<Props> = withClass("h1", "text-3xl");
