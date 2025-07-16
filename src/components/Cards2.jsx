import React from 'react';
import { useDispatch } from 'react-redux';
import { DecreamentQty, IncreamentQty, RemoveItem } from '../redux/cartSlice';
import { RiDeleteBin6Line } from "react-icons/ri";

const Cards2 = ({ name, id, price, image, qty }) => {
  const dispatch = useDispatch();

  return (
    <div className="w-full bg-white rounded-xl shadow p-3 mb-4 flex justify-between items-center">
      {/* Left - Image + Info */}
      <div className="flex items-center gap-4">
        <img
          src={image}
          alt={name}
          className="w-20 h-20 object-cover rounded-md border"
        />

        <div className="flex flex-col justify-between">
          <span className="text-base sm:text-lg font-semibold text-gray-800">{name}</span>

          {/* Quantity Controls */}
          <div className="mt-2 flex items-center border border-green-500 rounded-full overflow-hidden w-fit text-sm">
            <button
              onClick={() => qty > 1 && dispatch(DecreamentQty(id))}
              className="px-3 py-1 bg-white text-green-600 hover:bg-gray-100 font-bold"
            >
              −
            </button>
            <span className="px-4 py-1 bg-gray-100 text-gray-800 font-medium">
              {qty}
            </span>
            <button
              onClick={() => dispatch(IncreamentQty(id))}
              className="px-3 py-1 bg-white text-green-600 hover:bg-gray-100 font-bold"
            >
              +
            </button>
          </div>
        </div>
      </div>

      {/* Right - Price & Delete */}
      <div className="flex flex-col items-end justify-between gap-3 h-full">
        <span className="text-green-600 font-semibold text-lg">₹ {price}</span>
        <RiDeleteBin6Line
          className="text-red-500 text-2xl cursor-pointer hover:text-red-600 transition"
          onClick={() => dispatch(RemoveItem(id))}
        />
      </div>
    </div>
  );
};

export default Cards2;
