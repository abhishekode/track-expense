import { Inter } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import { UserContextProvider } from "@/context/UserContext";
import dynamic from "next/dynamic";
import Providers from "@/constant/providers";

// Import Swiper styles
import 'swiper/css';

const inter = Inter({ subsets: ["latin"] });

const Header = dynamic(() => import('@/components/Layout/header'), { ssr: false });
const Footer = dynamic(() => import('@/components/Layout/footer'), { ssr: false });


interface AdminLayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <UserContextProvider>
            <Header />
            <div className="min-h-screen">{children}</div>
            {/* <Footer /> */}
          </UserContextProvider>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
