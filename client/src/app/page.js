"use client";
import { useSelector ,useDispatch} from "react-redux";
import Header from "./header/page";
import Footer from "./footer/page";
import Product from "./products/page";
import { decrement,increment } from "@/redux/reducerSlice/countSlice";

export default function Home() {
  // const {count} = useSelector(state => state.count);
  // const dispatch= useDispatch();
  return (
    <main>
       {/* <h1 >count is:{count}</h1>
        <button onClick={()=>dispatch(increment())}>Increment</button>
        <button onClick={()=>dispatch(decrement())}>Decrement</button> */}
      <Header />
      <Product />
      <Footer />
    </main>
  );
}
