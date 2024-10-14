import React from "react";
import { Link } from "react-router-dom";
const ProductList = (props) => {
  const { onHandleRemove, products } = props;

  return (
    <>
      <table>
        <thead>
          <tr>
            <td>name</td>
            <td>price</td>
            <td>des</td>
            <td>action</td>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.description}</td>
                <td>
                  <button onClick={() => onHandleRemove(product.id)}>
                    Xoa
                  </button>
                </td>
                <Link to={`/products/${product.id}/update`}>Update</Link>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default ProductList;
