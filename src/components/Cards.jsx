import React from 'react';
import { useDispatch } from "react-redux";
import { AddItem } from '../redux/cartSlice';
import { toast } from 'react-toastify';
import { GiChickenOven } from "react-icons/gi";
import { PiLeafLight } from "react-icons/pi";

const Cards = ({ cate }) => {
  const dispatch = useDispatch();

  const handleAdd = (item) => {
    dispatch(AddItem({
      id: item.id,
      name: item.food_name,
      price: item.price,
      qty: item.food_quantity,
      image: item.food_image
    }));
    toast.success("✅ Added to Cart");
  };

  return (
    <div className="flex flex-wrap justify-center gap-6 px-4 py-6 sm:px-6 md:px-10 bg-slate-100">
      {cate.map((item, index) => (
        <div
          key={index}
          className="w-full sm:w-[45%] md:w-[30%] lg:w-[22%] bg-white rounded-xl shadow hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-gray-200"
        >
          <img
            src={item.food_image}
            alt={item.food_name}
            className="w-full h-[180px] object-cover rounded-t-xl"
          />

          <div className="p-4 flex flex-col space-y-4">
            <div>
              <h2 className="text-md sm:text-lg font-semibold text-gray-800 truncate">
                {item.food_name}
              </h2>

              <div className="flex justify-between items-center mt-1">
                <span className="text-green-600 font-bold text-sm sm:text-base">₹ {item.price}</span>
                <div className="flex items-center gap-1">
                  {item.food_type === "non_veg" ? (
                    <GiChickenOven className="text-red-500 text-xl" />
                  ) : (
                    <PiLeafLight className="text-green-500 text-xl" />
                  )}
                  <span className={`capitalize font-medium text-xs sm:text-sm ${item.food_type === "non_veg" ? "text-red-600" : "text-green-600"}`}>
                    {item.food_type.replace("_", " ")}
                  </span>
                </div>
              </div>
            </div>

            <button
              onClick={() => handleAdd(item)}
              className="w-full py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold text-sm sm:text-base rounded-full shadow-md hover:shadow-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
