import React from "react";
const products = [
  { date: "05/12/2024", rating: 1, amount: 6000, status: "approved" },
  { date: "05/12/2024", rating: 2, amount: 6000, status: "approved" },
  { date: "05/12/2024", rating: 3, amount: 6000, status: "approved" },
  { date: "05/12/2024", rating: 4, amount: 6000, status: "approved" },
  { date: "05/12/2024", rating: 5, amount: 6000, status: "approved" },
  { date: "05/12/2024", rating: 6, amount: 6000, status: "approved" },
  { date: "05/12/2024", rating: 7, amount: 6000, status: "approved" },
  { date: "05/12/2024", rating: 8, amount: 6000, status: "approved" },
  { date: "05/12/2024", rating: 9, amount: 6000, status: "approved" },
  { date: "05/12/2024", rating: 10, amount: 6000, status: "approved" },
];

const FinancialMetrics = () => {
  return (
    <div>
      <p>Payment Details</p>
      <table className="w-full border-collapse border border-gray-200 text-black">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2">Date</th>
            <th className="border border-gray-300 p-2">Rating</th>
            <th className="border border-gray-300 p-2">Amount</th>
            <th className="border border-gray-300 p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index} className="text-center">
              <td className="border border-gray-300 p-2">{product.date}</td>
              <td className="border border-gray-300 p-2">{product.rating}</td>
              <td className="border border-gray-300 p-2">{product.amount}</td>
              <td className="border border-gray-300 p-2">{product.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FinancialMetrics;
