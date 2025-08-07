import { GiForkKnifeSpoon } from "react-icons/gi";
import { FaFacebook, FaInstagram, FaTwitter, FaYelp } from "react-icons/fa";
import {
  MdOutlineDeliveryDining,
  MdOutlineLocationOn,
  MdOutlineSchedule,
} from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Restaurant Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-amber-400 flex items-center gap-2">
              <GiForkKnifeSpoon className="text-amber-400" />
              Delicious Bites
            </h3>
            <p className="text-gray-300">
              Serving authentic flavors with a modern twist since 2010.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-gray-400 hover:text-amber-400 transition-colors"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-amber-400 transition-colors"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-amber-400 transition-colors"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-amber-400 transition-colors"
              >
                <FaYelp size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "Menu", "About", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-amber-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MdOutlineLocationOn
                  className="text-amber-400 mt-1"
                  size={18}
                />
                <p className="text-gray-300">
                  123 Food Street, Culinary City, CC 12345
                </p>
              </div>
              <div className="flex items-center gap-3">
                <MdOutlineDeliveryDining className="text-amber-400" size={18} />
                <p className="text-gray-300">(123) 456-7890</p>
              </div>
              <div className="flex items-center gap-3">
                <MdOutlineSchedule className="text-amber-400" size={18} />
                <p className="text-gray-300">Mon-Sun: 11AM - 10PM</p>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Newsletter</h4>
            <p className="text-gray-300">
              Subscribe for exclusive offers and updates
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded text-gray-800 flex-grow"
                required
              />
              <button
                type="submit"
                className="bg-amber-500 hover:bg-amber-600 px-4 py-2 rounded font-medium transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Delicious Bites. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a
              href="#"
              className="text-gray-400 hover:text-amber-400 text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-amber-400 text-sm transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
