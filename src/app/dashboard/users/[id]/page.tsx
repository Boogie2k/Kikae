"use client";
import React, { useEffect } from "react";
//import { useRouter } from "next/router";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import MyModal from "@/components/Modal/Modal";
import Link from "next/link";
import Details from "@/components/user/Details";
import { getUser } from "@/networking/endpoints/getUser";
import { ArrowBack } from "@/assets/ArrowBack";

const user = {
  firstName: "Henry",
  lastName: "Richard",
  email: "henrich@gmail.com",
  phoneNumber: "Gend",
  creationDate: "20-Oct-24",
  gender: "Male",
  details: [
    {
      label: "Address book",
      count: 4,
      link: "View all addresses",
      hrefLink: "addresses",
    },
    {
      label: "Orders",
      count: 12,
      link: "View all orders",
      hrefLink: "orders",
    },
    {
      label: "Following",
      count: 30,
      link: "View all following",
      hrefLink: "following",
    },
    {
      label: "Ongoing delivery",
      count: 4,
      link: "View all ongoing delivery",
      hrefLink: "delivery",
    },
    {
      label: "Reviews & comments",
      count: 4,
      link: "View all reviews & comments",
      hrefLink: "comments",
    },
    { label: "Cart", count: 10, link: "View all", hrefLink: "cart" },
  ],
};

const UserProfile = ({ params }: { params: { id: string } }) => {
  // const param = useParams();
  const router = useRouter();
  const pathname = usePathname();
  const search = useSearchParams().get("details");
  console.log({ params, search, pathname });

  useEffect(() => {
    getUser(params.id);
  });
  return (
    <div className="pr-6">
      <MyModal
        isVisible={
          search == "following" ||
          search == "addresses" ||
          search == "orders" ||
          search == "delivery" ||
          search == "comments" ||
          search == "cart"
        }
        close={() => router.back()}
      >
        <Details />
      </MyModal>
      <div className="flex  items-center justify-between">
        <div className="flex items-center gap-6">
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

      <div className="p-6 rounded-3xl shadow-lg bg-white">
        <div className="grid grid-cols-6 gap-4 text-sm text-gray-700">
          <div>
            <p className="font-semibold text-blue-600">First Name</p>
            <p>{user.firstName}</p>
          </div>
          <div>
            <p className="font-semibold text-blue-600">Last Name</p>
            <p>{user.lastName}</p>
          </div>
          <div>
            <p className="font-semibold text-blue-600">Email</p>
            <p className="font-medium">{user.email}</p>
          </div>
          <div>
            <p className="font-semibold text-blue-600">Phone number</p>
            <p>{user.phoneNumber}</p>
          </div>
          <div>
            <p className="font-semibold text-blue-600">Creation date</p>
            <p>{user.creationDate}</p>
          </div>
          <div>
            <p className="font-semibold text-blue-600">Gender</p>
            <p>{user.gender}</p>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-6 gap-4 text-sm">
          {user.details.map((item, index) => (
            <div key={index} className="text-left">
              <p className="font-semibold text-blue-600">
                {item.label}{" "}
                <span className="text-gray-500">({item.count})</span>
              </p>
              <Link
                href={`?details=${item.hrefLink}`}
                className="text-black hover:text-kikaeBlue underline cursor-pointer"
              >
                {item.hrefLink}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
