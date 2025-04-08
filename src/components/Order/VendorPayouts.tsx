"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const payoutData = [
  {
    vendorName: "Anita Rose",
    pendingPayout: 120000,
    availablePayout: 500000,
    total: 550000,
    payoutMethod: "Paystack",
    bank: "GTBank",
    accountNumber: "0123456789",
    accountName: "John Doe Ventures",
  },
  // Repeat similar objects for additional rows
];

export default function PayoutTable() {
  const router = useRouter();

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <table className="w-full">
        <thead className="text-kikaeBlue">
          <tr className="">
            <th className="p-3">Vendor name</th>
            <th className="p-3">Pending payout (₦)</th>
            <th className="p-3">Available Payout (₦)</th>
            <th className="p-3">Total (₦)</th>
            <th className="p-3">Payout method</th>
            <th className="p-3">Bank</th>
            <th className="p-3">Account Number</th>
            <th className="p-3">Account Name</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {payoutData.map((item, index) => (
            <tr key={index} className="text-center">
              <td
                onClick={() => {
                  router.push("/dashboard/users/vendors/1?page=products");
                }}
                className="p-3 underline cursor-pointer"
              >
                {item.vendorName}
              </td>
              <td className="p-3">₦{item.pendingPayout.toLocaleString()}</td>
              <td className="p-3">₦{item.availablePayout.toLocaleString()}</td>
              <td className="p-3">₦{item.total.toLocaleString()}</td>
              <td className="p-3">{item.payoutMethod}</td>
              <td className="p-3">{item.bank}</td>
              <td className="p-3">{item.accountNumber}</td>
              <td className="p-3">{item.accountName}</td>
              <td className="p-3 flex items-center gap-2">
                <button className="text-green-600 font-semibold mr-2">
                  Approve
                </button>
                <button className="text-red-600 font-semibold">Reject</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
