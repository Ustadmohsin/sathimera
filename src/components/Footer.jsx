import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-300 text-green-600 py-8">
      <div className="container mx-auto px-4">
        {/* Grid container for three columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Bureau Info */}
          <div>
            <h2 className="text-xl font-semibold mb-2">IQRA MARRIAGE BUREAU</h2>
            <p className="text-sm leading-relaxed">
              Now we have started this online match making. We provide you the
              valuable information, advice, and counselling services to choose
              your better half for the rest of your life. Our Association is the
              oldest and most successful in India and abroad.
            </p>
          </div>

          {/* Column 2: About Us */}
          <div>
            <h2 className="text-lg font-semibold mb-4">About Us</h2>
            <ul className="space-y-2">
              <li>
                <a
                  href="/about"
                  className="text-sm hover:text-green-950 transition-colors"
                >
                  About Us &raquo;
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-sm hover:text-green-950 transition-colors"
                >
                  Contact Us &raquo;
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Information */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Information</h2>
            <ul className="space-y-2 mb-4">
              <li>
                <a
                  href="#payment"
                  className="text-sm hover:text-green-950 transition-colors"
                >
                  Payment Option
                </a>
              </li>
              <li>
                <a
                  href="#success-stories"
                  className="text-sm hover:text-green-950 transition-colors"
                >
                  Success Stories
                </a>
              </li>
              <li>
                <a
                  href="#privacy"
                  className="text-sm hover:text-green-950 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>

            {/* Google Play Button/Badge */}
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get it on Google Play"
                className="w-36"
              />
            </a>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
          <p>
            Copyright &copy; 2025{" "}
            <a
              href="https://sathimera.com"
              className="hover:text-gray-300 transition-colors"
            >
              sathimera.com
            </a>{" "}
            - All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
