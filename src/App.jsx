import { useState } from "react";

const productList = [
  {
    id: 1,
    name: "Product 1",
    image: "https://picsum.photos/200/120",
    description: "Desc 1",
  },
  {
    id: 2,
    name: "Product 2",
    image: "https://picsum.photos/200/120",
    description: "Desc 2",
  },
];

function App() {
  const [products, setProducts] = useState(productList);
  const [inputValue, setinputValue] = useState([]);
  const onHandleRemove = (id) => {
    const newProductList = products.filter((item) => {
      return item.id != id;
    });
    setProducts(newProductList);
  };
  const onHandleSubmit = (e) => {
    e.preventDefault();
    const newData = [...products, inputValue];
    setProducts(newData);
  };
  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setinputValue({ ...inputValue, [name]: value, id: 4 });
  };

  return (
    <>
      <form action="" onSubmit={onHandleSubmit}>
        <div>
          <label htmlFor="">name</label>
          <input type="text" name="name" onInput={onHandleChange} />
        </div>
        <div>
          <label htmlFor="">image</label>
          <input type="text" name="image" onInput={onHandleChange} />
        </div>
        <div>
          <label htmlFor="">description</label>
          <input type="text" name="description" onInput={onHandleChange} />
        </div>
        <button>Submit</button>
      </form>
      <table>
        <thead>
          <tr>
            <td>name</td>
            <td>image</td>
            <td>des</td>
            <td>action</td>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
              <tr key={product.id}>
                <td>
                  <img src={product.image} alt="" />
                </td>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>
                  <button onClick={() => onHandleRemove(product.id)}>
                    Xoa
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
export default App;
