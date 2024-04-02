"use client";

import { Button, Navbar } from "flowbite-react";

function NavBarComponent() {
  return (
    <Navbar fluid>
      <Navbar.Brand href="https://flowbite-react.com">
        <img src="https://api.istad.co/media/image/c8c41751-3bc0-4f07-9658-7d95efbae692.png" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Srping Shop</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button>Dashboard</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#">HOME</Navbar.Link>
        <Navbar.Link href="#">ABOUT US</Navbar.Link>
        <Navbar.Link href="#">POLICY</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default NavBarComponent
