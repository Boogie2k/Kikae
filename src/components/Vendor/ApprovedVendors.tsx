import { useRouter } from "next/navigation";
import React from "react";
const businesses = Array(12).fill({
  name: "Abigail couture",
  email: "henrich@gmail.com",
  phone: "08038593829",
  website: "abigailcouture.com",
  address: "82 Ray Str, Lekki, Lagos",
});
const ApprovedVendors = () => {
  const router = useRouter();
  const goToVendorPage = () => {
    router.push("/dashboard/users/vendors/1?page=products");
  };
  return (
    <div className="p-6 min-h-screen text-black">
      <div className="bg-white shadow rounded-xl overflow-hidden">
        <table className="min-w-full text-left">
          <thead className="">
            <tr>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Phone number</th>
              <th className="px-6 py-3">Website</th>
              <th className="px-6 py-3">Address</th>
              <th className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {businesses.map((biz, index) => (
              <tr key={index}>
                <td
                  onClick={goToVendorPage}
                  className="px-6 py-4 underline cursor-pointer"
                >
                  {biz.name}
                </td>
                <td className="px-6 py-4 ">{biz.email}</td>
                <td className="px-6 py-4 ">{biz.phone}</td>
                <td className="px-6 py-4">{biz.website}</td>
                <td className="px-6 py-4 ">{biz.address}</td>
                <td className="px-6 py-4 text-kikaeGrey underline">
                  Deactivate
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApprovedVendors;
