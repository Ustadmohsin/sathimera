// import React from "react";

// const Footer = () => {
//   return (
//     <footer className="bg-gray-300 text-black py-8">
//       <div className="container mx-auto px-4">
//         {/* Grid container for three columns */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {/* Column 1: Bureau Info */}
//           <div className="flex flex-col items-center text-center p-4">
//   {/* <img
//     src="src/assets/iqra-logo_page-0003-removebg-preview.png"
//     alt="IQRA Logo"
//     className="w-32 h-28 mb-1"
//   /> */}
//   <h2 className="text-xl font-semibold mb-2">IQRA MARRIAGE BUREAU</h2>
//   <p className="text-sm leading-relaxed max-w-md text-gray-700">
//     Now we have started this online match making. We provide you the valuable
//     information, advice, and counselling services to choose your better half for
//     the rest of your life. Our Association is the oldest and most successful in
//     India and abroad.
//   </p>
// </div>


//           {/* Column 2: About Us */}
//           <div>
//   <h2 className="text-lg font-semibold mb-4 transition-transform duration-300 hover:scale-105">
//     About Us
//   </h2>
//   <ul className="space-y-2">
//     <li>
//       <a
//         href="/aboutus"
//         className="text-sm text-gray-600 transition-all duration-300 hover:text-black hover:pl-1"
//       >
//         About Us &raquo;
//       </a>
//     </li>
//     <li>
//       <a
//         href="/contact"
//         className="text-sm text-gray-600 transition-all duration-300 hover:text-black hover:pl-1"
//       >
//         Contact Us &raquo;
//       </a>
//     </li>
//   </ul>
// </div>


//           {/* Column 3: Information */}
//           <div>
//   <h2 className="text-lg font-semibold mb-4 transition-transform duration-300 hover:scale-105">
//     Information
//   </h2>
//   <ul className="space-y-2 mb-4">
//     <li>
//       <a
//         href="/membership"
//         className="text-sm text-gray-600 transition-all duration-300 hover:text-black hover:pl-1"
//       >
//         Payment Option
//       </a>
//     </li>
//     <li>
//       <a
//         href="#success-stories"
//         className="text-sm text-gray-600 transition-all duration-300 hover:text-black hover:pl-1"
//       >
//         Success Stories
//       </a>
//     </li>
//     <li>
//       <a
//         href="#privacy"
//         className="text-sm text-gray-600 transition-all duration-300 hover:text-black hover:pl-1"
//       >
//         Privacy Policy
//       </a>
//     </li>
//   </ul>

//   {/* Google Play Button/Badge */}
//   <a
//     href="https://play.google.com/store"
//     target="_blank"
//     rel="noopener noreferrer"
//     className="inline-block transition-transform duration-300 hover:scale-105"
//   >
//     <img
//       src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
//       alt="Get it on Google Play"
//       className="w-36"
//     />
//   </a>
// </div>

//         </div>

//         {/* Copyright Section */}
//         <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
//           <p>
//             Copyright &copy; 2025{" "}
//             <a
//               href="https://sathimera.com"
//               className="hover:text-gray-500 transition-colors"
//             >
//               sathimera.com
//             </a>{" "}
//             - All rights reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;










import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Footer = () => {
  return (
    <footer className="bg-gray-300 text-black py-10">
      <div className="container mx-auto px-4">
        {/* Grid container for three columns */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {/* Column 1: Bureau Info */}
          <motion.div
            className="flex flex-col items-center text-center p-4"
            variants={fadeInUp}
          >
            {/* Uncomment if you add the logo locally */}
            {/* <img
              src="/assets/iqra-logo.png"
              alt="IQRA Logo"
              className="w-32 h-28 mb-3"
            /> */}
            <h2 className="text-xl font-bold mb-2">IQRA MARRIAGE BUREAU</h2>
            <p className="text-sm leading-relaxed max-w-md text-gray-700">
              Now we have started this online matchmaking. We provide valuable
              information, advice, and counselling services to help you choose
              your better half. Our Association is one of the oldest and most
              successful in India and abroad.
            </p>
          </motion.div>

          {/* Column 2: About Us */}
          <motion.div variants={fadeInUp}>
            <h2 className="text-lg font-semibold mb-4 transition-transform duration-300 hover:scale-105">
              About Us
            </h2>
            <ul className="space-y-2">
              <li>
                <a
                  href="/aboutus"
                  className="text-sm text-gray-600 transition-all duration-300 hover:text-black hover:pl-1"
                >
                  About Us &raquo;
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-sm text-gray-600 transition-all duration-300 hover:text-black hover:pl-1"
                >
                  Contact Us &raquo;
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Column 3: Information */}
          <motion.div variants={fadeInUp}>
            <h2 className="text-lg font-semibold mb-4 transition-transform duration-300 hover:scale-105">
              Information
            </h2>
            <ul className="space-y-2 mb-4">
              <li>
                <a
                  href="/membership"
                  className="text-sm text-gray-600 transition-all duration-300 hover:text-black hover:pl-1"
                >
                  Payment Option
                </a>
              </li>
              <li>
                <a
                  href="#success-stories"
                  className="text-sm text-gray-600 transition-all duration-300 hover:text-black hover:pl-1"
                >
                  Success Stories
                </a>
              </li>
              <li>
                <a
                  href="#privacy"
                  className="text-sm text-gray-600 transition-all duration-300 hover:text-black hover:pl-1"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>

            {/* Google Play Store Badge */}
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block transition-transform duration-300 hover:scale-105"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get it on Google Play"
                className="w-36"
              />
            </a>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          className="border-t border-gray-700 mt-10 pt-5 text-center text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p>
            Copyright &copy; 2025{" "}
            <a
              href="https://sathimera.com"
              className="hover:text-gray-500 transition-colors"
            >
              sathimera.com
            </a>{" "}
            - All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
