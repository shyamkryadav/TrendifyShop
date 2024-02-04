import { Inter } from "next/font/google";
import "./globals.css";
import ReduxProvider from "@/redux/reduxProvider";
import Header from "./header/page";
import Footer from "./footer/page";

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
      <Header />
        {children}
      <Footer />

        </ReduxProvider>
        </body>
    </html>
  );
}
