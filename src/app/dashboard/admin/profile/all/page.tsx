"use client";
import { getAllAdmins } from "@/networking/getAllAdmins";
import { AdminProfileType } from "@/types/types";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useBoundStore } from "@/store/store";

const admins = [
  {
    firstName: "Henry",
    lastName: "Richard",
    email: "henrich@gmail.com",
    role: "Super admin",
  },
];

const Page = () => {
  const setDisplayDeleteModal = useBoundStore(
    (state) => state.setIsDeleteAdminModalVisible
  );

  const setDeleteUserId = useBoundStore((state) => state.setDeleteAdminId);

  const openModal = (userId: string) => {
    setDeleteUserId(userId);
    setDisplayDeleteModal(true);
  };

  const router = useRouter();
  return (
    <div className="h-[352px] p-12 bg-white rounded-3xl border border-black/25 justify-start items-start gap-16 inline-flex overflow-y-auto mt-6">
      <div className="flex-col justify-start items-start gap-[38px] inline-flex">
        <div className="self-stretch text-kikaeBlue text-base font-normal font-['DM Sans'] leading-[30px]">
          First Name
        </div>

        {admins?.map((item, index) => {
          return (
            <div
              key={index}
              className="self-stretch text-black text-base font-normal font-['DM Sans'] leading-[30px]"
            >
              {item.firstName}
            </div>
          );
        })}
      </div>
      <div className="flex-col justify-start items-start gap-[38px] inline-flex">
        <div className="self-stretch text-kikaeBlue text-base font-normal font-['DM Sans'] leading-[30px]">
          Last Name
        </div>

        {admins?.map((item, index: number) => {
          return (
            <div
              key={index}
              className="self-stretch text-black text-base font-normal font-['DM Sans'] leading-[30px]"
            >
              {item.lastName}
            </div>
          );
        })}
      </div>
      <div className="flex-col justify-start items-start gap-[38px] inline-flex">
        <div className="self-stretch text-kikaeBlue text-base font-normal font-['DM Sans'] leading-[30px]">
          Email
        </div>

        {admins?.map((item, index: number) => {
          return (
            <div
              key={index}
              className="self-stretch text-black text-base font-normal font-['DM Sans'] leading-[30px]"
            >
              {item.email}
            </div>
          );
        })}
      </div>
      <div className="flex-col justify-start items-start gap-[38px] inline-flex">
        <div className="self-stretch text-kikaeBlue text-base font-normal font-['DM Sans'] leading-[30px]">
          Password
        </div>

        {admins?.map((_item, index: number) => {
          return (
            <div
              key={index}
              className="text-black text-base font-normal font-['DM Sans'] leading-[30px]"
            >
              •••••••••••••••••
            </div>
          );
        })}
      </div>
      <div className="flex-col justify-start items-start gap-[38px] inline-flex">
        <div className="text-kikaeBlue text-base font-normal font-['DM Sans'] leading-[30px]">
          Actions
        </div>

        {admins?.map((_item, index: number) => {
          return (
            <div
              key={index}
              className="justify-start items-start gap-6 inline-flex"
            >
              <button
                onClick={() => router.push(`/dashboard/admin/edit/${index}`)}
                className="text-black text-base font-bold font-['DM Sans'] underline leading-[30px]"
              >
                Edit
              </button>
              <button
                // onClick={() => openModal(i)}
                className="text-[#979797] text-base font-bold font-['DM Sans'] underline leading-[30px]"
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Page;
