// RootLayout.tsx

import DashboardSidebar from "@/components/dashboard/sidebar/DashboardSideBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
    </>
      
  );
}
