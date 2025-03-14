import { toast } from "react-toastify";

const useToastNotification = (action: "delete" | "add" | "edit") => {
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
        backgroundColor:
          action == "delete"
            ? "#16A34A"
            : action == "add"
            ? "#364153"
            : "#2b7fff",
        color: "#ffffff",
      },
    });
  };

  return { showSuccessToast };
};

export default useToastNotification;
