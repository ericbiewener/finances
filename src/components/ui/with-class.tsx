import clsx from "clsx";
import { Component, ComponentProps } from "solid-js";
import { Dynamic } from "solid-js/web";

export const withClass =
  <C extends Component<{ className?: string }>>(
    Component: C | string,
    className: string,
  ): C =>
  // @ts-ignore
  (props: ComponentProps<C>) => {
    const finalProps = {
      ...props,
      className: clsx(className, props.className),
    };
    return typeof Component === "string" ? (
      <Dynamic {...finalProps} component={Component} />
    ) : (
      <Component {...finalProps} />
    );
  };
