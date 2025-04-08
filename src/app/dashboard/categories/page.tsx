"use client";

import ModalDetails from "@/components/Categories/ModalDetails";

import MyModal from "@/components/Modal/Modal";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const categoriesData = [
  {
    category: "Men's Clothing",
    subcategories: "Shirts, Pants, Jackets, Suits, T-Shirts, Hoodies",
    items: 100,
  },
  {
    category: "Women's Clothing",
    subcategories: "Dresses, Skirts, Tops, Trousers, Jumpsuits, Blouses",
    items: 10000,
  },
  {
    category: "Footwear",
    subcategories: "Sneakers, Formal Shoes, Sandals, Boots, Flats, Heels",
    items: 854,
  },
  {
    category: "Bags & Accessories",
    subcategories: "Handbags, Backpacks, Wallets, Belts, Sunglasses, Hats",
    items: 9482,
  },
  {
    category: "Jewelry",
    subcategories: "Necklaces, Bracelets, Earrings, Rings, Watches",
    items: 249,
  },
  {
    category: "Haircare",
    subcategories:
      "Shampoo, Conditioner, Hair Serums, Hair Masks, Wigs, Extensions",
    items: 45,
  },
  {
    category: "Skincare",
    subcategories:
      "Moisturizers, Cleansers, Toners, Face Masks, Sunscreens, Exfoliators",
    items: 748,
  },
  {
    category: "Fragrances",
    subcategories: "Perfumes, Body Sprays, Deodorants, Roll-Ons",
    items: 27,
  },
  {
    category: "Beauty Tools",
    subcategories:
      "Makeup Brushes, Blenders, Hair Dryers, Curling Irons, Nail Kits",
    items: 64,
  },
  {
    category: "Kids' Clothing",
    subcategories:
      "Baby Onesies, Kids' T-Shirts, Kids' Pants, Dresses, Jackets",
    items: 1394,
  },
  {
    category: "Activewear",
    subcategories:
      "Sports Bras, Leggings, Track Pants, Gym Shorts, Sweatshirts, Shoes",
    items: 384,
  },
  {
    category: "Sleepwear",
    subcategories: "Pajamas, Nightgowns, Robes, Slippers, Sleep Masks",
    items: 485,
  },
];

export default function CategoriesTable() {
  const [search, setSearch] = useState("");

  const action = useSearchParams().get("action");
  const filteredCategories = categoriesData.filter(
    (category) =>
      category.category.toLowerCase().includes(search.toLowerCase()) ||
      category.subcategories.toLowerCase().includes(search.toLowerCase())
  );
  const router = useRouter();

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <MyModal
        isVisible={action == "add" || action == "edit" || action == "delete"}
        close={() => router.back()}
      >
        <ModalDetails />
      </MyModal>
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Search for categories or subcategories"
          className="border p-2 rounded w-1/3"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Link href={`?action=${"add"}`} className="text-blue-500">
          Add new category
        </Link>
      </div>
      <table className="w-full text-black rounded-3xl shadow-sm">
        <thead className="text-kikaeBlue">
          <tr>
            <th className="p-2 text-left">Categories</th>
            <th className="p-2 text-left">Subcategories</th>
            <th className="p-2 text-right">No. of items</th>
            <th className="p-2 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredCategories.map((cat, index) => (
            <tr key={index}>
              <td className="p-2 text-black underline cursor-pointer">
                {cat.category}
              </td>
              <td className="p-2">{cat.subcategories}</td>
              <td className="p-2 text-right">{cat.items}</td>
              <td className="p-2 text-center space-x-2">
                <Link
                  href={`?action=${"edit"}`}
                  className="text-black underline"
                >
                  Edit
                </Link>
                <Link
                  href={`?action=${"delete"}`}
                  className="text-kikaeGrey underline"
                >
                  Delete
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
