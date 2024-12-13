import { ReactNode } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  UseFormReturn,
} from "react-hook-form";
import { Merge } from "type-fest";
import { FormProps } from "../../../types/react";
import { FormError } from "./form-error";

type Props<F extends FieldValues> = Merge<
  FormProps,
  {
    onSubmit?: SubmitHandler<F>;
    methods: UseFormReturn<F>;
    children: ReactNode;
  }
>;

export const Form = <F extends FieldValues>({
  onSubmit,
  methods,
  children,
  ...props
}: Props<F>): ReactNode => {
  return (
    <FormProvider {...methods}>
      <FormError />
      <form
        {...props}
        onSubmit={onSubmit ? methods.handleSubmit(onSubmit) : undefined}
      >
        {children}
      </form>
    </FormProvider>
  );
};
