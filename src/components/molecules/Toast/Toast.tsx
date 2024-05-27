import React from "react";
import styles from "./Toast.module.css";
import classNames from "clsx";

import { Icon } from "@/components/atoms/Icon";

import { ToastProps, ToastStatus } from "./interfaces";
import { Text } from "@/components/atoms/Text";
import { Container } from "@/components/layout/Container";

const mapStatus = (status: ToastStatus) => {
  switch (status) {
    case "success":
      return { name: "adox-checkmark", color: "success" };
    case "danger":
      return { name: "adox-error", color: "danger" };
    case "info":
      return { name: "adox-info", color: "info" };
    case "warning":
      return { name: "adox-warning", color: "warning" };
    case "pending":
      return { name: "adox-loading", color: "success" };
  }
};

const mapStatusColor = (status: ToastStatus) => {
  switch (status) {
    case "info":
      return "secondary";
    case "pending":
      return "success";
    default:
      return status;
  }
};

const Toast = ({ message, status, progress = 100 }: ToastProps) => {
  return (
    <div className={classNames(styles.toast)}>
      <Container
        padding="none"
        flexDirection="row"
        alignItems="center"
        customClassNames={classNames(styles.row)}
      >
        <Icon
          nameIcon={mapStatus(status).name}
          propsIcon={{
            size: 24,
            color: `var(--sys-color-${mapStatus(status).color})`,
          }}
          className={classNames(styles.icon, {
            [styles["SPINBOY"]]: status === "pending",
          })}
        />
        <Text>{message}</Text>
      </Container>
      <div
        className={classNames(styles.progressBar, {
          [styles["LOADBOY"]]: status === "pending",
        })}
        style={{
          width:
            status !== "pending"
              ? (300 * (progress > 100 ? 100 : progress < 0 ? 0 : progress)) /
                100
              : 100,
          boxShadow: `0px -1px 75px 5px var(--sys-color-${mapStatusColor(
            status
          )})-light`,
          backgroundColor: `var(--sys-color-${mapStatusColor(status)})`,
        }}
      />
    </div>
  );
};

export default Toast;
