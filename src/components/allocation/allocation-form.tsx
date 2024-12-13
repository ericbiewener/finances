import { FC } from "react";
import { useForm } from "react-hook-form";
import { TextInput } from "../form/fields/text-input";
import { Form } from "../form/form";

type Props = {
  funds: string[];
};

export const AllocationForm: FC<Props> = ({ funds }) => {
  const methods = useForm({
    defaultValues: {
      ...funds.reduce((acc, fund) => ({ ...acc, [fund]: "" }), {}),
    },
  });
  return (
    <Form methods={methods}>
      <div className="flex flex-wrap gap-4">
        {funds.map((f) => (
          <TextInput key={f} name={f} label={f} />
        ))}
      </div>
    </Form>
  );
};
