import React from "react";

const Add = (props) => {
  const { onHandleSubmit, onHandleChange, errors } = props;
  const errorDetails = errors.map((item) => {
    return { [item.context.label]: item.message };
  });
  const [errorName, errorPrice, errorDescription] = errorDetails;
  return (
    <>
      <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow-md">
        <p className="font-bold mb-2 mt-2 text-center text-xl ">Add product</p>
        <form action="" onSubmit={onHandleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              placeholder="name"
              onInput={onHandleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
            <span className="text-red-500 text-sm">{errorName?.name}</span>
          </div>
          <div>
            <label className="block text-gray-700">Price</label>
            <input
              type="text"
              name="price"
              placeholder="price"
              onInput={onHandleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
            <span className="text-red-500 text-sm">{errorPrice?.price}</span>
          </div>
          <div>
            <label className="block text-gray-700">Description</label>
            <input
              type="text"
              name="description"
              placeholder="description"
              onInput={onHandleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
            <span className="text-red-500 text-sm">
              {errorDescription?.description}
            </span>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Add;
