"use client";
import { users } from "@/app/data";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

const page = () => {
  const router = useRouter();

  const type = useSearchParams().get("type");

  //const page = useSearchParams().get("page");

  const goToUserPage = () => {
    router.push("/dashboard/users/1");
  };
  console.log({ type });
  return (
    <div className="pt-6 pr-6">
      <div className="p-4 shadow-lg rounded-3xl text-black ">
        <table className="w-full">
          <thead className="text-kikaeBlue">
            <tr className=" text-left">
              <th className="p-3">First Name</th>
              <th className="p-3">Last Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Phone Number</th>
              <th className="p-3">Profile Picture</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td
                  onClick={goToUserPage}
                  className="p-3 underline cursor-pointer"
                >
                  {user.firstName}
                </td>
                <td className="p-3">{user.lastName}</td>
                <td className="p-3">{user.email}</td>
                <td className="p-3">{user.phoneNumber}</td>
                <td className="p-3">
                  <img
                    src={user.profilePicture}
                    alt="Profile"
                    className="w-8 h-8 rounded-full"
                  />
                </td>
                <td className="p-3">
                  <button className="text-red-600 hover:underline">
                    Deactivate
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default page;
