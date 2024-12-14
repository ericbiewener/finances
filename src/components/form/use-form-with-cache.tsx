import {
  DefaultValues,
  FieldValues,
  Merge,
  useForm,
  UseFormProps,
} from "react-hook-form";
import { useEffectSkipFirst } from "../../utils/react/use-effect-skip-first";
import { useStorageKey } from "../../utils/react/use-storage-key";

export const useFormWithCache = <F extends FieldValues = FieldValues, C = any>(
  name: string,
  { defaultValues, ...props }: Merge<UseFormProps<F, C>, { defaultValues: F }>,
) => {
  const [cache, setCache] = useStorageKey<{ value: F }>(name);

  const methods = useForm<F>({
    ...props,
    defaultValues: { ...defaultValues, ...cache?.value } as DefaultValues<F>,
  });

  const data = methods.watch();

  useEffectSkipFirst(() => {
    setCache({ value: data });
  }, [data, setCache]);

  return methods;
};
