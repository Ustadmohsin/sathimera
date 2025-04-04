import React from 'react';

// Hard-coded JSON data with two rows
const pricingData = [
  [
    {
      tier: 'Silver',
      price: '₹1000/mo',
      features: ['View 25 Profiles', 'Validity of 6 Months',],
    },
    {
      tier: 'Gold',
      price: '₹2000/mo',
      features: ['View 40 Profiles', 'Validity of 12 Months',],
    },
    {
      tier: ' Offline Payment',
      price: 'Bank Name',
      features: ['Feature G', 'Feature H', 'Feature I'],
    },
  ],
  
];

// Card component for a single pricing tier
const PricingCard = ({ tier, price, features }) => (
  <div className="bg-green-200 shadow-xl rounded-lg p-6 m-4 flex flex-col w-72 ">
    <h2 className="text-2xl font-bold text-center mb-4">{tier}</h2>
    <p className="text-2xl  font-semibold text-center mb-4">{price}</p>
    <ul className="space-y-2">
      {features.map((feature, idx) => (
        <li key={idx} className="text-black- font-semibold text-center ">
          {feature}
        </li>
      ))}
    </ul>
  </div>
);

// Main component that renders the grid with two rows
const PricingGrid = () => {
  return (
    <div 
      className="flex justify-center items-center min-h-screen bg-cover bg-center bg-green-100"
      style={{ backgroundImage: "url('https://example.com/background.jpg')" }} // Replace with your background image URL
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
