import React from "react";
import Link from "next/link";

const ProductList = () => {
  return (
    <>
      <div>ProductList</div>
      <Link href="/">
        <a>Product</a>
      </Link>
      <Link href="/home">
        <a>Home</a>
      </Link>
      <Link href="/subject">
        <a>Subject</a>
      </Link>
    </>
  )
};

export default ProductList;
