import path from 'path';
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';
import Link from 'next/link';

export const sideBarItem = [
    {
        title: "Dashboard",
        href: "/dashboard",
        icon: HiArrowSmRight
    },
    {
        title: "Create Product",
        path: "/dashboard/create",
        icon: HiChartPie
    }
]