import React from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { AddItem } from "../redux/cartSlice";
import { toast } from "react-toastify";
import { GiChickenOven, GiMeal } from "react-icons/gi";
import { PiLeafLight } from "react-icons/pi";
import { FaCartPlus } from "react-icons/fa";

const Cards = ({ cate }) => {
  const dispatch = useDispatch();

  const handleAdd = (item) => {
    dispatch(
      AddItem({
        id: item.id,
        name: item.food_name,
        price: item.price,
        qty: item.food_quantity,
        image: item.food_image,
      })
    );
    toast.success("🍽️ Added to Cart", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      y: -5,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
    },
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 py-6 sm:px-6 md:px-10 bg-gradient-to-b from-amber-50 to-amber-100">
      {cate.map((item, index) => (
        <motion.div
          key={index}
          className="bg-white rounded-xl shadow-md overflow-hidden border border-amber-100"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          transition={{ type: "spring", stiffness: 300 }}
        >
          {/* Food Image */}
          <motion.div
            className="relative h-48 overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={item.food_image}
              alt={item.food_name}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-2 right-2 bg-white/90 rounded-full p-1 shadow">
              {item.food_type === "non_veg" ? (
                <GiChickenOven className="text-red-500 text-xl" />
              ) : (
                <PiLeafLight className="text-green-500 text-xl" />
              )}
            </div>
          </motion.div>

          {/* Food Details */}
          <div className="p-4 flex flex-col space-y-4">
            <div>
              <h2 className="text-lg font-bold text-amber-800 truncate">
                {item.food_name}
              </h2>

              <div className="flex justify-between items-center mt-2">
                <span className="text-amber-600 font-bold text-lg">
                  ₹{item.price}
                </span>
                <span
                  className={`text-xs font-medium px-2 py-1 rounded-full ${
                    item.food_type === "non_veg"
                      ? "bg-red-100 text-red-700"
                      : "bg-green-100 text-green-700"
                  }`}
                >
                  {item.food_type.replace("_", " ")}
                </span>
              </div>
            </div>

            {/* Add to Cart Button */}
            <motion.button
              onClick={() => handleAdd(item)}
              className="w-full py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-lg shadow hover:shadow-lg flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaCartPlus className="text-lg" />
              <span>Add to Cart</span>
            </motion.button>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Cards;
