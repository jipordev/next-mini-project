'use client'

import ProductCard from "@/components/card/ProductCardComponent";
import { ProductType } from "@/components/types/ProductType";
import { Suspense, useEffect, useState } from "react";
import LoadingComponent from "./loading";
import BannerComponent from "@/components/images/Banner";
import { BASE_API_URL } from "../../lib/constants";
import HeroSectionComponent from "@/components/hero-section/HeroSectionComponent";

export default function Home() {

  const [products, setProducts] = useState<ProductType[]>([])
  

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`${BASE_API_URL}products/`)
      const data = await res.json()
      setProducts(data.results)
      } catch (err) {
        console.log("Error" + err);
        
      }
    }
    fetchData()
  }, [])

  return (
      <main className="bg-[whitesmoke]">
        <HeroSectionComponent/>
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
  );
}
