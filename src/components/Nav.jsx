import React, { useContext, useEffect } from "react";
import { MdFastfood } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { LuShoppingBag } from "react-icons/lu";
import { dataContext } from "../context/UserContext";
import { food_items } from "../food";
import { useSelector } from "react-redux";

const Nav = () => {
  let {input, setInput, cate, setCate, showCart, setShowCart} = useContext(dataContext)

  useEffect(() => {
   let newList = food_items.filter((item)=> item.food_name.includes(input) || item.food_name.toLowerCase().includes(input))
   setCate(newList)
  }, [input])

  
  let items = useSelector(state => state.cart)

  return (
    <>
    <div className="w-full h-[100px] flex justify-between items-center " >
      <div className="w-[60px] h-[60px] bg-white flex justify-center items-center m-6 rounded-sm text-green-500 shadow-xl ">
        <MdFastfood className="w-[30px] -h-[30px] text-2xl"/>
      </div>
      <form className="w-[70%] h-[60px] bg-white flex items-center px-5 gap-5 rounded-md shadow-md"
      onSubmit={(e)=>e.preventDefault()}>
        <FaSearch className="text-green-500 w-[20px] h-[20px] "/>
        <input type="text" placeholder="Search Items..."
        className="w-[100%] outline-none text-[20px]" 
        onChange={(e)=> setInput(e.target.value)}
        value={input
        }
        /> 
      </form>
      <div className="w-[60px] h-[60px] bg-white flex justify-center items-center m-6 rounded-sm  text-green-500 shadow-xl relative cursor-pointer" 
      onClick={() => setShowCart(true)}
      >
        <span className="absolute top-0 right-2 text-green-500 font-bold">{items.length}</span>
        <LuShoppingBag className="w-[30px] -h-[30px] text-2xl" />
      </div>
    </div>
        </>
  );
};

export default Nav;
