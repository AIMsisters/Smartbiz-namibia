"use client"

import Sidebar from "../components/Sidebar"
import { useState } from "react"
import { useProducts } from "../store/productsStore"

export default function Inventory() {

  const { products, addProduct, deleteProduct, restockProduct } = useProducts()

  const [search, setSearch] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [showForm, setShowForm] = useState(false)

  const [name, setName] = useState("")
  const [category, setCategory] = useState("")
  const [sku, setSku] = useState("")
  const [price, setPrice] = useState("")
  const [stock, setStock] = useState("")
  const [lowStock, setLowStock] = useState("")

  const [editingIndex, setEditingIndex] = useState<number | null>(null)

  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6


  // ADD PRODUCT

  const handleAddProduct = () => {

    if (!name || !price || !stock) return

    const newProduct = {
      name,
      category,
      sku,
      price: Number(price),
      stock: Number(stock),
      lowStock: Number(lowStock)
    }

    addProduct(newProduct)

    setName("")
    setCategory("")
    setSku("")
    setPrice("")
    setStock("")
    setLowStock("")
    setShowForm(false)

  }


  // RESTOCK

  const handleRestock = (index:number) => {

    const amount = prompt("Enter restock amount")

    if (!amount) return

    restockProduct(index, Number(amount))

  }


  // SEARCH + FILTER

  const filteredProducts = products
  .filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.sku.toLowerCase().includes(search.toLowerCase())
  )
  .filter((p) =>
    selectedCategory === "All" || p.category === selectedCategory
  )


  // STATS

  const totalProducts = products.length
  const lowStockItems = products.filter(p => p.stock <= p.lowStock).length
  const outOfStock = products.filter(p => p.stock === 0).length


  // PAGINATION

  const indexOfLast = currentPage * itemsPerPage
  const indexOfFirst = indexOfLast - itemsPerPage

  const currentProducts = filteredProducts.slice(indexOfFirst, indexOfLast)

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage)


  return (

    <main className="flex min-h-screen bg-gray-100">

      <Sidebar />

      <section className="flex-1 p-10">

        <h1 className="text-2xl font-bold mb-6">
          Inventory Management
        </h1>


        {/* SEARCH + FILTER */}

        <div className="flex gap-4 mb-6">

          <input
            placeholder="Search product..."
            className="border p-3 rounded-lg w-80"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            className="border p-3 rounded-lg"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >

            <option value="All">All Categories</option>
            <option value="Bakery">Bakery</option>
            <option value="Dairy">Dairy</option>
            <option value="Clothing">Clothing</option>

          </select>

        </div>


        {/* INVENTORY STATS */}

        <div className="grid grid-cols-3 gap-6 mb-10">

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <p className="text-gray-500 text-sm">Total Products</p>
            <h2 className="text-2xl font-bold">{totalProducts}</h2>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <p className="text-gray-500 text-sm">Low Stock Items</p>
            <h2 className="text-2xl font-bold text-yellow-600">{lowStockItems}</h2>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <p className="text-gray-500 text-sm">Out Of Stock</p>
            <h2 className="text-2xl font-bold text-red-600">{outOfStock}</h2>
          </div>

        </div>


        {/* ADD PRODUCT BUTTON */}

        <button
        onClick={() => setShowForm(!showForm)}
        className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700 mb-6"
        >
        + Add Product
        </button>


        {/* PRODUCT FORM */}

        {showForm && (

        <div className="bg-white p-6 rounded-xl shadow-sm mb-10">

          <h2 className="text-lg font-semibold mb-4">
            New Product
          </h2>

          <div className="grid grid-cols-3 gap-4">

            <input placeholder="Product Name" className="border p-3 rounded-lg"
            value={name} onChange={(e)=>setName(e.target.value)} />

            <input placeholder="Category" className="border p-3 rounded-lg"
            value={category} onChange={(e)=>setCategory(e.target.value)} />

            <input placeholder="SKU" className="border p-3 rounded-lg"
            value={sku} onChange={(e)=>setSku(e.target.value)} />

            <input placeholder="Selling Price" className="border p-3 rounded-lg"
            value={price} onChange={(e)=>setPrice(e.target.value)} />

            <input placeholder="Stock Quantity" className="border p-3 rounded-lg"
            value={stock} onChange={(e)=>setStock(e.target.value)} />

            <input placeholder="Low Stock Limit" className="border p-3 rounded-lg"
            value={lowStock} onChange={(e)=>setLowStock(e.target.value)} />

            <button
              onClick={handleAddProduct}
              className="bg-green-600 text-white rounded-lg hover:bg-green-700 col-span-3 p-3"
            >
              Add Product
            </button>

          </div>

        </div>

        )}


        {/* PRODUCT TABLE */}

        <div className="bg-white p-6 rounded-xl shadow-sm">

          <h2 className="text-lg font-semibold mb-6">
            Products
          </h2>

          <table className="w-full">

            <thead>
              <tr className="text-left border-b">
                <th className="pb-3">Product</th>
                <th>Category</th>
                <th>SKU</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>

              {currentProducts.map((product, index) => {

                const realIndex = products.indexOf(product)
                const low = product.stock <= product.lowStock

                return (

                  <tr key={index} className="border-b">

                    <td className="py-3">{product.name}</td>
                    <td>{product.category}</td>
                    <td>{product.sku}</td>
                    <td>${product.price}</td>
                    <td>{product.stock}</td>

                    <td>

                      {low ? (
                        <span className="text-red-500 font-semibold">
                          LOW STOCK
                        </span>
                      ) : (
                        <span className="text-green-600">
                          OK
                        </span>
                      )}

                    </td>

                    <td className="space-x-3">

                      <button
                      onClick={() => setEditingIndex(realIndex)}
                      className="text-blue-600"
                      >
                      Edit
                      </button>

                      <button
                      onClick={() => handleRestock(realIndex)}
                      className="text-green-600"
                      >
                      Restock
                      </button>

                      <button
                      onClick={() => deleteProduct(realIndex)}
                      className="text-red-600"
                      >
                      Delete
                      </button>

                    </td>

                  </tr>

                )

              })}

            </tbody>

          </table>


          {/* PAGINATION */}

          <div className="flex gap-2 mt-6">

            {Array.from({ length: totalPages }, (_, i) => (

              <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className="px-3 py-2 border rounded-lg hover:bg-gray-200"
              >

              {i + 1}

              </button>

            ))}

          </div>

        </div>


        {/* EDIT MODAL */}

        {editingIndex !== null && (

        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">

          <div className="bg-white p-8 rounded-xl w-96">

            <h2 className="text-lg font-bold mb-4">
              Edit Product
            </h2>

            <input
            className="border p-3 rounded-lg w-full mb-3"
            value={products[editingIndex].name}
            onChange={(e) => {

              const updated = [...products]
              updated[editingIndex].name = e.target.value

            }}
            />

            <button
            onClick={() => setEditingIndex(null)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg"
            >
            Save
            </button>

          </div>

        </div>

        )}

      </section>

    </main>
  )
}