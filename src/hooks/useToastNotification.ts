import { toast } from "react-toastify";

const useToastNotification = (action: "delete" | "add") => {
  const showSuccessToast = (message: string) => {
    toast.success(message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
      delay: 1000,
      style: {
        backgroundColor: action == "delete" ? "#16A34A " : "#364153",
        color: "#ffffff",
      },
    });
  };

  return { showSuccessToast };
};

export default useToastNotification;
