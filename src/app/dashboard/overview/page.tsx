"use client";
import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import type { ChartData } from "chart.js";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

interface StatCardProps {
  title: string;
  value: string;
}

export default function Dashboard(): JSX.Element {
  const [salesData, setSalesData] = useState<ChartData<"bar">>({
    labels: [],
    datasets: [],
  });
  const [userEngagementData, setUserEngagementData] = useState<
    ChartData<"bar">
  >({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    setSalesData({
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      datasets: [
        {
          label: "Sales",
          data: [80000, 100000, 90000, 70000, 60000, 95000],
          backgroundColor: "#60A5FA",
        },
      ],
    });

    setUserEngagementData({
      labels: ["Active users today", "New users this month", "Wishlist adds"],
      datasets: [
        {
          label: "Engagement",
          data: [70000, 90000, 65000],
          backgroundColor: ["#3B82F6", "#6EE7B7", "#F472B6"],
        },
      ],
    });
  }, []);

  return (
    <div className="p-6 space-y-6 text-black">
      <div className="text-2xl font-bold">Hello, Dooyum! 👋</div>
      <div className="text-gray-600">
        Here’s your platform’s performance at a glance.
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <StatCard title="Total products" value="100,000,000" />
        <StatCard title="Total categories" value="50" />
        <StatCard title="Total users" value="50,000" />
        <StatCard title="Active orders" value="120,000" />
        <StatCard title="Completed orders" value="45,000" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 border rounded-xl shadow bg-white">
          <h2 className="text-lg font-semibold mb-2">Sales metrics</h2>
          <div className="text-sm text-gray-500 mb-2">
            Revenue this month: ₦2,500,000 <br /> Orders Completed: 5,670
          </div>
          <Bar
            data={salesData}
            options={{
              responsive: true,
              plugins: { legend: { display: false } },
            }}
          />
        </div>

        <div className="p-4 border rounded-xl shadow bg-white">
          <h2 className="text-lg font-semibold mb-2">User engagement</h2>
          <div className="text-sm text-gray-500 mb-2">
            Orders Completed: 5,670
          </div>
          <Bar
            data={userEngagementData}
            options={{
              responsive: true,
              plugins: { legend: { display: false } },
            }}
          />
        </div>
      </div>

      <div className="p-4 border rounded-xl shadow bg-white">
        <h2 className="text-lg font-semibold mb-4">Top Categories</h2>
        <table className="w-full text-left">
          <thead>
            <tr className="text-sm text-gray-500 border-b">
              <th className="py-2">Rank</th>
              <th className="py-2">Category name</th>
              <th className="py-2">Sales (₦)</th>
              <th className="py-2">Items sold</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-2">1</td>
              <td className="py-2 text-blue-600 underline cursor-pointer">
                Men&apos;s Clothing
              </td>
              <td className="py-2">₦1,200,000</td>
              <td className="py-2">320</td>
            </tr>
            <tr className="border-b">
              <td className="py-2">2</td>
              <td className="py-2 text-blue-600 underline cursor-pointer">
                Women&apos;s Clothing
              </td>
              <td className="py-2">₦950,000</td>
              <td className="py-2">280</td>
            </tr>
            <tr>
              <td className="py-2">3</td>
              <td className="py-2 text-blue-600 underline cursor-pointer">
                Footwear
              </td>
              <td className="py-2">₦600,000</td>
              <td className="py-2">150</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

function StatCard({ title, value }: StatCardProps): JSX.Element {
  return (
    <div className="p-4 bg-white shadow rounded-xl border">
      <div className="text-gray-500 text-sm mb-1">{title}</div>
      <div className="text-lg font-semibold">{value}</div>
    </div>
  );
}
