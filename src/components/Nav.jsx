import React, { useContext, useEffect } from "react";
import { MdFastfood } from "react-icons/md";
import { dataContext } from "../context/UserContext";
import { food_items } from "../food";
import { useSelector } from "react-redux";
import Header from "./Header";

const Nav = () => {
   let {input, setInput, cate, setCate} = useContext(dataContext)

 

  return (
    <>
    <Header />
  
    
        </>
  );
};

export default Nav;
