"use client";

import { Button, Navbar } from "flowbite-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaCartPlus } from "react-icons/fa6";

function NavBarComponent() {

  const route = useRouter()

  return (
    <Navbar className="bg-gray-50">
      <Navbar.Brand href="https://flowbite-react.com">
        <img src="https://api.istad.co/media/image/c8c41751-3bc0-4f07-9658-7d95efbae692.png" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-[20px] font-semibold dark:text-white">Chh1p Shop</span>
      </Navbar.Brand>
      <div className="flex md:order-2 items-center">
        <span className="mr-7"><FaCartPlus color="#34416A" size={26}/></span>
        <button className="font-semibold text-gray-100 px-4 py-2 rounded-xl bg-[#ff8b00] hover:bg-[#ff8c00da]" onClick={()=> route.push("/dashboard")}>Dashboard</button>
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
