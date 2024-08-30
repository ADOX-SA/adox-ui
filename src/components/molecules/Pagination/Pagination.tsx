import React from "react";
import classNames from "clsx";
import styles from "./Pagination.module.css";
import { PaginationProps } from "./interfaces";
import Text from "../../atoms/Text/Text";
import Icon from "../../atoms/Icon/Icon";

export default function Pagination({
  totalPages,
  currentPage,
  onPageChange = () => {},
  size = "md",
}: PaginationProps) {
  //hide some page numbers if there are too many
  const neighbourNumbers = 3;
  const startPage = currentPage - neighbourNumbers;
  const endPage = currentPage + neighbourNumbers;
  const pages: any[] = [];

  for (let i = startPage; i <= endPage; i++) {
    if (i <= 0 || i > totalPages) pages.push(undefined);
    else pages.push(i);
  }

  // useEffect(() => {
  //   if (currentPage > totalPages) {
  //     onPageChange(totalPages);
  //   }
  // }, [totalPages, currentPage, onPageChange]);

  return (
    <div>
      <ul className={classNames(styles.pagination)}>
        <li
          className={classNames(styles.paginationItem)}
          onClick={currentPage !== 1 ? () => onPageChange(1) : () => {}}
        >
          <Icon nameIcon="CgChevronDoubleLeft" size={`t-${size}`} />
        </li>
        <li
          className={classNames(styles.paginationItem)}
          onClick={
            currentPage != 1 ? () => onPageChange(currentPage - 1) : () => {}
          }
        >
          <Icon nameIcon="CgChevronLeft" size={`t-${size}`} />
        </li>
        {pages.map((page) => (
          <li
            key={page}
            className={classNames(styles.paginationItem, {
              [styles.active]: page === currentPage,
              [styles.disabled]: page === undefined,
            })}
            onClick={page ? () => onPageChange(page) : () => {}}
          >
            <Text as="span" size={size}>
              {page ?? ""}
            </Text>
          </li>
        ))}
        <li
          className={classNames(styles.paginationItem)}
          onClick={
            currentPage !== totalPages
              ? () => onPageChange(currentPage + 1)
              : () => {}
          }
        >
          <Icon nameIcon="CgChevronRight" size={`t-${size}`} />
        </li>
        <li
          className={classNames(styles.paginationItem)}
          onClick={
            currentPage !== totalPages
              ? () => onPageChange(totalPages)
              : () => {}
          }
        >
          <Icon size={`t-${size}`} nameIcon="CgChevronDoubleRight" />
          {/* &#62;&#62; */}
        </li>
      </ul>
    </div>
  );
}
