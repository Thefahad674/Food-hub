import React, { useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LuSoup } from "react-icons/lu";
import { AddItem } from "../redux/cartSlice";
import { toast } from "react-toastify";
import { food_items } from "../food";
import { IoIosArrowBack } from "react-icons/io";
import { LuCoffee } from "react-icons/lu";
import {
  GiMeal,
  GiChickenOven,
  GiForkKnifeSpoon,
  GiSaucepan,
  GiShoppingCart,
} from "react-icons/gi";
import {
  FaHamburger,
  FaPizzaSlice,
  FaCartPlus,
} from "react-icons/fa";
import { PiLeafLight } from "react-icons/pi";
import { dataContext } from "../context/UserContext";
import { RxCross1 } from "react-icons/rx";
import Cards2 from "./Cards2";

const MenuPage = () => {
  const { showCart, setShowCart } =
    useContext(dataContext);
  const items = useSelector((state) => state.cart);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const dispatch = useDispatch();
  const navigate = useNavigate();

 
  const categories = [
    { name: "All", icon: <GiMeal className="text-3xl" /> },
    { name: "Breakfast", icon: <LuCoffee  className="text-3xl" /> },
    { name: "Soups", icon: <LuSoup  className="text-3xl" /> },
    { name: "Pasta", icon: <GiSaucepan className="text-3xl" /> },
    { name: "Main_Course", icon: <GiForkKnifeSpoon className="text-3xl" /> },
    { name: "Pizza", icon: < FaPizzaSlice className="text-3xl" /> },
    { name: "Burgers", icon: <FaHamburger className="text-3xl" /> },
  ];

  const foodItems = {
    All: food_items,
    Breakfast: food_items.filter((item) => item.food_category === "Breakfast"),
    Soups: food_items.filter((item) => item.food_category === "Soups"),
    Pasta: food_items.filter((item) => item.food_category === "Pasta"),
    Main_Course: food_items.filter((item) => item.food_category === "Main-course"),
    Pizza: food_items.filter((item) => item.food_category === "Pizza"),
    Burgers: food_items.filter((item) => item.food_category === "Burger"),
  };

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
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

 
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

  const subtotal = items.reduce(
    (total, item) => total + item.qty * item.price,
    0
  );
  const deliveryFee = 20;
  const taxes = Math.round((subtotal * 2) / 100);
  const total = Math.floor(subtotal + deliveryFee + taxes);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100">
       
        <section id="menu-categories" className="container mx-auto px-4 py-8">
          <div className="flex flex-row justify-between">
            <IoIosArrowBack
              className="text-amber-800 text-3xl font-bold cursor-pointer transition-all duration-300 hover:text-amber-600 hover:scale-110"
              onClick={() => navigate("/")}
            />

            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                className="w-10 h-10 flex justify-center items-center rounded-full bg-amber-50 text-amber-600"
                onClick={() => setShowCart(true)}
              >
                <GiShoppingCart className="h-8 w-8" />
                {items.length > 0 && (
                  <motion.span
                    className="absolute -top-1 -right-1 bg-amber-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring" }}
                  >
                    {items.length}
                  </motion.span>
                )}
              </button>
            </motion.div>
          </div>
          <div className="flex flex-row justify-center items-center gap-50">
            <h1 className="text-3xl font-bold text-amber-800 mb-8 text-center">
              Our Menu
            </h1>
          </div>

          {/* Mobile Categories */}
          <div className=" flex flex-row flex-wrap justify-center items-center overflow-none gap-3 pb-4 mb-8">
            {categories.map((category) => (
              <motion.button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`flex-shrink-0 px-4 py-2 rounded-full flex items-center gap-2 ${
                  selectedCategory === category.name
                    ? "bg-amber-500 text-white"
                    : "bg-white text-amber-700 border border-amber-200"
                }`}
                whileTap={{ scale: 0.95 }}
              >
                <span>{category.icon}</span>
                <span>{category.name}</span>
              </motion.button>
            ))}
          </div>

          {/* Display Items for Selected Category */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-amber-700 mb-6">
              {selectedCategory} Items
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {foodItems[selectedCategory]?.map((item, index) => (
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
          </div>
        </section>
        <AnimatePresence>
          {showCart && (
            <motion.div
              className="fixed top-0 right-0 h-full w-full sm:w-[80vw] md:w-[60vw] lg:w-[40vw] z-50"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30 }}
            >
              <div className="h-full backdrop-blur-md bg-white/90 shadow-2xl rounded-l-xl flex flex-col border-l-2 border-amber-300">
                <header className="flex justify-between items-center px-6 py-4 border-b border-amber-200 bg-gradient-to-r from-amber-100 to-amber-50">
                  <h2 className="text-xl font-bold text-amber-700 flex items-center gap-2">
                    <GiShoppingCart className="text-amber-800 text-2xl" /> Your
                    Cart
                  </h2>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setShowCart(false)}
                  >
                    <RxCross1 className="text-amber-600 hover:text-red-600" />
                  </motion.button>
                </header>

                {items.length === 0 ? (
                  <motion.div
                    className="flex-grow flex flex-col items-center justify-center text-amber-500 p-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <GiShoppingCart className="text-6xl mb-4 opacity-30" />
                    <p className="text-xl font-semibold">Your cart is empty</p>
                    <p className="text-amber-400 mt-2">
                      Add some delicious items!
                    </p>
                  </motion.div>
                ) : (
                  <div className="flex-grow p-4 overflow-y-auto">
                    <AnimatePresence>
                      {items.map((item) => (
                        <motion.div
                          key={item.id}
                          initial={{ opacity: 0, x: 50 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 50 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Cards2 {...item} />
                        </motion.div>
                      ))}
                    </AnimatePresence>

                    <div className="mt-6 border-t border-amber-200 pt-4 text-amber-800">
                      <div className="flex justify-between py-2 text-lg">
                        <span>Subtotal</span>
                        <span className="text-amber-600 font-semibold">
                          ₹ {subtotal}
                        </span>
                      </div>
                      <div className="flex justify-between py-2 text-lg">
                        <span>Delivery</span>
                        <span className="text-amber-600 font-semibold">
                          ₹ {deliveryFee}
                        </span>
                      </div>
                      <div className="flex justify-between py-2 text-lg">
                        <span>Taxes (2%)</span>
                        <span className="text-amber-600 font-semibold">
                          ₹ {taxes}
                        </span>
                      </div>
                      <div className="flex justify-between items-center pt-4 mt-4 border-t-2 border-amber-300 text-xl font-bold">
                        <span>Total</span>
                        <span className="text-amber-700">₹ {total}/-</span>
                      </div>
                    </div>

                    <motion.div className="mt-6" whileHover={{ scale: 1.01 }}>
                      <button
                        className="w-full py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold rounded-full shadow-lg hover:shadow-amber-300/50 hover:from-amber-600 hover:to-amber-700 transition-all"
                        onClick={() => {
                          toast.success("🍽️ Order Placed Successfully!", {
                            position: "top-center",
                            autoClose: 3000,
                            hideProgressBar: true,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                          });
                          setShowCart(false);
                        }}
                      >
                        Place Order
                      </button>
                    </motion.div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default MenuPage;
