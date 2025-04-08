"use client";

import { useState } from "react";
import SalesMetrics from "./SalesMetrics";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import LogisticsMetrics from "./LogisticsMetrics";
import FinancialMetrics from "./FinancialMetrics";
import CustomerEngagement from "./CustomerEngagement";
import ProductPerformance from "./ProductPerformance";

const Dashboard = () => {
  const router = useRouter();
  const [dateRange, setDateRange] = useState({
    from: "2024-01-01",
    to: "2024-12-31",
  });
  const params = useParams();
  const metricParam = useSearchParams().get("metric");

  const metrics = [
    "sales metrics",
    "product performance",
    "customer engagement",
    "financial metrics",
    "logistics metrics",
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex gap-6">
      {/* Left Side - Balance Overview */}
      <div className="w-80 bg-white shadow-md rounded-lg p-4 border h-[15.37rem] border-gray-200">
        <h2 className="text-gray-700 font-semibold">Balance Overview</h2>
        <p className="text-kikaeBlue text-sm">Available Balance</p>
        <h3 className="text-lg font-bold text-gray-800">₦1,500,000</h3>
        <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded-3xl text-sm font-semibold hover:bg-blue-700 transition">
          Cashout now
        </button>
        <p className="text-gray-500 text-sm mt-2">Pending Balance: ₦10,000</p>
        <p className="text-gray-400 text-xs">
          Funds available in 5 Days, 12 Hours
        </p>
      </div>

      {/* Right Side - Main Content */}
      <div className="flex-1">
        {/* Top Overview Metrics */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="p-4 bg-white shadow-md rounded-3xl">
            <p className="text-gray-500 text-sm">TOTAL SALES</p>
            <h2 className="text-xl font-bold">₦1,500,000</h2>
          </div>
          <div className="p-4 bg-white shadow-md rounded-3xl">
            <p className="text-gray-500 text-sm">TOTAL ORDERS RECEIVED</p>
            <h2 className="text-xl font-bold">804</h2>
          </div>
          <div className="p-4 bg-white shadow-md rounded-3xl">
            <p className="text-gray-500 text-sm">AVERAGE VALUE PER ORDER</p>
            <h2 className="text-xl font-bold">₦23,000</h2>
          </div>
        </div>

        {/* Sales Metrics Tabs */}
        <div className="flex gap-4 mb-4  pb-2 ">
          {metrics.map((metric) => (
            <button
              key={metric}
              className={`text-base font-bold capitalize  ${
                metricParam === metric.split(" ").join("_")
                  ? "text-kikaeBlue pb-1"
                  : "text-kikaeGrey"
              }`}
              onClick={() => {
                router.replace(
                  `/dashboard/users/vendors/${
                    params.id
                  }?page=dashboard&&metric=${metric.split(" ").join("_")}`
                );
              }}
            >
              {metric}
            </button>
          ))}
        </div>

        {/* Product Performance Section */}

        <div className="pt-2.5 p-6">
          <h4>Date filter range:</h4>
          <div className="flex gap-4 items-center my-4 text-black">
            <input
              type="date"
              value={dateRange.from}
              onChange={(e) =>
                setDateRange({ ...dateRange, from: e.target.value })
              }
              className="rounded-3xl p-2"
            />
            <span>to</span>
            <input
              type="date"
              value={dateRange.to}
              onChange={(e) =>
                setDateRange({ ...dateRange, to: e.target.value })
              }
              className="rounded-3xl  p-2"
            />
            <button className="bg-kikaeBlue text-white py-2 px-4 rounded-3xl">
              Apply
            </button>
          </div>
          {metricParam == "sales_metrics" && <SalesMetrics />}
          {metricParam == "financial_metrics" && <FinancialMetrics />}
          {metricParam == "logistics_metrics" && <LogisticsMetrics />}
          {metricParam == "product_performance" && <ProductPerformance />}

          {metricParam == "customer_engagement" && <CustomerEngagement />}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
