import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();
  const handleClick = () => {
    console.log("placing your oredr");
    router.push("/product");
  };
  return (
    <>
      <div>Home Page</div>

      <Link href="/">
        <a>Blog</a>
      </Link>
      <Link href="/product">
        <a>Product</a>
      </Link>
      <button onClick={handleClick}> Place Order</button>
    </>
  );
};

export default Home;
