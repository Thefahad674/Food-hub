import { Link, useLocation } from "react-router-dom";
import { FaSearch, FaBars, FaTimes, FaUser } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { dataContext } from "../context/UserContext";
import { GiShoppingCart } from "react-icons/gi";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const { input, setInput, food_items, setCate, showCart, setShowCart } =
    useContext(dataContext);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const items = useSelector((state) => state.cart);
  const location = useLocation();

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Search filtering
  useEffect(() => {
    const newList =
      food_items?.filter((item) =>
        item.food_name.toLowerCase().includes(input.toLowerCase())
      ) || [];
    setCate(newList);
  }, [input, food_items, setCate]);

  return (
    <motion.header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-white/90 backdrop-blur-sm"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="container mx-auto px-4 py-3">
        {/* Main Navigation Row */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-4"
            whileHover={{ scale: 1.05 }}
          >
            <button
              className="md:hidden text-gray-800"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <FaTimes className="h-6 w-6 text-amber-600" />
              ) : (
                <FaBars className="h-6 w-6 text-amber-600" />
              )}
            </button>

            <Link to="/" className="flex items-center text-xl font-bold">
              <motion.div
                className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center mr-2"
                whileHover={{ rotate: 15 }}
              >
                <GiForkKnifeSpoon className="text-white text-xl" />
              </motion.div>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-400">
                Delicious Bites
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation and Search */}
          <div className="hidden md:flex items-center flex-1 mx-8">
            {/* Desktop Search */}
            <motion.div
              className="flex-1 max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <form
                className="h-12 bg-white flex items-center px-4 gap-3 rounded-full shadow-sm border border-amber-100 focus-within:ring-2 focus-within:ring-amber-300 focus-within:border-amber-300 transition-all"
                onSubmit={(e) => e.preventDefault()}
              >
                <FaSearch className="text-amber-500 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search our menu..."
                  className="w-full outline-none text-base placeholder-amber-400/70"
                  onChange={(e) => setInput(e.target.value)}
                  value={input}
                />
              </form>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="ml-8">
              <div className="flex space-x-1">
                {[
                  { path: "/", name: "Home" },
                  { path: "/menu", name: "Menu" },
                  { path: "/about", name: "About" },
                  { path: "contact", name: "Contact" },
                ].map((item) => (
                  <motion.div key={item.path} whileHover={{ scale: 1.05 }}>
                    <Link
                      to={item.path}
                      className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                        location.pathname === item.path
                          ? "bg-amber-100 text-amber-700"
                          : "text-gray-700 hover:bg-amber-50"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </nav>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center gap-4">
            {/* Mobile Search Toggle */}
            <motion.button
              className="md:hidden text-gray-800 relative"
              onClick={() => setShowSearch(!showSearch)}
              whileTap={{ scale: 0.9 }}
            >
              <FaSearch className="h-5 w-5 text-amber-600" />
              {input && (
                <motion.span
                  className="absolute -top-1 -right-1 bg-amber-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                >
                  {input.length > 0 ? "•" : ""}
                </motion.span>
              )}
            </motion.button>

            {/* User Profile */}
            <motion.button
              className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-amber-50 text-amber-600"
              whileHover={{
                scale: 1.1,
                backgroundColor: "#f59e0b",
                color: "white",
              }}
            >
              <FaUser className="h-4 w-4" />
            </motion.button>

            {/* Cart */}
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                className="w-10 h-10 flex justify-center items-center rounded-full bg-amber-50 text-amber-600"
                onClick={() => setShowCart(true)}
              >
                <GiShoppingCart className="h-5 w-5" />
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
        </div>

        {/* Mobile Search Input */}
        <AnimatePresence>
          {showSearch && (
            <motion.form
              className="md:hidden w-full mt-3"
              onSubmit={(e) => e.preventDefault()}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="h-12 bg-white flex items-center px-4 gap-3 rounded-full shadow-sm border border-amber-100">
                <FaSearch className="text-amber-500 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search menu..."
                  className="w-full outline-none text-base placeholder-amber-400/70"
                  onChange={(e) => setInput(e.target.value)}
                  value={input}
                  autoFocus
                />
              </div>
            </motion.form>
          )}
        </AnimatePresence>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.nav
              className="md:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col space-y-3 mt-4 pb-3 border-b border-amber-100">
                {[
                  { path: "/", name: "Home" },
                  { path: "/menu", name: "Menu" },
                  { path: "/about", name: "About" },
                  { path: "contact", name: "Contact" },
                ].map((item) => (
                  <motion.div key={item.path} whileHover={{ x: 5 }}>
                    <Link
                      to={item.path}
                      className={`flex items-center py-2 px-3 rounded-lg transition-colors ${
                        location.pathname === item.path
                          ? "bg-amber-100 text-amber-700"
                          : "text-gray-700 hover:bg-amber-50"
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className="font-medium">{item.name}</span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;