import { useState, useEffect } from "react";
import DeleteModal from "./DeleteModal";
import EditModal from "./EditModal";
import useToastNotification from "../hooks/useToastNotification";

interface Item {
  id: number;
  title: string;
  body: string;
}

interface Props {
  item: Item;
  deleteItem: (id: number) => void;
  editItem: (id: number, updatedItem: { title: string; body: string }) => void;
}

const ItemCard = ({ item, deleteItem, editItem }: Props) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const { showSuccessToast } = useToastNotification("delete");

  useEffect(() => {
    const isModalOpen = isEditModalOpen || isDeleteModalOpen;
    document.body.style.overflowY = isModalOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [isEditModalOpen, isDeleteModalOpen]);

  const handleDelete = () => {
    deleteItem(item.id);
    setIsDeleteModalOpen(false);
    showSuccessToast("Item deleted successfully!");
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
      <div className="flex space-x-2 mt-4">
        <button
          onClick={() => setIsEditModalOpen(true)}
          className="w-50 px-3 py-1 bg-blue-700 text-white rounded-lg hover:bg-blue-600 transition-all"
        >
          Edit
        </button>
        <button
          onClick={() => setIsDeleteModalOpen(true)}
          className="w-50 px-3 py-1 bg-red-700 text-white rounded-lg hover:bg-red-600 transition-all"
        >
          Delete
        </button>
      </div>

      <DeleteModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleDelete}
      />

      <EditModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        editItem={editItem}
        item={item}
      />
    </div>
  );
};

export default ItemCard;
