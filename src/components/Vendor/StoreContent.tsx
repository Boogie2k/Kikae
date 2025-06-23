import Image from "next/image";
import { useParams, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Dashboard from "./Dashboard";
import BankCardList from "./BankDetails";

import VendorProducts from "./VendorProducts";
import VendorOrders from "./VendorOrders";
import { OrderItem } from "@/types/UserOrdersTypes";
import { getStoreOrders } from "@/networking/endpoints/vendors/getStoreOrders";
import { productData } from "@/types/ProductType";
import { getStoreProducts } from "@/networking/endpoints/vendors/getStoreProduct";

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

const StoreContent = () => {
  const page = useSearchParams().get("page");
  const params = useParams<{ id: string }>();
  const [storeOrders, setStoreOrders] = useState<OrderItem[]>([]);
  const [storeProducts, setStoreProducts] = useState<productData[]>([]);

  console.log({ params });
  useEffect(() => {
    const handleGetStoreOrders = async () => {
      const result = await getStoreOrders(params.id);
      setStoreOrders(result.data);
    };
    handleGetStoreOrders();

    const handleGetStoreProducts = async () => {
      const result = await getStoreProducts(params.id);
      console.log({ result });
      if (result) setStoreProducts(result.data);
    };
    handleGetStoreProducts();
  }, [params.id, setStoreOrders, setStoreProducts]);

  return (
    <div>
      {/* Product Grid */}
      {page === "products" && <VendorProducts storeProducts={storeProducts} />}

      {page === "runway" && (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-1 mt-6 ">
          {products.map((product) => (
            <div key={product.id} className="rounded-3xl relative">
              <Image
                src={product.image}
                alt={product.name}
                width={183}
                height={204}
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
      {page === "dashboard" && (
        <Dashboard orders={storeOrders} storeProducts={storeProducts} />
      )}
      {page === "bank details" && <BankCardList storeId={params.id} />}

      {page === "orders" && <VendorOrders storeOrders={storeOrders} />}
    </div>
  );
};

export default StoreContent;
