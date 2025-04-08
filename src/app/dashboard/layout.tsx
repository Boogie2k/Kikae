"use client";
import DeleteAdminModal from "@/components/DeleteAdminModal";
import IncreaseLimitModal from "@/components/IncreaseLimitModal";
import Modal from "@/components/Modal";
import Sidebar from "@/components/Sidebar";
import React, { useEffect } from "react";
import Cookies from "universal-cookie";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookies = new Cookies();

  const authToken = cookies.get("authToken");
  useEffect(() => {
    if (!authToken) {
      window.location.href = "/admin_auth/login";
    }
  }, [authToken]);

  if (!authToken) return null;
  return (
    <section className="flex min-h-screen bg-lightWhite ">
      {/* Fixed Sidebar */}
      <aside className="bg-white border border-grey fixed top-0 left-0 h-screen w-[15.625rem] overflow-y-auto">
        <Sidebar />
      </aside>

      <Modal text="Are you sure you want to delete this item?" />
      <DeleteAdminModal text="Are you sure you want to delete this item?" />
      <IncreaseLimitModal />

      {/* Main Content */}
      <div className="flex-1 flex justify-center pl-[16.625rem]">
        <div className="w-full ">{children}</div>
      </div>
    </section>
  );
}
