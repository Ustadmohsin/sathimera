import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Footer = () => {
  return (
    <footer className="bg-gray-300 text-black py-10 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {/* Column 1: Bureau Info */}
          <motion.div
            className="text-center md:text-left"
            variants={fadeInUp}
          >
            <h2 className="text-xl font-bold mb-3">IQRA MARRIAGE BUREAU</h2>
            <p className="text-sm text-gray-700 leading-relaxed max-w-xs md:max-w-sm mx-auto md:mx-0">
              Now we have started this online matchmaking. We provide valuable
              information, advice, and counselling services to help you choose
              your better half. Our Association is one of the oldest and most
              successful in India and abroad.
            </p>
          </motion.div>

          {/* Column 2: About Us */}
          <motion.div
            className="text-center md:text-left"
            variants={fadeInUp}
          >
            <h2 className="text-lg font-semibold mb-4">
              About Us
            </h2>
            <ul className="space-y-2">
              <li>
                <a
                  href="/aboutus"
                  className="text-sm text-gray-600 hover:text-black transition duration-300"
                >
                  About Us &raquo;
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-sm text-gray-600 hover:text-black transition duration-300"
                >
                  Contact Us &raquo;
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Column 3: Information */}
          <motion.div
            className="text-center md:text-left"
            variants={fadeInUp}
          >
            <h2 className="text-lg font-semibold mb-4">
              Information
            </h2>
            <ul className="space-y-2 mb-4">
              <li>
                <a
                  href="/membership"
                  className="text-sm text-gray-600 hover:text-black transition duration-300"
                >
                  Payment Option
                </a>
              </li>
              <li>
                <a
                  href="#success-stories"
                  className="text-sm text-gray-600 hover:text-black transition duration-300"
                >
                  Success Stories
                </a>
              </li>
              <li>
                <a
                  href="#privacy"
                  className="text-sm text-gray-600 hover:text-black transition duration-300"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>

            {/* Google Play Badge */}
            <div className="flex justify-center md:justify-start">
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Get it on Google Play"
                  className="w-36 hover:scale-105 transition-transform duration-300"
                />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-gray-400 mt-10 pt-4">
          <motion.p
            className="text-center text-sm text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            © 2025{" "}
            <a
              href="https://sathimera.com"
              className="hover:text-gray-800 transition-colors"
            >
              sathimera.com
            </a>{" "}
            - All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
