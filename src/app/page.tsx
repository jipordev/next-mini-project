'use client'

import ProductCard from "@/components/card/ProductCardComponent";
import { ProductType } from "@/components/types/ProductType";
import { Suspense, useEffect, useState } from "react";
import LoadingComponent from "./loading";
import BannerComponent from "@/components/constants/images/Banner";

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
    <Suspense fallback={<LoadingComponent/>}>
      <main className="bg-red-50">
        <section className="container-sm mx-[100px] grid grid-cols-2 gap-10 mt-12">
          <div className="flex flex-col justify-evenly m-auto">
            <h2 className="text-4xl font-bold py-3 leading-normal">Spring Shop</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum unde aspernatur aliquam temporibus quo quam suscipit, illum doloremque, exercitationem quas sint, provident porro soluta placeat laudantium nesciunt veritatis pariatur ab!</p>
          </div>
          <div className="m-auto">
            <BannerComponent/>
          </div>
        </section>
        <h1 className="mt-[70px] font-normal text-center mb-10 text-3xl">Our Products</h1>
        <section className="container-sm mx-[100px] grid grid-cols-4 gap-7 mb-12">
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
        </section>
    </main>
    </Suspense>
  );
}
