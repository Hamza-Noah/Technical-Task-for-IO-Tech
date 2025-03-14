import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DeleteModal from "./DeleteModal";

interface Item {
  id: number;
  title: string;
  body: string;
}

interface Props {
  item: Item;
  deleteItem: (id: number) => void;
}

const ItemCard = ({ item, deleteItem }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = () => {
    deleteItem(item.id);
    setIsModalOpen(false);
    toast.success("Item deleted successfully!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
      delay: 1000,
    });
  };

  return (
    <div className="flex flex-col justify-between p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <div>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {item.title}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {item.body}
        </p>
      </div>
      <button
        onClick={() => setIsModalOpen(true)}
        className="mt-4 px-3 py-1 bg-red-700 text-white rounded-lg hover:bg-red-600 transition-all"
      >
        Delete
      </button>
      <DeleteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleDelete}
      />
    </div>
  );
};

export default ItemCard;
