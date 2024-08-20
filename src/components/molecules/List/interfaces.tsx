import { Size } from "@/models/sizes";

export interface ListProps {
  size?: Size | "2xs";
  headers?: ListHeader[];
  rows: ListRow[];
  fullWidth?: boolean;
  customClassNames?: string;
  onSort?: (state: ListSortState) => void;
  sortState?: ListSortState;
}

export type ListHeader = {
  label: string;
  value: string;
  align?: "center" | "left" | "right" | "justify" | "char";
  sortOption?: boolean;
  columnAlign?: "center" | "left" | "right" | "justify" | "char";
  width?: string;
};
export type ListRow = { [key: string]: unknown } & { onClick?: () => void };

export type ListSortState = { label: string; value: 1 | -1 };
