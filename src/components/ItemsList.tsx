import useItems from "../hooks/useItems";
import ItemCard from "./ItemCard";
import ItemForm from "./ItemForm";

const ItemList = () => {
  const { items, addItem, deleteItem, editItem, loading, error } = useItems();

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white my-8 text-center">
        Add a new Item
      </h2>
      <ItemForm addItem={addItem} />
      {loading && (
        <div className="flex justify-center items-center h-50">
          <i className="fa-solid fa-spinner fa-spin text-gray-900 dark:text-white fa-6x"></i>
        </div>
      )}
      {error && <p className="text-red-500">{error}</p>}
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white my-8 text-center">
        Items Available
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {items.map((item) => (
          <ItemCard
            key={item.id}
            item={item}
            deleteItem={deleteItem}
            editItem={editItem}
          />
        ))}
      </div>
    </div>
  );
};

export default ItemList;
