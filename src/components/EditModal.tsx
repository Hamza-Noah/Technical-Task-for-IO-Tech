import { useState, useEffect } from "react";
import useToastNotification from "../hooks/useToastNotification";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  editItem: (id: number, updatedItem: { title: string; body: string }) => void;
  item: { id: number; title: string; body: string };
}

const EditModal = ({ isOpen, onClose, editItem, item }: Props) => {
  const [title, setTitle] = useState(item.title);
  const [body, setBody] = useState(item.body);
  const { showSuccessToast } = useToastNotification("edit");

  useEffect(() => {
    document.body.style.overflowY = "hidden";

    if (isOpen) {
      setTitle(item.title);
      setBody(item.body);
    }
  }, [isOpen, item]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    showSuccessToast("Item edited successfully!");
    if (!title.trim() || !body.trim()) return;
    editItem(item.id, { title, body });
    onClose();
    document.body.style.overflowY = "scroll";
  };

  if (!isOpen) {
    document.body.style.overflowY = "scroll";
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60">
      <div className="bg-white rounded-lg shadow-lg p-6 w-200 dark:bg-gray-800">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">
          Edit Item
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div>
            <label className="block text-gray-700 dark:text-white text-sm font-medium mb-1">
              Title
            </label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400 dark:bg-gray-700 dark:text-white"
              placeholder="Enter new title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-gray-700 dark:text-white text-sm font-medium mb-1">
              Body
            </label>
            <textarea
              className="w-full h-50 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400 dark:bg-gray-700 dark:text-white"
              placeholder="Enter new body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              rows={3}
            />
          </div>

          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditModal;
