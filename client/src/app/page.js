import Image from "next/image";
import styles from "./page.module.css";
import Header from "./header/page";
import Footer from "./footer/page";
import Product from "./productCard/page";

export default function Home() {
  return (
    <main>
      <Header />
      <Product />
      <Footer />
    </main>
  );
}
