import { ToastContainer, toast } from "react-toastify";

import { Styles } from "./styles.js";

function Toast() {
  return (
    <Styles>
      <ToastContainer autoClose={3000} hideProgressBar position="bottom-center" />
    </Styles>
  );
}

function showToast(message = "No message specified") {
  toast.dark(message);
}

export { Toast, showToast };
