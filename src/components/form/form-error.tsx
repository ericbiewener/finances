import { FC, useEffect, useRef } from "react";
import { get, useFormState } from "react-hook-form";
import { ERROR_CONTAINER_CLASS_NAME } from "../ui/constants";
import { FORM_LEVEL_ERROR_NAME } from "./constants";

export const FormError: FC = () => {
  const { errors } = useFormState({ name: FORM_LEVEL_ERROR_NAME });
  const formError = get(errors, FORM_LEVEL_ERROR_NAME)?.message;
  const ref = useRef<HTMLDivElement>(null);

  const errorCount = Object.keys(errors).length;
  const hasFieldErrors =
    FORM_LEVEL_ERROR_NAME in errors ? errorCount > 1 : errorCount > 0;

  useEffect(() => {
    if (errorCount && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [errorCount]);

  return formError || hasFieldErrors ? (
    <div className={ERROR_CONTAINER_CLASS_NAME} ref={ref}>
      <ul>
        <li>{formError}</li>
        {hasFieldErrors ? <li>There are errors in the form fields.</li> : null}
      </ul>
    </div>
  ) : null;
};
