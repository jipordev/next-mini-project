import ProductTable from "@/components/table/ProductTable";
import React from "react";

const page = () => {
  return (
      <main className="h-screen flex flex-col justify-center text-center w-full mx-7 bg-[whitesmoke]">
        <h1 className="font-semivold text-2xl my-5">Product Data</h1>
        <ProductTable />
      </main>
  );
};

export default page;