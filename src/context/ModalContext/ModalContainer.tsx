import useModal from "@/hooks/useModal";
import React from "react";

const ModalContainer = () => {
  const { closeModal, modals } = useModal();
  const isModal = modals.length > 0;

  if (!isModal) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 400,
      }}
    >
      {modals.map((modal, index) => {
        return (
          <div
            key={index}
            style={{
              width: "100%",
              height: "100%",
              position: "fixed",
              top: 0,
              left: 0,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                padding: "4px",
                borderRadius: "8px",
                backgroundColor: "var(--sys-color-surface)",
                zIndex: 400 + index * 2 + 1,
              }}
            >
              {modal}
            </div>
            <div
              id="background"
              onClick={closeModal}
              style={{
                zIndex: 400 + index * 2,
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
              }}
            ></div>
          </div>
        );
      })}
    </div>
  );
};

export default ModalContainer;
