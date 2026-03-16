"use client"

import Link from "next/link"
import { LayoutDashboard, Package, ShoppingCart, Users, BarChart3, AlertTriangle } from "lucide-react"

export default function Sidebar() {

  return (

    <aside className="w-72 bg-green-700 text-white flex flex-col p-8">

      <h2 className="text-2xl font-bold mb-10">
        SmartBiz
      </h2>

      <nav className="space-y-3 text-sm">

        <Link href="/dashboard">
          <div className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-green-600 cursor-pointer">
            <LayoutDashboard size={18} />
            Dashboard
          </div>
        </Link>

        <Link href="/inventory">
          <div className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-green-600 cursor-pointer">
            <Package size={18} />
            Inventory
          </div>
        </Link>

        <Link href="/sales">
          <div className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-green-600 cursor-pointer">
            <ShoppingCart size={18} />
            Sales
          </div>
        </Link>

        <Link href="/pos">
          <div className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-green-600 cursor-pointer">
            <Package size={18} />
            POS
          </div>
        </Link>

        <Link href="/suppliers">
          <div className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-green-600 cursor-pointer">
            <Package size={18} />
            Suppliers
          </div>
        </Link>

        <Link href="/customers">
          <div className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-green-600 cursor-pointer">
            <Users size={18} />
            Customers
          </div>
        </Link>

        <Link href="/reports">
          <div className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-green-600 cursor-pointer">
            <BarChart3 size={18} />
            Reports
          </div>
        </Link>

        <Link href="/alerts">
          <div className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-green-600 cursor-pointer">
            <AlertTriangle size={18} />
            Alerts
          </div>
        </Link>

        <Link href="/settings">
          <div className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-green-600 cursor-pointer">
            <Package size={18} />
            Settings
          </div>
        </Link>
      </nav>

    </aside>

  )
}