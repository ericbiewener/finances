import { Component, JSXElement } from "solid-js";
import { withClass } from "../ui/with-class";

type Props = {
  children: JSXElement;
  class?: string;
};

export const TdHeader: Component<Props> = withClass("td", "pr-2 font-bold");
