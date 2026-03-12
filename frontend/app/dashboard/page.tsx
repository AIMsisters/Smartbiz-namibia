"use client"

export default function Dashboard() {
  const username = "Maria"

  return (
    <main className="min-h-screen flex bg-gray-100">

      {/* SIDEBAR */}
      <aside className="w-80 bg-white border-r border-gray-200 p-8 flex flex-col">

        <h2 className="text-2xl font-bold text-black-700 mb-10">
          SmartBiz
        </h2>

        <nav className="space-y-3 text-gray-800 font-medium">

          <div className="px-3 py-2 rounded-lg hover:bg-green-50 cursor-pointer">
            Dashboard
          </div>

          <div className="px-3 py-2 rounded-lg hover:bg-green-50 cursor-pointer">
            Inventory
          </div>

          <div className="px-3 py-2 rounded-lg hover:bg-green-50 cursor-pointer">
            Sales
          </div>

          <div className="px-3 py-2 rounded-lg hover:bg-green-50 cursor-pointer">
            Customers
          </div>

          <div className="px-3 py-2 rounded-lg hover:bg-green-50 cursor-pointer">
            Reports
          </div>

          <div className="px-3 py-2 rounded-lg hover:bg-green-50 cursor-pointer">
            Alerts
          </div>

        </nav>

      </aside>


      {/* MAIN CONTENT */}
      <section className="flex-1 flex flex-col">

        {/* TOP HEADER */}
        <header className="bg-white border-b border-gray-200 px-10 py-6 flex justify-between items-center">

          <div>
            <h1 className="text-2xl font-semibold text-gray-800">
              Hello {username}
            </h1>

            <p className="text-gray-500 text-sm">
              Welcome back to SmartBiz
            </p>
          </div>

          <div className="text-gray-500 text-sm">
            SmartBiz Namibia
          </div>

        </header>


        {/* DASHBOARD BODY */}
        <div className="p-10 space-y-10">

          {/* STAT CARDS */}
          <div className="grid grid-cols-4 gap-8">

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <p className="text-gray-500 text-sm">
                Total Products
              </p>

              <h2 className="text-3xl font-bold text-gray-800 mt-2">
                120
              </h2>
            </div>


            <div className="bg-white p-6 rounded-xl shadow-sm">
              <p className="text-gray-500 text-sm">
                Sales Today
              </p>

              <h2 className="text-3xl font-bold text-green-600 mt-2">
                $950
              </h2>
            </div>


            <div className="bg-white p-6 rounded-xl shadow-sm">
              <p className="text-gray-500 text-sm">
                Profit Today
              </p>

              <h2 className="text-3xl font-bold text-green-700 mt-2">
                $320
              </h2>
            </div>


            <div className="bg-white p-6 rounded-xl shadow-sm">
              <p className="text-gray-500 text-sm">
                Low Stock Alerts
              </p>

              <h2 className="text-3xl font-bold text-red-500 mt-2">
                4
              </h2>
            </div>

          </div>


          {/* CHART SECTION */}
          <div className="bg-white p-8 rounded-xl shadow-sm">

            <h2 className="text-lg font-semibold text-gray-800 mb-6">
              Revenue Overview
            </h2>

            <div className="h-72 bg-gray-100 rounded-lg flex items-center justify-center">

              <p className="text-gray-400">
                Revenue chart will appear here
              </p>

            </div>

          </div>


          {/* QUICK ACTIONS */}
          <div className="grid grid-cols-3 gap-8">

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-gray-800">
                Inventory
              </h3>

              <p className="text-gray-500 mt-2 text-sm">
                Manage products and stock levels
              </p>
            </div>


            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-gray-800">
                Reports
              </h3>

              <p className="text-gray-500 mt-2 text-sm">
                View sales and profit reports
              </p>
            </div>


            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-gray-800">
                Alerts
              </h3>

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