import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductList = ({ products }) => {
  const nav = useNavigate();

  const onClickHandler = (id) => {
    nav(`/products/${id}`);
  };

  return (
    <table className="table table-hover mt-4">
      <thead>
        <tr className="">
          <th scope="col">
            <h5>Product Name</h5>
          </th>
          <th scope="col">
            <h5>Description</h5>
          </th>
          <th scope="col">
            <h5>Price</h5>
          </th>
          <th scope="col" className="text-center">
            <h5>Action</h5>
          </th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => {
          return (
            <tr
              className="table-active"
              onClick={() => onClickHandler(product._id)}
              key={product._id}
            >
              <td className="align-middle">{product.name}</td>
              <td className="align-middle">{product.description}</td>
              <td className="align-middle">{product.price}</td>
              <td className="text-center">
                <button className="btn btn-danger btn-sm">Delete</button>
                <button className="btn btn-warning btn-sm m-1">Edit</button>
                <button className="btn btn-info btn-sm" onClick={() => onClickHandler(product._id)}>
                  View
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ProductList;
