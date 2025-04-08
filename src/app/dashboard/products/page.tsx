"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

const products = [
  {
    id: 1,
    photo:
      "https://portal.nbaunitybar.org/tailor-api/storage/app/profile-pic/wCmgY7UuF3m2aZCPrX4uPuL3yaqkLRM0GhD9FaEn.jpg",
    name: "Long sleeve T-shirts",
    price: 60000,
    oldPrice: 60000,
    category: "Handmade",
    subCategory: "Handmade",
    units: 10000,
    size: "S, M, XL",
    type: "makeup",
  },
  {
    id: 2,
    photo:
      "https://portal.nbaunitybar.org/tailor-api/storage/app/profile-pic/wCmgY7UuF3m2aZCPrX4uPuL3yaqkLRM0GhD9FaEn.jpg",
    name: "Long sleeve T-shirts",
    price: 60000,
    oldPrice: 60000,
    category: "Shirt",
    subCategory: "henrich@gmail.com",
    units: 10000,
    size: "S, M, XL",
    type: "makeup",
  },
  {
    id: 3,
    photo:
      "https://portal.nbaunitybar.org/tailor-api/storage/app/profile-pic/wCmgY7UuF3m2aZCPrX4uPuL3yaqkLRM0GhD9FaEn.jpg",
    name: "Long sleeve T-shirts",
    price: 60000,
    oldPrice: 60000,
    category: "Trousers",
    subCategory: "henrich@gmail.com",
    units: 10000,
    size: "S, M, XL",
    type: "freebies",
  },
  ...Array(7).fill({
    id: Math.random(),
    photo:
      "https://portal.nbaunitybar.org/tailor-api/storage/app/profile-pic/wCmgY7UuF3m2aZCPrX4uPuL3yaqkLRM0GhD9FaEn.jpg",
    name: "Long sleeve T-shirts",
    price: 60000,
    oldPrice: 60000,
    category: "henrich@gmail.com",
    subCategory: "henrich@gmail.com",
    units: 10000,
    size: "S, M, XL",
    type: "product",
  }),
];

const productTypes = ["items", "makeup", "freebies"];

const Table = () => {
  const router = useRouter();
  const goToProductPage = (type: string) => {
    router.push(`/dashboard/products/1?type=${type}`);
  };
  const type = useSearchParams().get("type");
  const status = useSearchParams().get("status");
  return (
    <div className="overflow-x-auto p-4 text-black">
      <div className="flex flex-row items-center items-center justify-between mb-6">
        <div className="w-[26.68rem]   flex justify-between items-center bg-white rounded-3xl border border-black/25 ">
          <input
            placeholder="search for a user"
            // value={search}
            // onChange={(e) => setSearch(e.target.value)}

            type="text"
            className="w-11/12 py-1.5 rounded-3xl px-6 text-black text-base font-normal font-['DM Sans'] leading-[30px] border-none"
          />
          <button className="px-6">search</button>
        </div>

        {
          <div className=" bg-white rounded-3xl font-openSansRegular flex">
            <button
              onClick={() =>
                router.replace(
                  `/dashboard/products?type=${type}&&status=approved&&page=1`
                )
              }
              className={`${
                status == "approved"
                  ? "bg-kikaeBlue text-white"
                  : "#fff text-kikaeGray"
              } py-1.5 px-3.5 rounded-3xl`}
            >
              Approved
            </button>
            <button
              //href={"?status=pending"}
              onClick={() =>
                router.replace(
                  `/dashboard/products?type=${type}&&status=pending&&page=1`
                )
              }
              className={`${
                status == "pending"
                  ? "bg-kikaeBlue text-white"
                  : "#fff text-kikaeGray"
              } py-1.5 px-3.5 rounded-3xl`}
            >
              Pending
            </button>
          </div>
        }
        <div className=" bg-white rounded-3xl flex  font-openSansRegular">
          {productTypes.map((productType) => (
            <button
              key={productType}
              onClick={() =>
                router.replace(
                  `/dashboard/products?type=${productType}&&status=${status}&&page=1`
                )
              }
              className={`${
                type == productType
                  ? "bg-kikaeBlue text-white"
                  : "#fff text-kikaeGray"
              } py-1.5 px-3.5 rounded-3xl`}
            >
              {productType}
            </button>
          ))}
        </div>
      </div>
      <table className="min-w-full rounded-3xl shadow-md">
        <thead>
          <tr className="text-left text-kikaeBlue">
            <th className="p-3">Photo</th>
            <th className="p-3">Name</th>
            <th className="p-3">Price</th>
            <th className="p-3">Old price</th>
            <th className="p-3">Category</th>
            <th className="p-3">Sub-category</th>
            <th className="p-3">Units</th>
            <th className="p-3">Size</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="p-3">
                <img
                  src={item.photo}
                  alt={item.name}
                  className="w-10 h-10 rounded"
                />
              </td>
              <td
                onClick={() => {
                  goToProductPage(item.type);
                }}
                className="p-3  underline cursor-pointer"
              >
                {item.name}
              </td>
              <td className="p-3">₦{item.price.toLocaleString()}</td>
              <td className="p-3">₦{item.oldPrice.toLocaleString()}</td>
              <td className="p-3">{item.category}</td>
              <td className="p-3">{item.subCategory}</td>
              <td className="p-3">{item.units.toLocaleString()}</td>
              <td className="p-3">{item.size}</td>
              <td className="p-3 text-kikaeGrey underline  cursor-pointer">
                Delete
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
