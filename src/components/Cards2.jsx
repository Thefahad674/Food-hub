 import React from 'react';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { DecreamentQty, IncreamentQty, RemoveItem } from '../redux/cartSlice';
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiMinus, FiPlus } from "react-icons/fi";

const Cards2 = ({ name, id, price, image, qty }) => {
  const dispatch = useDispatch();

  return (
    <motion.div 
      className="w-full bg-white rounded-lg shadow-sm hover:shadow-md p-4 mb-4 flex justify-between items-center border border-gray-100 transition-all duration-300"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
    >
      {/* Left - Image + Info */}
      <div className="flex items-center gap-4 flex-1 min-w-0">
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-md border border-gray-200"
          />
          {qty > 1 && (
            <div className="absolute -top-2 -right-2 bg-amber-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
              {qty}
            </div>
          )}
        </div>

        <div className="flex flex-col justify-center min-w-0">
          <h3 className="text-sm sm:text-base font-medium text-gray-800 truncate">
            {name}
          </h3>
          <span className="text-amber-600 font-semibold text-sm sm:text-base mt-1">
            ₹{price * qty}
          </span>
          
          {/* Quantity Controls */}
          <div className="mt-2 flex items-center gap-1">
            <motion.button
              onClick={() => qty > 1 && dispatch(DecreamentQty(id))}
              className="p-1 sm:p-2 bg-gray-50 text-gray-600 hover:bg-gray-100 rounded-full"
              whileTap={{ scale: 0.9 }}
              disabled={qty <= 1}
            >
              <FiMinus className="text-sm" />
            </motion.button>
            
            <span className="px-3 text-sm sm:text-base font-medium text-gray-700">
              {qty}
            </span>
            
            <motion.button
              onClick={() => dispatch(IncreamentQty(id))}
              className="p-1 sm:p-2 bg-gray-50 text-gray-600 hover:bg-gray-100 rounded-full"
              whileTap={{ scale: 0.9 }}
            >
              <FiPlus className="text-sm" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Right - Delete Button */}
      <motion.button
        onClick={() => dispatch(RemoveItem(id))}
        className="ml-4 p-2 text-gray-400 hover:text-red-500 transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Remove item"
      >
        <RiDeleteBin6Line className="text-xl sm:text-2xl" />
      </motion.button>
    </motion.div>
  );
};

export default Cards2;