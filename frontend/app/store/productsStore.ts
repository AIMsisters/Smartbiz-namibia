"use client"

import { create } from "zustand"

type Product = {
  name: string
  category: string
  sku: string
  price: number
  stock: number
  lowStock: number
}

type ProductStore = {

  products: Product[]

  addProduct: (product: Product) => void

  deleteProduct: (index:number) => void

  restockProduct: (index:number, amount:number) => void

  sellProduct: (sku:string, qty:number) => void

}

export const useProducts = create<ProductStore>((set) => ({

  products: [
    { name: "Bread", category: "Bakery", sku: "BRD001", price: 2, stock: 20, lowStock: 5 },
    { name: "Milk", category: "Dairy", sku: "MLK001", price: 3, stock: 10, lowStock: 5 },
    { name: "Shoes", category: "Clothing", sku: "SH001", price: 40, stock: 8, lowStock: 2 }
  ],

  addProduct: (product) =>
    set((state) => ({
      products: [...state.products, product]
    })),

  deleteProduct: (index) =>
    set((state) => ({
      products: state.products.filter((_, i) => i !== index)
    })),

  restockProduct: (index, amount) =>
    set((state) => {

      const updated = [...state.products]

      updated[index].stock += amount

      return { products: updated }

    }),

  sellProduct: (sku, qty) =>
    set((state) => {

      const updated = state.products.map(p =>
        p.sku === sku
          ? { ...p, stock: p.stock - qty }
          : p
      )

      return { products: updated }

    })

}))