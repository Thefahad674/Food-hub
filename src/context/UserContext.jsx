import React, { createContext, useState, useEffect } from "react";
import { food_items } from "../food";
 

export const dataContext = createContext();

function UserContext({ children }) {
  const [input, setInput] = useState("");
  const [cate, setCate] = useState(food_items);
  const [showCart, setShowCart] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  
  useEffect(() => {
    if (input.trim() === "") {
      setCate(food_items);
    } else {
      const newList = food_items.filter((item) =>
        item.food_name.toLowerCase().includes(input.toLowerCase())
      );
      setCate(newList);
    }
  }, [input]);

  const data = {
    setShowLogin,
    showLogin,
    input,
    setInput,
    cate,
    showCart,
    setShowCart,
    setCate,
    food_items,
  };

  return <dataContext.Provider value={data}>{children}</dataContext.Provider>;
}

export default UserContext;
