import type { Metadata } from "next";
import { Inter, Kantumruy_Pro } from "next/font/google";
import "./globals.css";
import FooterComponent from "@/components/footer/FooterComponent";
import NavBarComponent from "@/components/navbar/NavBarComponent";

const inter = Inter({ subsets: ["latin"] });
const kantumruy_pro = Kantumruy_Pro({
  subsets: ["khmer", "latin"],
  display: "swap",
  variable: "--font-kantumruy-pro",
});

export const metadata: Metadata = {
  icons: {
    icon: "/assets/pic.jpg",
  },
  title: {
    template: "%s - Chh1pShop",
    default: "Chh1pShop"
  },
  description: "This is home page",
  keywords: ['shop', 'ecommerce', 'sell'],
  openGraph: {
    title: {
      template: "%s - Chh1pShop",
      default: "Chh1pShop"
    },
    description: "This is Chh1p products shop",
    images:[
      "https://t4.ftcdn.net/jpg/02/50/31/83/360_F_250318394_Sv5grwCptbMlak5Rp4PtiDCsb6HYOUzg.jpg"
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (  
    <html lang="en">
      <body className={kantumruy_pro.className}>
        <div className="h-screen flex flex-col justify-between text-[#34416A] bg-[whitesmoke]" >
          <NavBarComponent/>  
          {children}
          <FooterComponent/>
        </div>
      </body>
    </html>
  );
}
