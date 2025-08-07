import { useNavigate } from "react-router-dom";
import Cards2 from "../components/Cards2";
import Header from "../components/Header";
import Hero from "../components/Hero";
import { TestimonialCard } from "../components/TestimonialCard";
import { motion, AnimatePresence } from "framer-motion";
import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";
import Login from "../components/Login";
import { useContext, useState } from "react";
import { dataContext } from "../context/UserContext";
import Footer from "../components/Footer";

const Home = () => {
  const {showLogin} = useContext(dataContext)

  const navigate = useNavigate();
  const featuredDishes = [
    {
      id: 1,
      name: "Truffle Pasta",
      price: "219",
      desc: "Creamy sauce with wild mushrooms",
      image: "/image6.avif",
    },
    {
      id: 2,
      name: "Chicken Burger",
      price: "199",
      desc: "With lemon butter sauce",
      image: "/image12.jpg",
    },
    {
      id: 3,
      name: "Garlic Bread",
      price: "199",
      desc: "With lemon butter sauce",
      image: "/image19.avif",
    },
    {
      id: 3,
      name: "Pancake",
      price: "199",
      desc: "",
      image: "/image1.avif",
    },
    
  ];

  const testimonials = [
    { id: 1, quote: "Best food in town!", author: "Jane D.", rating: 5 },
    { id: 2, quote: "A must-visit!", author: "Mike T.", rating: 4 },
  ];

  return (
    <>
    {showLogin ? <Login /> : 
    <div className="min-h-screen w-full bg-gradient-to-br from-amber-50 via-amber-100 to-amber-200">
      <Header />
      <Hero />

      <section className="py-20 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Customer's <span className="text-amber-600">Favourites</span>
            </h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
          </div>

          {/* Dishes Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
            {featuredDishes.map((dish) => (
              <motion.div
              key={dish.id}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                {/* Dish Image */}
                <div className="h-64 overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Dish Badge */}
                {dish.isNew && (
                  <div className="absolute top-4 right-4 bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    NEW
                  </div>
                )}

                {/* Dish Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {dish.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{dish.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-amber-600">
                      <span>Starting from </span>
                      ₹{dish.price}/- Only
                    </span>
                    
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center">
            <motion.button
              onClick={() => navigate("/menu")}
              className="relative px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              >
              <span className="relative z-10 text-lg flex items-center justify-center gap-2">
                Explore Full Menu{" "}
                {/* <FiArrowRight className="transition-transform group-hover:translate-x-1" /> */}
              </span>
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0 }}
                />
            </motion.button>
          </div>
        </div>
      </section>
      <AboutPage id='aboutpage' />
      <ContactPage id='contactpage' />
      <Footer />
    </div>}
                </>
  );
};

export default Home;
