// import React from 'react';

// // Hard-coded JSON data with two rows
// const pricingData = [
//   [
//     {
//       tier: 'Silver',
//       price: '₹1000/mo',
//       features: ['View 25 Profiles', 'Validity of 6 Months',],
//     },
//     {
//       tier: 'Gold',
//       price: '₹2000/mo',
//       features: ['View 40 Profiles', 'Validity of 12 Months',],
//     },
//     {
//       tier: ' Offline Payment',
//       price: 'Bank Name',
//       features: ['Feature G', 'Feature H', 'Feature I'],
//     },
//   ],
  
// ];

// // Card component for a single pricing tier
// const PricingCard = ({ tier, price, features }) => (
//   <div className="bg-green-200 shadow-xl rounded-lg p-6 m-4 flex flex-col w-72 ">
//     <h2 className="text-2xl font-bold text-center mb-4">{tier}</h2>
//     <p className="text-2xl  font-semibold text-center mb-4">{price}</p>
//     <ul className="space-y-2">
//       {features.map((feature, idx) => (
//         <li key={idx} className="text-black- font-semibold text-center ">
//           {feature}
//         </li>
//       ))}
//     </ul>
//   </div>
// );

// // Main component that renders the grid with two rows
// const PricingGrid = () => {
//   return (
//     <div 
//       className="flex justify-center items-center min-h-screen bg-cover bg-center bg-green-100"
//       style={{ backgroundImage: "url('https://example.com/background.jpg')" }} // Replace with your background image URL
//     >
//     <div className="container mx-auto p-4">
//       {pricingData.map((row, rowIndex) => (
//         <div key={rowIndex} className="flex flex-wrap justify-center">
//           {row.map((card, cardIndex) => (
//             <PricingCard key={cardIndex} {...card} />
//           ))}
//         </div>
//       ))}
//     </div>
//     </div>
//   );
// };







import React from 'react';
import { motion } from 'framer-motion';

// Updated JSON data with QR codes
const pricingData = [
  [
    {
      tier: 'Silver',
      price: '₹1000',
      features: ['✔ View 25 Profiles', '✔ Validity of 6 Months'],
    },
    {
      tier: 'Gold',
      price: '₹2000',
      features: ['✔ View 40 Profiles', '✔ Validity of 12 Months'],
    },
    {
      tier: 'Offline Payment',
      price: 'SBI Bank',
      features: [
        'Acc. No: 0000003534248269',
        'Acc. Type: Saving',
        'IFSC: SBIN0001656',
      ],
    },
    {
      tier: 'PhonePay Payment',
      price: '',
      features: [
        'Acc. No: 0000003534248269',
        'Acc. Type: Saving',
        'IFSC: SBIN0001656',
      ],
      qrImage: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=PhonePePaymentLink',
    },
    {
      tier: 'GooglePay Payment',
      price: '',
      features: [
        'Acc. No: 0000003534248269',
        'Acc. Type: Saving',
        'IFSC: SBIN0001656',
      ],
      qrImage: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=GooglePayPaymentLink',
    },
  ],
];

// Animated card component with hover effects
const PricingCard = ({ tier, price, features, qrImage }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: 'easeOut' }}
    whileHover={{ scale: 1.05, transition: { duration: 0.2, ease: 'easeInOut' } }}
    className="bg-white border border-gray-300 shadow-xl rounded-2xl p-6 m-4 flex flex-col w-72"
  >
    <h2 className="text-2xl font-extrabold text-center text-gray-800 mb-2">{tier}</h2>
    {price && (
      <p className="text-xl font-semibold text-center text-green-700 mb-4">{price}</p>
    )}
    <ul className="space-y-2 mb-4">
      {features.map((feature, idx) => (
        <li key={idx} className="text-sm text-gray-700 text-center">
          {feature}
        </li>
      ))}
    </ul>
    {qrImage && (
      <div className="flex justify-center">
        <img
          src={qrImage}
          alt={`${tier} QR Code`}
          className="w-32 h-32 object-contain"
        />
      </div>
    )}
  </motion.div>
);

// Main grid
const PricingGrid = () => {
  return (
    <div
      className="flex justify-center items-center min-h-screen bg-cover bg-center bg-green-200 mt-7"
      style={{ backgroundImage: "url('https://example.com/background.jpg')" }}
    >
      <div className="container mx-auto p-4">
        {pricingData.map((row, rowIndex) => (
          <div key={rowIndex} className="flex flex-wrap justify-center">
            {row.map((card, cardIndex) => (
              <PricingCard key={cardIndex} {...card} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingGrid;
