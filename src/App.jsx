import { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import ProductList from "./pages/ProductList";
import HomaPage from "./pages/HomaPage";
import ProductUpdate from "./pages/ProductUpdate";
import ProductAdd from "./pages/ProductAdd";

function App() {
  const [products, setProducts] = useState([]);
  const [inputValue, setInputValue] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log(error));
  }, []);
  const onHandleRemove = (id) => {
    if (confirm("Ban co muon xoa khong?") == true) {
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

    fetch(`http://localhost:3000/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputValue),
    })
      .then((response) => response.json())
      .then((data) => setProducts([...products, data]))
      .then(() => navigate("/admin/products/list"));
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
      .then((data) => console.log(data))
      .then(() => navigate("/admin/products/list"));
  };
  return (
    <>
      <Routes>
        <Route path="/admin" element={<HomaPage />} />
        <Route
          path="/admin/products/list"
          element={
            <ProductList products={products} onHandleRemove={onHandleRemove} />
          }
        />
        <Route
          path="/admin/products/:id/update"
          element={
            <ProductUpdate
              products={products}
              onHandleUpdate={onHandleUpdate}
            />
          }
        />
        <Route
          path="/admin/products/add"
          element={
            <ProductAdd
              onHandleChange={onHandleChange}
              onHandleSubmit={onHandleSubmit}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
