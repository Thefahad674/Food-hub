import React, { useContext } from "react";
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
  const { cate, setCate, input, showCart, setShowCart } = useContext(dataContext);

  const filter = (category) => {
    if (category === "All") {
      setCate(food_items);
    } else {
      setCate(food_items.filter((item) => item.food_category === category));
    }
  };

  const items = useSelector((state) => state.cart);
  const subtotal = items.reduce((total, item) => total + item.qty * item.price, 0);
  const deliveryFee = 20;
  const taxes = Math.round((subtotal * 2) / 100);
  const total = Math.floor(subtotal + deliveryFee + taxes);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-green-100 via-white to-slate-100">
      <Nav />

      {!input && (
        <>
          {/* Mobile: compact horizontal category bar */}
          <div className="sm:hidden flex gap-2 overflow-x-auto px-2 py-2 bg-white shadow-inner">
            {Categories.map((item) => (
              <button
                key={item.name}
                onClick={() => filter(item.name)}
                className="flex-shrink-0 px-3 py-1 bg-green-500 text-white rounded-full text-xs font-medium whitespace-nowrap hover:bg-green-600 transition-all"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Desktop: category grid */}
          <div className="hidden sm:flex flex-wrap justify-center gap-6 p-6">
            {Categories.map((item) => (
              <div
                key={item.name}
                onClick={() => filter(item.name)}
                className="w-[140px] h-[140px] bg-gradient-to-tr from-green-400 to-green-600 text-white rounded-xl shadow-xl flex flex-col justify-center items-center cursor-pointer transform hover:scale-105 transition-transform duration-300 hover:shadow-2xl"
              >
                <div className="text-4xl">{item.image}</div>
                <p className="mt-4 font-semibold text-center">{item.name}</p>
              </div>
            ))}
          </div>
        </>
      )}

      {cate.length > 0 ? (
        <Cards cate={cate} />
      ) : (
        <div className="text-center py-20 text-green-600 text-2xl font-bold">
          🍽️ Dish not found!
        </div>
      )}

      {/* Slide-in Cart */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[80vw] md:w-[60vw] lg:w-[40vw] z-50 transition-transform duration-500 ${
          showCart ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-full backdrop-blur-md bg-white/70 shadow-2xl rounded-l-xl flex flex-col">
          <header className="flex justify-between items-center px-6 py-4 border-b border-gray-300">
            <h2 className="text-xl font-bold text-green-700">🛒 Your Cart</h2>
            <ImCross
              className="text-gray-600 hover:text-red-600 cursor-pointer"
              onClick={() => setShowCart(false)}
            />
          </header>

          {items.length === 0 ? (
            <div className="flex-grow flex items-center justify-center text-green-600 text-xl font-semibold">
              Your cart is empty 🧺
            </div>
          ) : (
            <div className="flex-grow p-4 overflow-y-auto">
              {items.map((item) => (
                <Cards2 key={item.id} {...item} />
              ))}

              <div className="mt-6 border-t pt-4 text-gray-700">
                <div className="flex justify-between py-2 text-lg">
                  <span>Subtotal</span>
                  <span className="text-green-600 font-semibold">₹ {subtotal}</span>
                </div>
                <div className="flex justify-between py-2 text-lg">
                  <span>Delivery</span>
                  <span className="text-green-600 font-semibold">₹ {deliveryFee}</span>
                </div>
                <div className="flex justify-between py-2 text-lg">
                  <span>Taxes (2%)</span>
                  <span className="text-green-600 font-semibold">₹ {taxes}</span>
                </div>
                <div className="flex justify-between items-center pt-4 mt-4 border-t-2 text-xl font-bold">
                  <span>Total</span>
                  <span className="text-green-700">₹ {total}/-</span>
                </div>
              </div>

              <div className="mt-6">
                <button
                  className="w-full py-3 bg-gradient-to-r from-green-500 to-green-700 text-white font-bold rounded-full shadow hover:shadow-lg hover:from-green-600 hover:to-green-800 transition-all"
                  onClick={() => toast.success("✅ Order Placed")}
                >
                  Place Order
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
