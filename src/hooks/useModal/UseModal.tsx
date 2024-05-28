import ModalContext from "@/context/ModalContext/ModalContext";
import React, { useContext } from "react";

const UseModal = () => {
  const { modals, setModals } = useContext(ModalContext);
  const openModal = (modal: React.ReactNode) => {
    setModals((prev) => [...prev, modal]);
  };
  const closeModal = () => {
    setModals((prev) => prev.slice(0, prev.length - 1));
  };

  return { modals, openModal, closeModal };
};

export default UseModal;
