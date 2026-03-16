"use client"

import Sidebar from "../components/Sidebar"
import { useState } from "react"
import { useProducts } from "../store/productsStore"

export default function POS() {

  const { products, sellProduct } = useProducts()

  const [search, setSearch] = useState("")
  const [cart, setCart] = useState<any[]>([])

  const addToCart = (product:any) => {

    const existing = cart.find(item => item.sku === product.sku)

    if(existing){

      const updated = cart.map(item =>
        item.sku === product.sku
        ? {...item, qty: item.qty + 1}
        : item
      )

      setCart(updated)

    } else {

      setCart([...cart,{...product,qty:1}])

    }

  }

  const changeQty = (sku:string, amount:number) => {

    const updated = cart.map(item =>
      item.sku === sku
      ? {...item, qty: Math.max(1,item.qty + amount)}
      : item
    )

    setCart(updated)

  }

  const removeItem = (sku:string) => {

    setCart(cart.filter(item => item.sku !== sku))

  }

  const filteredProducts = products.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.sku.toLowerCase().includes(search.toLowerCase())
  )

  const subtotal = cart.reduce((sum,item)=>sum + item.price * item.qty,0)

  const tax = subtotal * 0.15

  const total = subtotal + tax


  const completeSale = () => {

    cart.forEach(item=>{
      sellProduct(item.sku,item.qty)
    })

    alert("Sale Completed")

    setCart([])

  }

  return(

    <main className="flex min-h-screen bg-gray-100">

      <Sidebar/>

      <section className="flex-1 p-10 grid grid-cols-2 gap-10">

        {/* PRODUCT SEARCH */}

        <div>

          <h1 className="text-2xl font-bold mb-6">
            Point Of Sale
          </h1>

          <input
            placeholder="Search or scan product..."
            className="border p-4 rounded-lg w-full mb-6"
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
          />

          <div className="bg-white rounded-xl shadow p-4 max-h-[500px] overflow-y-auto">

            {filteredProducts.map((product,index)=>(

              <div
              key={index}
              onClick={()=>addToCart(product)}
              className="flex justify-between p-3 border-b cursor-pointer hover:bg-gray-100"
              >

                <span>{product.name}</span>
                <span>${product.price}</span>

              </div>

            ))}

          </div>

        </div>


        {/* CART */}

        <div>

          <h2 className="text-xl font-semibold mb-6">
            Cart
          </h2>

          <div className="bg-white rounded-xl shadow p-6">

            <table className="w-full mb-6">

              <thead>
                <tr className="border-b text-left">
                  <th>Product</th>
                  <th>Qty</th>
                  <th>Price</th>
                  <th>Total</th>
                  <th></th>
                </tr>
              </thead>

              <tbody>

                {cart.map((item,index)=>(

                  <tr key={index} className="border-b">

                    <td className="py-3">{item.name}</td>

                    <td>

                      <div className="flex items-center gap-2">

                        <button
                        onClick={()=>changeQty(item.sku,-1)}
                        className="px-2 border rounded"
                        >
                        -
                        </button>

                        {item.qty}

                        <button
                        onClick={()=>changeQty(item.sku,1)}
                        className="px-2 border rounded"
                        >
                        +
                        </button>

                      </div>

                    </td>

                    <td>${item.price}</td>

                    <td>${item.price * item.qty}</td>

                    <td>

                      <button
                      onClick={()=>removeItem(item.sku)}
                      className="text-red-500"
                      >
                      Remove
                      </button>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

            {/* TOTALS */}

            <div className="space-y-2 mb-6">

              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>

              <div className="flex justify-between">
                <span>Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>

              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>

            </div>

            <button
            onClick={completeSale}
            className="bg-green-600 text-white w-full py-3 rounded-lg hover:bg-green-700"
            >
            Complete Sale
            </button>

          </div>

        </div>

      </section>

    </main>

  )

}