"use client";

import { Sidebar } from "flowbite-react";
import { sideBarItem } from "./sideBarMenu";

export default function DashboardSidebar() {
  return (
    <Sidebar className="h-screen rounded-none " aria-label="Default sidebar example">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          {sideBarItem.map((item, index) => (
            <Sidebar.Item key={index} href={item.path} icon={item.icon}>
              {item.title}
            </Sidebar.Item>
          ))}
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}