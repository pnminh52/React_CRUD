import React from "react";
import { Link } from "react-router-dom";
const List = (props) => {
  const { products, onHandleRemove } = props;
  return (
    <>
      <a
        href="/products/add"
        className=" mt-2 ml-2 mb-2 inline-block rounded border border-green-600 bg-green-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-green-600 focus:outline-none focus:ring active:text-green-500"
      >
        Add product
      </a>
      <div className="overflow-x-auto">
        <table className=" min-w-[70%] divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Name
              </td>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Price
              </td>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Description
              </td>
              <td className="whitespace-nowrap px-32 py-2 font-medium text-gray-900">
                Action
              </td>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {products.map((product) => {
              return (
                <tr key={product.id}>
                  <td className=" whitespace-nowrap px-4 py-2 text-sm font-thin text-gray-900">
                    {product.name}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-sm font-thin text-gray-900">
                    {" "}
                    {product.price}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-sm font-thin text-gray-900">
                    {product.description}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-sm font-thin text-gray-900">
                    <button
                      className=" mt-2 ml-2 mb-2 inline-block rounded border border-red-600 bg-red-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-red-600 focus:outline-none focus:ring active:text-red-500"
                      onClick={() => onHandleRemove(product.id)}
                    >
                      Delete
                    </button>
                    <Link
                      className=" mt-2 ml-2 mb-2 inline-block rounded border border-yellow-500 bg-yellow-500 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-yellow-500 focus:outline-none focus:ring active:text-yellow-500"
                      to={`/products/${product.id}/update`}
                    >
                      <button>Update</button>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default List;
