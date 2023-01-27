import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ProductList = ({ products, setLoaded }) => {
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5001/api/products/${id}`)
      .then((res) => {
        console.log(res.data);
        setLoaded(false);
      })
      .catch((err) => console.log(err));
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
            <tr className="table-active" key={product._id}>
              <td className="align-middle">{product.name}</td>
              <td className="align-middle">{product.description}</td>
              <td className="align-middle">{product.price}</td>
              <td className="text-center">
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(product._id)}>
                  Delete
                </button>
                <Link className="btn btn-warning btn-sm m-1" to={`/products/edit/${product._id}`}>
                  Edit
                </Link>
                <Link className="btn btn-info btn-sm" to={`/products/${product._id}`}>
                  View
                </Link>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ProductList;
