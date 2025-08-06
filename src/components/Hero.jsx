import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { GiCook, GiMeal } from "react-icons/gi";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-amber-100 to-amber-200 overflow-hidden">
      {/* Decorative elements */}
      <motion.div
        className="absolute top-20 left-20 text-amber-300 opacity-20 text-9xl"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <GiCook />
      </motion.div>

      <motion.div
        className="absolute bottom-20 right-20 text-amber-300 opacity-20 text-9xl"
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        <GiMeal />
      </motion.div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-400">
            Delicious Meals Made With Love
          </h1>

          <motion.p
            className="text-xl mb-8 max-w-2xl mx-auto text-amber-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Experience the finest flavors from our kitchen to your table
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Link
              to="/menu"
              className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-full font-medium transition duration-300 shadow-lg hover:shadow-amber-200 flex items-center justify-center gap-2"
            >
              <span>View Menu</span>
              <GiMeal className="inline" />
            </Link>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white hover:bg-amber-50 text-amber-700 px-8 py-3 rounded-full font-medium transition duration-300 shadow-lg hover:shadow-amber-100 border border-amber-200 flex items-center justify-center gap-2"
            >
              <span>Order Now</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              </svg>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scrolling indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-8 h-14 rounded-full border-2 border-amber-400 flex justify-center p-1">
          <motion.div
            className="w-2 h-2 bg-amber-500 rounded-full"
            animate={{ y: [0, 10] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
