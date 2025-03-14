import { toast } from "react-toastify";

const useDeleteItem = () => {
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
      style: { backgroundColor: "#e7000b", color: "#ffffff" },
    });
  };

  return { showSuccessToast };
};

export default useDeleteItem;
