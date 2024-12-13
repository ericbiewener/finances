import clsx from "clsx";
import { Component, ComponentProps } from "solid-js";
import { Dynamic } from "solid-js/web";

export const withClass =
  <C extends Component<{ class?: string }>>(
    Component: C | string,
    className: string,
  ): C =>
  // @ts-ignore
  (props: ComponentProps<C>) => {
    const finalProps = {
      ...props,
      class: clsx(className, props.class),
    };
    return typeof Component === "string" ? (
      <Dynamic {...finalProps} component={Component} />
    ) : (
      <Component {...finalProps} />
    );
  };
