import React from 'react';
import { motion } from 'framer-motion';
import { GiChefToque, GiMeal, GiFarmTractor, GiSaucepan } from 'react-icons/gi';
import { FaLeaf, FaAward } from 'react-icons/fa';
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const AboutPage = () => {
  const navigate = useNavigate()
 
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
    <section id='about' className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100">
      
      {/* Hero Section */}
      <section className="relative h-64 md:h-96 flex items-center justify-center bg-gradient-to-r from-amber-400 to-amber-600 text-white overflow-hidden">
        
      
        <motion.div 
          className="container mx-auto px-4 z-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Story</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">
            Passion for food, love for community
          </p>
        </motion.div>
      </section>

      {/* Our Story */}
      <section className="container mx-auto px-4 py-16">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-amber-800 mb-8"
            variants={itemVariants}
            >
            Delicious Bites Journey
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-700 mb-8"
            variants={itemVariants}
            >
            Founded in 2015, Delicious Bites began as a small family restaurant with a simple mission: to serve 
            authentic, flavorful dishes made with locally-sourced ingredients. What started as a humble kitchen 
            has grown into a beloved culinary destination, thanks to our amazing customers and dedicated team.
          </motion.p>
          <motion.p 
            className="text-lg text-gray-700"
            variants={itemVariants}
            >
            Today, we continue to honor our roots while innovating with seasonal ingredients and modern techniques, 
            always staying true to our commitment to quality and sustainability.
          </motion.p>
        </motion.div>
      </section>

      {/* Values Section */}
      <section className="bg-amber-50 py-16">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-amber-800 text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            >
            Our Core Values
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <GiChefToque className="text-4xl text-amber-600" />,
                title: "Culinary Excellence",
                desc: "Our chefs craft each dish with precision and creativity"
              },
              {
                icon: <FaLeaf className="text-4xl text-amber-600" />,
                title: "Fresh Ingredients",
                desc: "We source seasonal produce from local farms"
              },
              {
                icon: <GiFarmTractor className="text-4xl text-amber-600" />,
                title: "Sustainability",
                desc: "Committed to eco-friendly practices from farm to table"
              },
              {
                icon: <FaAward className="text-4xl text-amber-600" />,
                title: "Quality Service",
                desc: "Exceptional dining experiences for every guest"
              }
            ].map((item, index) => (
              <motion.div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-amber-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.h2 
          className="text-3xl font-bold text-amber-800 text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          >
          Meet Our Chef
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="flex flex-col md:flex-row gap-8 items-center bg-white rounded-xl shadow-sm overflow-hidden"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            >
            <div className="md:w-1/3">
              <img 
                src="https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                alt="Head Chef" 
                className="w-full h-64 md:h-full object-cover"
                />
            </div>
            <div className="md:w-2/3 p-6">
              <h3 className="text-2xl font-bold text-amber-800 mb-2">Chef Rajesh Kumar</h3>
              <p className="text-amber-600 font-medium mb-4">Head Chef & Founder</p>
              <p className="text-gray-700 mb-4">
                With over 15 years of culinary experience spanning three continents, Chef Rajesh brings 
                a unique fusion of traditional techniques and innovative flavors to our kitchen.
              </p>
              <p className="text-gray-700">
                "My philosophy is simple - respect the ingredients, honor the traditions, and always cook with passion."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-amber-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-3xl font-bold mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            >
            Ready to Experience Our Food?
          </motion.h2>
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
            >
            <button className="bg-white text-amber-700 px-8 py-3 rounded-full font-medium hover:bg-amber-50 transition duration-300">
              View Our Menu
            </button>
            <button className="border-2 border-white px-8 py-3 rounded-full font-medium hover:bg-white/10 transition duration-300">
              Make a Reservation
            </button>
          </motion.div>
        </div>
      </section>
    </section>
            </>
  );
};

export default AboutPage;