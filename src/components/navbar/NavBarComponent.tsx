"use client";

import { Button, Navbar } from "flowbite-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

function NavBarComponent() {

  const route = useRouter()

  return (
    <Navbar className="bg-[#e4ebff]">
      <Navbar.Brand href="https://flowbite-react.com">
        <img src="https://api.istad.co/media/image/c8c41751-3bc0-4f07-9658-7d95efbae692.png" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Srping Shop</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <button className="font-semibold text-gray-100 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700" onClick={()=> route.push("/dashboard")}>Dashboard</button>
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
