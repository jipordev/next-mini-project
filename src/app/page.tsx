
import ProductCard from "@/components/card/ProductCardComponent";
import { ProductType } from "@/components/types/ProductType";
import { Suspense, useEffect, useState } from "react";
import { BASE_API_URL } from "../../lib/constants";
import HeroSectionComponent from "@/components/hero-section/HeroSectionComponent";
import Link from "next/link";


async function fetchData() {
    const data = await fetch(`${BASE_API_URL}products/`)
    const res = await data.json()
    return res.results;
  }

export default async function ProductPage() {

//   const [products, setProducts] = useState<ProductType[]>([])
  

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const res = await fetch(`${BASE_API_URL}products/`)
//       const data = await res.json()
//       setProducts(data.results)
//       } catch (err) {
//         console.log("Error" + err);
        
//       }
//     }
//     fetchData()
//   }, [])
const products = await fetchData();


  return (


      <main className="bg-[whitesmoke]">
        <HeroSectionComponent/>
        <h1 className="mt-[70px] font-normal text-center mb-10 text-3xl">Our Products</h1>
        <section className="container-sm mx-12 md:mx-[70px] lg:mx-[100px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 mb-12">
            {
              products.map((product:ProductType) => {
                return (
                  <Link href={`/${product.id}`} key={product.id}>
                    <ProductCard
                      name={product.name}
                      price={product.price}
                      image={product.image}
                      desc={product.desc}
                      quantity={product.quantity}
                    />
                  </Link>)
              })
            }
        </section>
    </main>
  );
}
