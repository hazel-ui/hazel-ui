import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function Toast() {
  return (
    <ToastContainer
      autoClose={3000}
      hideProgressBar={true}
      position="bottom-center"
    />
  );
}

export function showToast(message: string = "No message specified") {
  toast.dark(message);
}
