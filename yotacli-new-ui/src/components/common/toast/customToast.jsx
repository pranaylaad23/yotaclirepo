import React from "react";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const customToast = ({ message, autoClose, onClose, type }) => {
  const toastType = type === "error" ? toast.error : toast.success;
  return (
    <ToastContainer position="top-right" transition={Slide} theme="light">
      {toastType(message, {
        autoClose,
        onClose,
        style: { width: "400px", marginTop: "25%", marginLeft: "-30%" },
      })}
    </ToastContainer>
  );
};
