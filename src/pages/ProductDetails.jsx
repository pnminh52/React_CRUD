import { useParams } from "react-router-dom";

import React from "react";

const ProductDetails = ({ products }) => {
  const { id } = useParams();
  const currentProduct = products?.find((item) => item.id == id);
  return (
    <>
      <h1>Chi tiet san pham</h1>
      <div>
        <img src={currentProduct.image} alt="" />
        <h2>{currentProduct.name}</h2>
        <p>{currentProduct.description}</p>
      </div>
    </>
  );
};

export default ProductDetails;
