import React from "react";

const ProductAdd = (props) => {
  const { onHandleChange, onHandleSubmit, errors } = props;
  const errorDetails = errors.map((item) => {
    return { [item.context.label]: item.message };
  });
  const [errorName, errorPrice, errorDescription] = errorDetails;

  return (
    <div>
      <form onSubmit={onHandleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            placeholder="name"
            onInput={onHandleChange}
          />
          <span>{errorName?.name}</span>

          <input
            type="text"
            name="price"
            placeholder="price"
            onInput={onHandleChange}
          />
          <span>{errorPrice?.price}</span>

          <input
            type="text"
            name="description"
            placeholder="des"
            onInput={onHandleChange}
          />
          <span>{errorDescription?.description}</span>
        </div>
        <button>submit</button>
      </form>
    </div>
  );
};

export default ProductAdd;
