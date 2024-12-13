import { FCC } from "../../../types/react";
import { withClassName } from "../ui/with-class-name";

type Props = {
  className?: string;
};

export const TdHeader: FCC<Props> = withClassName("td", "pr-2 font-bold");
