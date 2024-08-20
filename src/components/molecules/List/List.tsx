import React from "react";
import clsx from "clsx";
import styles from "./List.module.css";
import { ListHeader, ListProps, ListSortState } from "./interfaces";
import { Icon } from "@/components/atoms/Icon";
import { Text } from "@/components/atoms";

export default function List({
  size = "lg",
  headers = [],
  rows = [],
  fullWidth,
  customClassNames,
  onSort,
  sortState,
}: ListProps) {
  const handleSort = (state: ListSortState) => {
    if (!onSort) return;
    onSort(state);
  };

  const organizeDataByHeaderValue = (row: object, headers: ListHeader[]) => {
    return headers.map((header) => {
      if (header.value in row) {
        return header.value;
      }
      return "no encontrado";
    });
  };

  return (
    <div className={clsx(styles.container)}>
      {rows.length > 0 && (
        <table
          className={clsx(
            "ads-table",
            {
              [styles["fullWidth"]]: fullWidth,
              [`${customClassNames}`]: customClassNames,
            },
            styles.table
          )}
        >
          <thead>
            {headers.length > 0 && (
              <tr className={clsx(styles.tr)}>
                {headers.map((item, i) => (
                  <th
                    key={i}
                    className={clsx(styles.th, {
                      [styles["clickeable"]]: item.sortOption,
                    })}
                    onClick={() => {
                      if (item.sortOption) {
                        handleSort({
                          label: item.value,
                          value: sortState && sortState.value < 1 ? 1 : -1,
                        });
                      }
                    }}
                    align={item.align ?? "left"}
                  >
                    <div
                      className={clsx(styles.thInside)}
                      style={{ justifyContent: item.align }}
                    >
                      <Text as="span" size={size}>
                        {item.label}
                      </Text>
                      {sortState &&
                      item.sortOption &&
                      item.value === sortState.label ? (
                        <Icon
                          nameIcon={
                            sortState.value > 0
                              ? "adox-downCaret"
                              : "adox-upCaret"
                          }
                          size={12}
                          className={styles.thIcon}
                        />
                      ) : (
                        <div style={{ width: 16 }} />
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            )}
          </thead>
          <tbody>
            {rows.map((row, ir) => (
              <tr
                key={ir}
                className={clsx(styles.tr, {
                  [styles["clickeable"]]: row.onClick,
                })}
                onClick={row.onClick}
              >
                {organizeDataByHeaderValue(row, headers).map((td, i) => {
                  if (typeof row[td] === "function") return;
                  return (
                    <td
                      key={i}
                      className={clsx(styles.td, {
                        [styles["last"]]: ir === rows.length - 1,
                        [styles[`padding-${size}`]]: size,
                      })}
                      align={headers[i] ? headers[i].columnAlign : undefined}
                      width={headers[i] ? headers[i].width : undefined}
                    >
                      <Text as="span" size={size}>
                        {(row[td] as string).toString()}
                      </Text>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
