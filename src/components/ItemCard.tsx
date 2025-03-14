import React from "react";

interface Item {
  id: number;
  title: string;
  body: string;
}

interface ItemCardProps {
  item: Item;
  deleteItem: (id: number) => void;
}

const ItemCard: React.FC<ItemCardProps> = ({ item, deleteItem }) => {
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
        onClick={() => deleteItem(item.id)}
        className="mt-4 px-3 py-1 bg-red-700 text-white rounded-lg hover:bg-red-600 transition-all"
      >
        Delete
      </button>
    </div>
  );
};

export default ItemCard;
