import clsx from "clsx";
import { ComponentType } from "react";

export const withClassName =
  <P extends { className?: string | undefined }>(
    Component: ComponentType<P> | string,
    className: string,
  ) =>
  // eslint-disable-next-line react/display-name
  (props: P) => {
    const finalProps = {
      ...props,
      className: clsx(className, props.className),
    };
    return <Component {...finalProps} />;
  };
