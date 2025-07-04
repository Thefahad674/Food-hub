 import React, { useContext, useState } from "react";
import Nav from "../components/Nav";
import Categories from "../Categories";
import { food_items } from "../food";
import Cards from "../components/Cards";
import { dataContext } from "../context/UserContext";
import { ImCross } from "react-icons/im";
import Cards2 from "../components/Cards2";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const Home = () => {
  let { cate, setCate, input, showCart, setShowCart } = useContext(dataContext);

  function filter(category) {
    if (category === "All") {
      setCate(food_items);
    } else {
      let newList = food_items.filter(
        (item) => item.food_category === category
      );
      setCate(newList);
    }
  }

  let items = useSelector((state) => state.cart);

  let subtotal = items.reduce(
    (total, item) => total + item.qty * item.price,
    0
  );

  let deliveryFee = 20;
  let taxes = Math.round((subtotal * 2) / 100);
  let total = Math.floor(subtotal + deliveryFee + taxes);

  return (
    <div className="bg-slate-200 w-full min-h-screen">
      <Nav />

      {!input && (
        <div className="flex flex-wrap justify-center gap-4 p-4">
          {Categories.map((item) => (
            <div
              key={item.name}
              className="flex flex-col justify-center items-center w-full sm:w-[45%] md:w-[30%] lg:w-[20%] h-[150px] px-3 bg-white text-green-600 pt-4 shadow-md rounded hover:bg-gray-200 cursor-pointer transition-all duration-200"
              onClick={() => filter(item.name)}
            >
              <div className="text-4xl sm:text-5xl">{item.image}</div>
              <p className="mt-6 text-black font-semibold text-center">{item.name}</p>
            </div>
          ))}
        </div>
      )}

      {cate.length > 1 ? (
        <Cards cate={cate} />
      ) : (
        <div className="flex flex-col items-center py-20 text-green-600 text-2xl">
          Dish not found !!!
        </div>
      )}

      {/* Slide-in Cart */}
      <div
        className={`w-full sm:w-[80vw] md:w-[60vw] lg:w-[40vw] h-full fixed top-0 right-0 bg-white shadow-2xl transition-all duration-500 overflow-auto z-50 ${
          showCart ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <header className="flex justify-between p-4">
          <span className="text-green-600 text-xl">Order Items</span>
          <span
            className="text-xl text-gray-500 cursor-pointer hover:text-red-600"
            onClick={() => setShowCart(false)}
          >
            <ImCross />
          </span>
        </header>

        {items.length === 0 ? (
          <div className="flex flex-col items-center py-40 text-green-600 text-2xl">
            Your cart is empty
          </div>
        ) : (
          <div>
            <div className="w-full mt-4 flex flex-col gap-4 px-4">
              {items.map((item) => (
                <Cards2
                  key={item.id}
                  name={item.name}
                  price={item.price}
                  image={item.image}
                  id={item.id}
                  qty={item.qty}
                />
              ))}
            </div>

            <div className="w-full border-t-2 border-gray-400 mt-6 p-4 border-b-2">
              <div className="flex justify-between py-2">
                <span className="text-lg text-gray-600 font-semibold">
                  Subtotal
                </span>
                <span className="text-green-400 font-semibold text-lg">
                  Rs. {subtotal}
                </span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-lg text-gray-600 font-semibold">
                  Delivery
                </span>
                <span className="text-green-400 font-semibold text-lg">
                  Rs. {deliveryFee}
                </span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-lg text-gray-600 font-semibold">
                  Taxes @2%
                </span>
                <span className="text-green-400 font-semibold text-lg">
                  Rs. {taxes}
                </span>
              </div>
            </div>

            <div className="flex justify-between items-center px-4 py-3">
              <span className="text-2xl text-gray-600 font-semibold">Total</span>
              <span className="text-green-400 font-semibold text-2xl">
                Rs. {total}/-
              </span>
            </div>

            <div className="flex justify-center mt-4 mb-6">
              <button
                className="w-3/4 sm:w-1/2 h-10 bg-green-500 rounded-3xl text-white hover:bg-green-700 transition-all"
                onClick={() => toast.success("Order Placed")}
              >
                Place Order
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
