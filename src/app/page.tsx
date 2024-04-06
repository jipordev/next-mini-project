'use client'
import ProductCard from "@/components/card/ProductCardComponent";
import { ProductType } from "@/components/types/ProductType";
import { Suspense, useEffect, useState } from "react";
import { BASE_API_URL } from "../../lib/constants";
import HeroSectionComponent from "@/components/hero-section/HeroSectionComponent";
import Link from "next/link";
import LoadingComponent from "./loading";


async function fetchData() {
  const data = await fetch(`${BASE_API_URL}products/`);
  if (!data.ok) {
    throw new Error(`Failed to fetch products: ${data.statusText}`);
  }
  const contentType = data.headers.get("content-type");
  if (!contentType || !contentType.includes("application/json")) {
    throw new Error("Invalid response format: expected JSON");
  }
  const res = await data.json();
  return res.results;
}

export default function ProductPage() {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    fetchData()
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <main className="bg-[whitesmoke]">
      <HeroSectionComponent />
      <h1 className="mt-[70px] font-normal text-center mb-10 text-3xl">Our Products</h1>
      <section className="container-sm mx-12 md:mx-[70px] lg:mx-[100px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 mb-12">
        {products.map((product: ProductType) => (
          <Suspense fallback={<LoadingComponent/>}>
            <Link href={`/${product.id}`} key={product.id}>
            <ProductCard
              name={product.name}
              price={product.price}
              image={product.image}
              desc={product.desc}
              quantity={product.quantity}
            />
          </Link>
          </Suspense>
        ))}
      </section>
    </main>
  );
}
