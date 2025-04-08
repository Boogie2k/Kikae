"use client";
import { useState } from "react";
import Image from "next/image";
import image from "@/assets/slide0.png";
import { useRouter, useSearchParams } from "next/navigation";
import BankCardList from "@/components/Vendor/BankDetails";
import Dashboard from "@/components/Vendor/Dashboard";
import { Arrow } from "@/assets/Arrow";

const products = [
  {
    id: 1,
    name: "Vintage shirt roll-up",
    price: "₦60,000",
    rating: 4.9,
    image: "/shirt1.jpg",
  },
  {
    id: 2,
    name: "Vintage shirt roll-up",
    price: "₦60,000",
    rating: 4.9,
    image: "/shirt2.jpg",
  },
  {
    id: 3,
    name: "Vintage shirt roll-up",
    price: "₦60,000",
    rating: 4.9,
    image: "/shirt3.jpg",
  },
  {
    id: 4,
    name: "Vintage shirt roll-up",
    price: "₦60,000",
    rating: 4.9,
    image: "/shirt4.jpg",
  },
  {
    id: 5,
    name: "Vintage shirt roll-up",
    price: "₦60,000",
    rating: 4.9,
    image: "/shirt4.jpg",
  },
];

const tabs = ["products", "runway", "dashboard", "bank details", "orders"];

export default function VendorStore({ params }: { params: { id: string } }) {
  const router = useRouter();

  const page = useSearchParams().get("page");

  return (
    <div className="text-black p-4">
      {/* Profile Header */}

      <div className="flex  items-center justify-between pr-6">
        <div className="flex items-center gap-6">
          <button
            onClick={() => router.back()}
            className=" p-3 bg-white rounded-3xl border border-black/25 justify-center items-center flex"
          >
            <Arrow />
          </button>
          <h4 className="text-black text-2xl font-bold font-['Raleway'] leading-9">
            User details
          </h4>

          <button
            onClick={() => {
              // router.push(`/dashboard/users/audit_trail/${params.id}`);
            }}
            className="py-1 px-6 bg-white rounded-2xl border border-black/25 justify-center items-center inline-flex"
          >
            <div className="justify-start items-center gap-2 flex">
              <div className="text-kikaeBlue text-base font-normal font-['DM Sans']">
                View audit trail
              </div>
            </div>
          </button>
        </div>

        <div className=" flex-col justify-center items-end gap-6 inline-flex">
          <div className="text-kikaeBlue text-base font-normal font-['DM Sans'] leading-[30px]">
            Actions
          </div>
          <div className="justify-start items-start gap-6 inline-flex">
            {/*  <button className="text-black text-base font-normal font-['DM Sans'] underline leading-[30px] z-10">
              Chat
            </button> */}

            <button
              // disabled={isLoading}

              className="text-[#979797] text-base font-normal font-['DM Sans'] underline leading-[30px]"
            >
              {"Deactivate"}
            </button>
          </div>
        </div>
      </div>
      {/* Profile Image and Details */}
      <div className="flex flex-col gap-10">
        <div className="relative">
          <Image
            src={image}
            alt="Profile"
            //   width={764}
            // height={226}
            // style={{ borderRadius: "50%" }}
            style={{
              width: 764,
              height: 225,
            }}
            className="rounded-3xl"
          />
          <Image
            src={image}
            alt="Profile"
            style={{ borderRadius: "50%", width: 135, height: 135 }}
            className="rounded-full absolute top-32 left-4 border-4 border-white"
          />
        </div>

        <div className="">
          <h1 className="text-xl font-bold">Abigail Couture</h1>
          <p className="text-sm text-gray-600">⭐ 4.9 (300)</p>
          <p className="text-gray-500">
            I am a fashion designer with over 10 years of experience...
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mt-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 text-sm rounded-3xl capitalize ${
              page === tab
                ? "bg-kikaeBlue text-white"
                : "bg-white text-kikaeGrey"
            }`}
            onClick={() =>
              router.replace(
                `/dashboard/users/vendors/${params.id}?page=${tab}`
              )
            }
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      {page === "products" && (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-1 mt-6 ">
          {products.map((product) => (
            <div
              key={product.id}
              onClick={() => router.push("/dashboard/products/1")}
              className="rounded-3xl relative cursor-pointer "
            >
              <Image
                src={image}
                alt={product.name}
                className="rounded-3xl w-[183px] h-[204px] h-40 object-cover"
              />
              <h2 className="text-base font-openSansRegular mt-2 text-black">
                {product.name}
              </h2>
              <p className="text-kikaeGrey font-openSansRegular">
                {product.price}
              </p>
              <p className="text-white bg-black/50 absolute top-3.5 left-3.5 px-1 py-1 rounded-2xl">
                ⭐ {product.rating}
              </p>
            </div>
          ))}
        </div>
      )}

      {page === "runway" && (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-1 mt-6 ">
          {products.map((product) => (
            <div key={product.id} className="rounded-3xl relative">
              <Image
                src={image}
                alt={product.name}
                className="rounded-3xl w-[183px] h-[204px] h-40 object-cover"
              />
              <h2 className="text-base font-openSansRegular mt-2 text-black">
                {product.name}
              </h2>
              <p className="text-kikaeGrey font-openSansRegular">
                {product.price}
              </p>
              <p className="text-white bg-black/50 absolute top-3.5 left-3.5 px-1 py-1 rounded-2xl">
                ⭐ {product.rating}
              </p>
            </div>
          ))}
        </div>
      )}
      {page === "dashboard" && <Dashboard />}
      {page === "bank details" && <BankCardList />}

      {page === "orders" && (
        <div className="flex gap-6 mt-6">
          {[1, 2].map((item) => (
            <div
              key={item}
              className="w-80 bg-white shadow-md rounded-lg p-4 border border-gray-200"
            >
              <div className="relative w-[4.375rem] h-[3.4375rem] mb-3">
                <Image
                  src={image}
                  alt="Long Sleeve T-Shirts"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
              <h2 className="text-blue-600 text-sm font-semibold mb-1">
                Long Sleeve T-Shirts
              </h2>
              <p className="text-gray-500 text-xs">Ajah, Lagos - ₦60,000</p>
              <div className="text-sm mt-2">
                <p>
                  <span className="font-semibold">Colour:</span> Blue
                </p>
                <p>
                  <span className="font-semibold">Size:</span> XXL
                </p>
                <p>
                  <span className="font-semibold">Quantity:</span> 1
                </p>
              </div>
              <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded-3xl text-sm font-semibold hover:bg-blue-700 transition">
                Ready for delivery
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
