"use client";
import React from "react";
import styles from "./Pagination.module.css";
import Text from "../../atoms/Text/Text";
import { Select } from "@/components/atoms/inputs/Select";
import { Icon } from "@/components/atoms";
import clsx from "clsx";
import { css } from "@emotion/css";

export type PaginationProps = {
  size?: "xs" | "sm" | "md" | "lg";
  currentPage: number;
  totalItems: number;
  limit: number;
};

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalItems,
  limit,
  size = "md",
}) => {
  const totalPages = Math.ceil(totalItems / limit);
  const offset = (currentPage - 1) * limit;
  const offsetEnd = offset + limit;
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  return (
    <div className={styles.pagination}>
      <div className={clsx(styles.sectionContainer)} id="limitContainer">
        <Text size={size} className={styles.noWrap}>
          Items Por Pagina:
        </Text>
        <Select
          size={size}
          width="wrap"
          dropdownOptions={["5", "10", "15"]}
          defaultValue={limit.toString()}
          maxOptionsBeforeScroll="5"
        />
      </div>
      <div
        className={clsx(styles.sectionContainer, styles.totalContainer)}
        id="totalContainer"
      >
        <Text
          size={size}
          className={styles.noWrap}
        >{`${offset}-${offsetEnd} de ${totalItems} items`}</Text>
      </div>
      <div className={styles.sectionContainer} id="paginationContainer">
        <Select
          size={size}
          defaultValue={currentPage.toString()}
          width="wrap"
          dropdownOptions={pages}
          maxOptionsBeforeScroll="5"
        />
        <Text size={size} className={styles.noWrap} as="span">
          de {totalPages} paginas
        </Text>
      </div>
      <div
        className={styles.paginationArrowContainer}
        id="paginationArrowContainer"
      >
        <div className={styles.arrowContainer}>
          <Icon
            nameIcon="BiCaretLeft"
            className={clsx(
              styles.arrow,
              css`
                height: var(--sys-input-height-${size});
              `
            )}
          />
        </div>
        <Icon
          nameIcon="BiCaretRight"
          className={clsx(
            styles.arrow,
            css`
              height: var(--sys-input-height-${size});
            `
          )}
        />
      </div>
    </div>
  );
};

export default Pagination;
