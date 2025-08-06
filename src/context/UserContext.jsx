import React, { createContext, useState, useEffect } from "react";
import { food_items } from "../food";
import { useNavigate } from "react-router-dom";

export const dataContext = createContext();

function UserContext({ children }) {
  const [input, setInput] = useState("");
  const [cate, setCate] = useState(food_items);
  const [showCart, setShowCart] = useState(false);

  // Add filtering logic directly in the context
  useEffect(() => {
    if (input.trim() === "") {
      setCate(food_items);
    } else {
      const newList = food_items.filter(item =>
        item.food_name.toLowerCase().includes(input.toLowerCase())
      );
      setCate(newList);
    }
  }, [input]);

  const data = {
    input,
    setInput,
    cate,
    showCart,
    setShowCart,
    setCate,
    food_items
    // Removed setCate from provider since we handle it internally
  };

  return (
    <dataContext.Provider value={data}>
      {children}
    </dataContext.Provider>
  );
}

export default UserContext;