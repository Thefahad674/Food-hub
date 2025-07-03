import React, { useContext, useState } from "react";
import Nav from "../components/Nav";
import Categories from "../Categories";
import { food_items } from "../food";
import Cards from "../components/Cards";
import { dataContext } from "../context/UserContext";
import { ImCross } from "react-icons/im";
import Cards2 from "../components/Cards2";
import { useSelector } from "react-redux";

const Home = () => {

  let {cate, setCate, input, showCart, setShowCart} = useContext(dataContext)

  function filter(category) {
     if(category === "All"){
       setCate(food_items)
      } else {
       let newList = food_items.filter((item)=>( item.food_category === category))
       setCate(newList)
      }
      
  } 

  

  return (
    <div className="bg-slate-200 w-full min-h-[100vh]">
      <Nav />
   {!input ? (
  <div className="flex justify-between items-center p-4 m-4 ">
    {Categories.map((item) => (
      <div
        key={item.name}
        className="flex flex-col justify-center items-center w-[25%] h-[150px] m-1 px-3 bg-white text-green-600 pt-4 shadow-md rounded hover:bg-gray-200 cursor-pointer transition-all duration-200"
        onClick={() => filter(item.name)}
      >
        <div className="text-5xl">{item.image}</div>
        <p className="p-1.5 mt-8 text-black font-semibold">{item.name}</p>
      </div>
    ))}
  </div>
) : null}

<Cards cate={cate} />
      
      <div className={`w-[40vw] h-[100%] fixed top-0 right-0 bg-white shadow-xl transition-all duration-500 ${showCart? "translate-x-0": "translate-x-full"} `}>
        <header className="flex justify-between">
      <span className="p-3 text-green-600 text-xl">
        Order Items
      </span>
      <span className="p-4 text-xl text-gray-500 cursor-pointer hover:text-red-600"
      onClick={()=> setShowCart(false)}><ImCross /></span>
        </header>
        <Cards2 />  
      <div className="flex justify-center items-center">
        <p className="text-green-600 my-30 text-xl">
          Your cart is empty...
        </p>
        </div>    
      </div>
    </div>
  );
};

export default Home;
