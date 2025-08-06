import React, { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GiMeal, GiShoppingCart } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { FaLeaf, FaHamburger, FaPizzaSlice, FaIceCream } from "react-icons/fa";
import { BiDrink } from "react-icons/bi";
import { dataContext } from "../context/UserContext";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Cards from "../components/Cards";
import Cards2 from "../components/Cards2";


const Home = () => {
  const { cate, setCate, input, showCart, setShowCart } =
    useContext(dataContext);
  const items = useSelector((state) => state.cart);

  // Enhanced categories with matching icons
  const Categories = [
    { name: "All", image: <GiMeal className="text-3xl" /> },
    { name: "Breakfast", image: <FaLeaf className="text-3xl" /> },
    { name: "Lunch", image: <GiMeal className="text-3xl" /> },
    { name: "Dinner", image: <FaHamburger className="text-3xl" /> },
    { name: "Pizza", image: <FaPizzaSlice className="text-3xl" /> },
    { name: "Dessert", image: <FaIceCream className="text-3xl" /> },
    { name: "Drinks", image: <BiDrink className="text-3xl" /> },
  ];

  const filter = (category) => {
    if (category === "All") {
      setCate(food_items);
    } else {
      setCate(food_items.filter((item) => item.food_category === category));
    }
  };

  const subtotal = items.reduce(
    (total, item) => total + item.qty * item.price,
    0
  );
  const deliveryFee = 20;
  const taxes = Math.round((subtotal * 2) / 100);
  const total = Math.floor(subtotal + deliveryFee + taxes);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-amber-50 via-amber-100 to-amber-200">
      <Header />
      <Hero />

      <AnimatePresence>
        {!input && (
          <>
            {/* Mobile: compact horizontal category bar */}
            <motion.div
              className="sm:hidden flex gap-2 overflow-x-auto px-4 py-3 bg-amber-100 shadow-inner"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {Categories.map((item) => (
                <motion.button
                  key={item.name}
                  onClick={() => filter(item.name)}
                  whileTap={{ scale: 0.95 }}
                  className="flex-shrink-0 px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-full text-sm font-medium whitespace-nowrap hover:from-amber-600 hover:to-amber-700 transition-all shadow-md"
                >
                  {item.name}
                </motion.button>
              ))}
            </motion.div>

            {/* Desktop: category grid */}
          </>
        )}
      </AnimatePresence>

      {/* Slide-in Cart */}
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
                  <GiShoppingCart className="text-amber-600" /> Your Cart
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
                          hideProgressBar: false,
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
  );
};

export default Home;
