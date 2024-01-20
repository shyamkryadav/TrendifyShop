import Image from "next/image";
import styles from "./page.module.css";
import Header from "./header/page";
import Footer from "./footer/page";

export default function Home() {
  return (
    <main>
      <Header />
      <Footer />
    </main>
  );
}
