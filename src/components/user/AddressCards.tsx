import { ArrowBack } from "@/assets/ArrowBack";
import { useRouter } from "next/navigation";
import React from "react";
import { FaTimes } from "react-icons/fa";

const addresses = [
  {
    name: "OSAS EMMA",
    phone: "09045386266",
    address:
      "No. 10B, Ladipoe street, off Lekki Estate, Lekki Phase 1, Lekki-Epe Expy, Eti-Osa 106104, Lagos",
  },
  {
    name: "OSAS EMMA",
    phone: "09045386266",
    address:
      "No. 10B, Ladipoe street, off Lekki Estate, Lekki Phase 1, Lekki-Epe Expy, Eti-Osa 106104, Lagos",
  },
  {
    name: "OSAS EMMA",
    phone: "09045386266",
    address:
      "No. 10B, Ladipoe street, off Lekki Estate, Lekki Phase 1, Lekki-Epe Expy, Eti-Osa 106104, Lagos",
  },
  {
    name: "OSAS EMMA",
    phone: "09045386266",
    address:
      "No. 10B, Ladipoe street, off Lekki Estate, Lekki Phase 1, Lekki-Epe Expy, Eti-Osa 106104, Lagos",
  },
];

const AddressCards = () => {
  const router = useRouter();
  return (
    <div className="p-6">
      <div className="flex items-center text-black mb-6 gap-6">
        <button
          onClick={() => router.back()}
          className="flex flex-row items-center gap-6"
        >
          <ArrowBack />
        </button>
        <h4 className="font-bold">Address Book</h4>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {addresses.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-xl ">
            <p className="text-blue-600 font-semibold">{item.name}</p>
            <p className="text-gray-500 text-sm">{item.phone}</p>
            <p className="text-gray-700 mt-2">{item.address}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddressCards;
