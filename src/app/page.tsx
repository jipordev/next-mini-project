'use client'

import ProductCard from "@/components/card/ProductCardComponent";
import { ProductType } from "@/components/types/ProductType";
import { Suspense, useEffect, useState } from "react";
import LoadingComponent from "./loading";

export default function Home() {

  const [products, setProducts] = useState<ProductType[]>([])
  const BASE_URL = "https://store.istad.co/api/"
  

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`${BASE_URL}products/`)
      const data = await res.json()
      setProducts(data.results)
      } catch (err) {
        console.log("Error" + err);
        
      }
    }
    fetchData()
  }, [])

  return (
    <main>
        <h1 className="text-center p-5 text-3xl text-gray-100">Products</h1>
        <section className="container-sm mx-[100px] grid grid-cols-4 gap-4">
          <Suspense fallback={<LoadingComponent/>}>
            {
              products.map((product:ProductType) => (
                <ProductCard
                key={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                />
              ))
            }
          </Suspense>
        </section>
    </main>
  );
}
