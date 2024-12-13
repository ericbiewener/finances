import clsx from "clsx";
import { ReactNode } from "react";
import { useFormContext } from "react-hook-form";
import { InputProps } from "../../../../types/react";
import { withClassName } from "../../ui/with-class-name";

type Props = InputProps & {
  label?: ReactNode;
  horizontal?: boolean;
};

export const TextInput = withClassName<Props>(
  ({ name, label, horizontal, ...props }) => {
    const ctx = useFormContext();
    const input = <input {...props} {...ctx.register(name)} />;
    return label ? (
      <label
        className={clsx("flex", {
          // Use `reverse` so that peer works
          "flex-col-reverse": !horizontal,
          "flex-row-reverse gap-x-2 items-center": horizontal,
        })}
      >
        {input}
        <div className="peer-focus:text-sky-500">{label}</div>
      </label>
    ) : (
      input
    );
  },
  "border rounded peer px-2.5 py-1 bg-gray-50 focus:bg-white border-gray-500 focus:border-sky-500 outline-none",
);
