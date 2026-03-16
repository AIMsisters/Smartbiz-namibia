"use client"

import Sidebar from "../components/Sidebar"
import { LayoutDashboard, Package, ShoppingCart, Users, BarChart3, AlertTriangle } from "lucide-react"

export default function Dashboard() {
  const username = "Maria"

  return (
    <main className="min-h-screen flex bg-gray-100">

      {/* SIDEBAR */}
       <Sidebar />

      {/* MAIN CONTENT */}
      <section className="flex-1 flex flex-col">

        {/* TOP BAR */}
        <header className="bg-white text-gray-800 px-10 py-6 flex justify-between items-center">

          <div>
            <h1 className="text-2xl font-semibold">
              Hello {username}
            </h1>

            <p className="text-green-700 text-sm">
              Welcome back to SmartBiz
            </p>
          </div>

          <div className="text-sm">
            SmartBiz Namibia
          </div>

        </header>


        {/* DASHBOARD CONTENT */}
        <div className="p-10 space-y-10">


          {/* STATS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <p className="text-gray-500 text-sm">Total Products</p>
              <h2 className="text-3xl font-bold text-gray-800 mt-2">120</h2>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <p className="text-gray-500 text-sm">Sales Today</p>
              <h2 className="text-3xl font-bold text-green-600 mt-2">$950</h2>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <p className="text-gray-500 text-sm">Profit Today</p>
              <h2 className="text-3xl font-bold text-green-700 mt-2">$320</h2>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <p className="text-gray-500 text-sm">Low Stock Alerts</p>
              <h2 className="text-3xl font-bold text-red-500 mt-2">4</h2>
            </div>

          </div>


          {/* CHART */}
          <div className="bg-white p-8 rounded-xl shadow-sm">

            <h2 className="text-lg font-semibold text-gray-800 mb-6">
              Revenue Overview
            </h2>

            <div className="h-72 bg-gray-100 rounded-lg flex items-center justify-center">
              <p className="text-gray-400">Revenue chart will appear here</p>
            </div>

          </div>


          {/* QUICK ACTIONS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-gray-800">Inventory</h3>
              <p className="text-gray-500 mt-2 text-sm">
                Manage products and stock levels
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-gray-800">Reports</h3>
              <p className="text-gray-500 mt-2 text-sm">
                View sales and profit reports
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-gray-800">Alerts</h3>
              <p className="text-gray-500 mt-2 text-sm">
                Check important system alerts
              </p>
            </div>

          </div>

        </div>

      </section>

    </main>
  )
}
