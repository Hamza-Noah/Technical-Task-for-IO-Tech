import { useState, useEffect } from "react";
import api from "../services/api-client";

export interface Item {
  id: number;
  title: string;
  body: string;
}

const useItems = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await api.get<Item[]>("/posts");
        setItems(response.data.slice(0, 10));
        setLoading(false);
      } catch (error) {
        setError("Error fetching items");
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  const addItem = async (newItem: Omit<Item, "id">) => {
    try {
      const response = await api.post<Item>("/posts", newItem);
      setItems((prev) => [response.data, ...prev]);
    } catch (error) {
      console.error("Error adding item", error);
    }
  };

  const deleteItem = async (id: number) => {
    try {
      await api.delete(`/posts/${id}`);
      setItems((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error deleting item", error);
    }
  };

  const editItem = (
    id: number,
    updatedItem: { title: string; body: string }
  ) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, ...updatedItem } : item
      )
    );
  };
  return { items, addItem, deleteItem, editItem, loading, error };
};

export default useItems;
