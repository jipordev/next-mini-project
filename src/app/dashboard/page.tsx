import ProductTable from "@/components/table/ProductTable";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col justify-center text-center w-full mx-7">
      <h1 className="font-bold text-[25px]">Product Data</h1>
      <ProductTable />
    </div>
  );
};

export default page;