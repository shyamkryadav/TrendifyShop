import { Inter } from "next/font/google";
import "./globals.css";
import ReduxProvider from "@/redux/reduxProvider";
import Header from "./header/page";
import Footer from "./footer/page";
import { ToastContainer, toast } from 'react-toastify';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ReduxProvider>
      <ToastContainer
        hideProgressBar
        theme="dark"
        />
      {/* <Header /> */}
        {children}
      <Footer />


        </ReduxProvider>
        </body>
    </html>
  );
}
