import { Merge } from "type-fest";

export type ReactChildren = { children?: React.ReactNode };
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export type WithChildren<P = {}> = P & ReactChildren;
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export type FCC<P = {}> = React.FC<P & ReactChildren>;

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;
export type InputProps = Merge<
  React.InputHTMLAttributes<HTMLInputElement>,
  { name: string }
>;
export type FormProps = React.FormHTMLAttributes<HTMLFormElement>;
export type SvgProps = React.SVGAttributes<SVGElement>;

export type TableProps = React.TableHTMLAttributes<HTMLTableElement>;
export type ThProps = React.ThHTMLAttributes<HTMLTableCellElement>;
export type TrProps = React.HTMLAttributes<HTMLTableRowElement>;
export type TdProps = ThProps;
export type TheadProps = React.HTMLAttributes<HTMLTableSectionElement>;
export type TbodyProps = TheadProps;

export type SetState<T> = React.Dispatch<React.SetStateAction<T>>;
