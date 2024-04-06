import ProductTable from "@/components/table/ProductTable";
import React from "react";
import { Metadata } from "next";
import DashboardSidebar from "@/components/dashboard/sidebar/DashboardSideBar";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "This is dashboard page",
  keywords: ['shop', 'ecommerce', 'sell']
};

const page = () => {
  return (
      <main className="lg:flex ">
        <DashboardSidebar/>
        <ProductTable
         />
      </main>
  );
};

export default page;