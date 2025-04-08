"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { ArrowBack } from "@/assets/ArrowBack";
import { viewAuditTrail } from "@/networking/viewAuditTrail";
import { userAuditTrail } from "@/types/types";

const Page = () => {
  const { id }: { id: string } = useParams();
  const [userAuditTrail, setUserAuditTrail] = useState<userAuditTrail[]>();

  const handleViewAuditTrail = async () => {
    try {
      const result = await viewAuditTrail(id);

      if (!result) return;

      setUserAuditTrail(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleViewAuditTrail();
  }, [id]);

  const router = useRouter();

  return (
    <div>
      <div className="flex items-center gap-6 py-6">
        <button
          onClick={() => router.back()}
          className="w-12 h-12 p-3 bg-white rounded-3xl border border-black/25 justify-center items-center inline-flex"
        >
          <ArrowBack />
        </button>
        <h4 className="text-black text-2xl font-bold font-['Raleway'] leading-9">
          User details
        </h4>

        <button
          onClick={() => {
            router.push(`/dashboard/users/${id}`);
          }}
          className="py-1 px-6 bg-white rounded-2xl border border-black/25 justify-center items-center inline-flex"
        >
          <div className="justify-start items-center gap-2 flex">
            <div className="text-[#ff0a54] text-base font-normal font-['DM Sans']">
              Close audit trail X
            </div>
          </div>
        </button>
      </div>
      {userAuditTrail?.length == 0 ? (
        <div className="w-full h-screen flex items-center justify-center">
          <h4 className="text-3xl text-[#ff0a54]">
            No audit trail to display for this user
          </h4>
        </div>
      ) : (
        <div className="overflow-y-auto p-12 bg-white rounded-3xl border border-black/25 justify-start items-start gap-[94px] inline-flex">
          <div className="w-[119px] flex-col justify-start items-start gap-12 inline-flex">
            <div className="self-stretch text-[#ff0a54] text-base font-normal font-['DM Sans'] leading-[30px]">
              Date
            </div>

            {userAuditTrail &&
              userAuditTrail.map((item) => {
                return (
                  <div
                    key={item.userId}
                    className="text-black text-base font-normal font-['DM Sans']"
                  >
                    {item.date}
                  </div>
                );
              })}
          </div>
          <div className="w-[147px] flex-col justify-start items-start gap-12 inline-flex">
            <div className="self-stretch text-[#ff0a54] text-base font-normal font-['DM Sans'] leading-[30px]">
              Email
            </div>
            {userAuditTrail &&
              userAuditTrail.map((item) => {
                return (
                  <div
                    key={item.userId}
                    className="text-black text-base font-normal font-['DM Sans']"
                  >
                    {item.email}
                  </div>
                );
              })}
          </div>
          <div className="flex-col justify-start items-start gap-12 inline-flex">
            <div className="self-stretch text-[#ff0a54] text-base font-normal font-['DM Sans'] leading-[30px]">
              School email
            </div>

            {userAuditTrail &&
              userAuditTrail.map((item) => {
                return (
                  <div
                    key={item.userId}
                    className="text-black text-base font-normal font-['DM Sans']"
                  >
                    {item.schoolEmail}
                  </div>
                );
              })}
          </div>
          <div className="w-[147.07px] flex-col justify-start items-start gap-12 inline-flex">
            <div className="text-[#ff0a54] text-base font-normal font-['DM Sans'] leading-[30px]">
              School
            </div>

            {userAuditTrail &&
              userAuditTrail.map((item) => {
                return (
                  <div
                    key={item.userId}
                    className="text-black text-base font-normal font-['DM Sans']"
                  >
                    {item.school}
                  </div>
                );
              })}
          </div>
          <div className="flex-col justify-start items-start gap-11 inline-flex">
            <div className="text-[#ff0a54] text-base font-normal font-['DM Sans'] leading-[30px]">
              Photos
            </div>

            {userAuditTrail?.map((item) => {
              return (
                <div
                  key={item.userId}
                  className="justify-start items-start gap-[5px] inline-flex"
                >
                  {item.photos.map((item, index) => {
                    return (
                      <img
                        key={index}
                        className="w-4 h-4 rounded-full"
                        src={item}
                      />
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
