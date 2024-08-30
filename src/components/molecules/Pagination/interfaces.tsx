export interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange?: (e: number) => void;
  neighbourNumbers?: number;
  size?: "sm" | "md" | "lg";
}
