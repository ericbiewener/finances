import clsx from "clsx";
import { ComponentProps, ComponentType } from "react";

export const withClassName =
  <C extends ComponentType<{ className?: string }>>(
    Component: C | string,
    className: string,
  ) =>
  // eslint-disable-next-line react/display-name
  (props: ComponentProps<C>) => {
    const finalProps = {
      ...props,
      className: clsx(className, props.className),
    };
    return <Component {...finalProps} />;
  };
