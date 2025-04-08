"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function FeeTable() {
  const feeData = [
    {
      date: "10-12-24",
      orderId: 8829346,
      vendor: "John Doe",
      feeType: "Platform Commission",
      feeAmount: 550000,
    },
    {
      date: "10-12-24",
      orderId: 8829346,
      vendor: "John Doe",
      feeType: "Payment Processing",
      feeAmount: 550000,
    },
    ...Array(8).fill({
      date: "10-12-24",
      orderId: 8829346,
      vendor: "John Doe",
      feeType: "Refund Fee",
      feeAmount: 550000,
    }),
  ];
  const router = useRouter();

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <table className="w-full text-left">
        <thead>
          <tr className=" text-kikaeBlue">
            <th className="p-3">Date</th>
            <th className="p-3">Order ID</th>
            <th className="p-3">Vendor</th>
            <th className="p-3">Fee type</th>
            <th className="p-3">Fee amount</th>
          </tr>
        </thead>
        <tbody>
          {feeData.map((item, index) => (
            <tr
              key={index}
              className="border-b border-gray-200 hover:bg-gray-50"
            >
              <td className="p-3">{item.date}</td>
              <td className="p-3">{item.orderId}</td>
              <td
                onClick={() => {
                  router.push("/dashboard/users/vendors/1?page=products");
                }}
                className="p-3 text-blue-600 underline cursor-pointer"
              >
                {item.vendor}
              </td>
              <td className="p-3">{item.feeType}</td>
              <td className="p-3">₦{item.feeAmount.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
