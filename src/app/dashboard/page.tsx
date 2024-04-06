import ProductTable from "@/components/table/ProductTable";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "This is dashboard page",
  keywords: ['shop', 'ecommerce', 'sell']
};

const page = () => {
  return (
      <main className="h-screen flex flex-col justify-center text-center w-full mx-7 bg-[whitesmoke]">
        <h1 className="font-semivold text-2xl my-5">Product Data</h1>
        <ProductTable />
      </main>
  );
};

export default page;