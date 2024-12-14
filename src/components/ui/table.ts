import { TdProps, TrProps } from "../../../types/react";
import { withClassName } from "../ui/with-class-name";

export const TdHeader = withClassName<TdProps>("td", "pr-2 font-bold");

export const Th = withClassName<TdProps>("th", "px-2 text-left");
export const Td = withClassName<TdProps>("td", "px-2");
export const Tr = withClassName<TrProps>("tr", "hover:bg-gray-100");
