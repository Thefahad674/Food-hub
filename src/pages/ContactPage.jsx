import { motion } from "framer-motion";
import {
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { GiKnifeFork } from "react-icons/gi";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const ContactPage = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message sent successfully!", {
      position: "bottom-right",
      autoClose: 3000,
    });
    setFormData({ name: "", email: "", message: "" });
  };

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div id="contact"
      className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100 py-12 px-4 sm:px-6 lg:px-8"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            className="flex justify-center mb-4"
            whileHover={{ rotate: 15 }}
          >
            <GiKnifeFork className="text-amber-600 text-5xl" />
          </motion.div>
          <h1 className="text-4xl font-bold text-amber-800 mb-3">Contact Us</h1>
          <p className="text-lg text-amber-600 max-w-2xl mx-auto">
            Have questions or feedback? We'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            className="bg-white rounded-xl shadow-lg p-8"
            variants={fadeIn}
          >
            <h2 className="text-2xl font-bold text-amber-700 mb-6">
              Send us a message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-amber-600 mb-1"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-amber-200 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-amber-600 mb-1"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-amber-200 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-amber-600 mb-1"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-amber-200 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
                  required
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info & Map */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              variants={fadeIn}
              transition={{ staggerChildren: 0.1 }}
            >
              {[
                {
                  icon: <FaMapMarkerAlt className="text-2xl text-amber-600" />,
                  title: "Our Location",
                  content: "123 Food Street, Culinary City, 560001",
                },
                {
                  icon: <FaPhone className="text-2xl text-amber-600" />,
                  title: "Phone Number",
                  content: "+1 (555) 123-4567",
                },
                {
                  icon: <FaEnvelope className="text-2xl text-amber-600" />,
                  title: "Email Address",
                  content: "hello@deliciousbites.com",
                },
                {
                  icon: <GiKnifeFork className="text-2xl text-amber-600" />,
                  title: "Opening Hours",
                  content: "Mon-Sun: 10:00 AM - 10:00 PM",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md border border-amber-100"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-amber-50 rounded-full">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-amber-700">{item.title}</h3>
                      <p className="text-gray-600 mt-1">{item.content}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Map */}
            <motion.div
              className="overflow-hidden rounded-xl shadow-lg border-2 border-amber-200"
              variants={fadeIn}
            >
              <iframe
                title="Delicious Bites Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.5660606829646!2d77.2073143150827!3d28.61390198242642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2a5f239f3f9%3A0x4a01f8b9a7c4d6a5!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1628687227899!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </motion.div>

            {/* Social Media */}
            <motion.div
              className="flex justify-center space-x-6 pt-4"
              variants={fadeIn}
            >
              {[
                { icon: <FaFacebook />, color: "text-blue-600" },
                { icon: <FaInstagram />, color: "text-pink-600" },
                { icon: <FaTwitter />, color: "text-blue-400" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className={`text-3xl ${social.color} hover:scale-110 transition-transform`}
                  whileHover={{ y: -5 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactPage;
