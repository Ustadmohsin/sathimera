import React from 'react';

const MembershipCard = ({ name, membershipId, membershipType, expiryDate }) => {
  return (
    <div className="max-w-sm mx-auto bg-gray-200 shadow-lg rounded-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gray-200 p-4">
        <h2 className="text-black text-xl font-bold">Membership Card</h2>
      </div>
      
      {/* Body */}
      <div className="p-4">
        <p className="text-gray-700">
          <span className="font-semibold">Name:</span> {name}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Membership ID:</span> {membershipId}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Type:</span> {membershipType}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Expires:</span> {expiryDate}
        </p>
      </div>
      
      {/* Footer */}
      <div className="bg-gray-100 p-4">
        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Renew Membership
        </button>
      </div>
      <div className="max-w-sm mx-auto bg-gray-200 shadow-lg rounded-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gray-200 p-4">
        <h2 className="text-black text-xl font-bold">Membership Card</h2>
      </div>
      
      {/* Body */}
      <div className="p-4">
        <p className="text-gray-700">
          <span className="font-semibold">Name:</span> {name}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Membership ID:</span> {membershipId}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Type:</span> {membershipType}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Expires:</span> {expiryDate}
        </p>
      </div>
      
      {/* Footer */}
      <div className="bg-gray-100 p-4">
        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Renew Membership
        </button>
      </div>
    </div>
    </div>
    
  );
};

export default MembershipCard;

