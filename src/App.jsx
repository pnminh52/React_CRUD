import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import ProductList from "./pages/ProductList";
import ProductUpdate from "./pages/ProductUpdate";
import ProductAdd from "./pages/ProductAdd";
import { productSchema } from "./schema/Product";

function App() {
  const [products, setProducts] = useState([]);
  const [inputValue, setInputValue] = useState({});
  const [errorList, setErrorList] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);
  const onHandleRemove = (id) => {
    if (confirm("delete?") == true) {
      fetch(`http://localhost:3000/products/${id}`, {
        method: "DELETE",
      });
      const newProductList = products.filter((item) => {
        return item.id != id;
      });
      setProducts(newProductList);
    }
  };

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    const { error } = productSchema.validate(inputValue, { abortEarly: false });
    if (error) {
      setErrorList(error.details);

      return;
    }

    fetch(`http://localhost:3000/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputValue),
    })
      .then((response) => response.json())
      .then((data) => setProducts([...products, data]), alert("done!"))
      .then(() => navigate("/products/list"));
  };

  const onHandleUpdate = (product) => {
    fetch(`http://localhost:3000/products/${product.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((response) => response.json())
      .then((data) => {
        setProducts(products.map((item) => (item.id == data.id ? data : item)));
        alert("done!");
      })
      .then(() => navigate("/products/list"));
  };

  return (
    <>
      <Routes>
        <Route
          path="/products/add"
          element={
            <ProductAdd
              onHandleChange={onHandleChange}
              onHandleSubmit={onHandleSubmit}
              errors={errorList}
            />
          }
        />
        <Route
          path="/products/list"
          element={
            <ProductList products={products} onHandleRemove={onHandleRemove} />
          }
        />
        <Route
          path="/products/:id/update"
          element={
            <ProductUpdate
              products={products}
              onHandleUpdate={onHandleUpdate}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
