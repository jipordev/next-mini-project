"use client";

import { Button, Navbar } from "flowbite-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaCartPlus } from "react-icons/fa6";
import Image from "next/image";
import { NavbarItem } from "@nextui-org/react";

function NavBarComponent() {

  const route = useRouter()

  return (
    <Navbar className="bg-gray-50">
      <Navbar.Brand href="/">
        <Image width={1000} height={1000} src=" https://store.istad.co/media/product_images/logo.png" className="w-[50px] h-[50px] mr-3 rounded-[50%]" alt="" />
        <span className="text-[14px] sm:text-[16px] self-center whitespace-nowrap md:text-[20px] font-semibold dark:text-white">Chh1p Shop</span>
      </Navbar.Brand>
      <div className="flex md:order-2 items-center">
        <span className=" mr-3 sm:mr-5 md:mr-7"><FaCartPlus color="#34416A" className="size-6" size={26}/></span>
        <button className="p-1 sm:p-2 md:p-3 font-semibold text-gray-50 px-4 py-2 rounded-xl bg-[#ff8b00] hover:text-white hover:bg-[#ff8c00da]" onClick={()=> route.push("/dashboard")}>Dashboard</button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
          <Link className="font-semibold hover:text-[#6d7eb5]" href={"/"}>HOME</Link>
          <Link className="font-semibold hover:text-[#6d7eb5]" href={"/about-us"}>ABOUT US</Link>
          <Link className="font-semibold hover:text-[#6d7eb5]" href={"/policy"}>POLICY</Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default NavBarComponent
