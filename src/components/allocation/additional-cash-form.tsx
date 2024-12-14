import { FC } from "react";
import { TextInput } from "../form/fields/text-input";
import { Form } from "../form/form";
import { useFormWithCache } from "../form/use-form-with-cache";

export const AdditionalCashForm: FC = () => {
  const methods = useFormWithCache("allocation-adustments", {
    defaultValues: {
      cash: "",
    },
  });

  return (
    <Form methods={methods}>
      <div className="flex flex-wrap gap-4">
        <TextInput name="cash" label="Additional Cash" horizontal />
      </div>
    </Form>
  );
};
