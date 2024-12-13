import type { Component, JSXElement } from "solid-js";
import { withClass } from "./with-class";

type Props = {
  children: JSXElement;
  class?: string;
};

export const H1: Component<Props> = withClass("h1", "text-3xl");
export const H2: Component<Props> = withClass("h2", "text-xl");
