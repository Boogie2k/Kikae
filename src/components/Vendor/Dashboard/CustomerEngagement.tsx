import React from "react";
const products = [
  {
    reviews: "Product reviews",
    rating: 4.5,
    total: 5,
  },
  {
    reviews: "Product reviews",
    rating: 4.5,
    total: 5,
  },
  {
    reviews: "Product reviews",
    rating: 4.5,
    total: 5,
  },
  {
    reviews: "Product reviews",
    rating: 4.5,
    total: 5,
  },
  {
    reviews: "Product reviews",
    rating: 4.5,
    total: 5,
  },
  {
    reviews: "Product reviews",
    rating: 4.5,
    total: 5,
  },
  {
    reviews: "Product reviews",
    rating: 4.5,
    total: 5,
  },
];

const CustomerEngagement = () => {
  return (
    <div>
      <p className="text-gray-700">
        <strong>Total wishlist adds:</strong> 45
      </p>
      <p className="text-gray-700 mb-4">
        <strong>Repeat customers: </strong> 120(400 Sales)
      </p>
      <p className="text-gray-700 mb-4">
        <strong>Average product rating: </strong> ₦4.7 stars
      </p>

      <table className="w-full border-collapse border border-gray-200 text-black">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2">Product Reviews</th>
            <th className="border border-gray-300 p-2">Ratings</th>
            <th className="border border-gray-300 p-2">Toal</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index} className="text-center">
              <td className="border border-gray-300 p-2">{product.reviews}</td>
              <td className="border border-gray-300 p-2">{product.rating}</td>
              <td className="border border-gray-300 p-2">{product.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerEngagement;
