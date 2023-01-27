import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ViewProduct = () => {
  const navigateTo = useNavigate();
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const cleanUp = new AbortController();
    console.log('ID on productView = ' + id);
    //prettier-ignore
    axios
      .get(`http://localhost:5001/api/products/${id}`, { signal: cleanUp.signal })
      .then((res) => setProduct(res.data))
      .catch(err => console.log(err))
    return () => cleanUp.abort();
  }, [id]);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5001/api/products/${id}`)
      .then((res) => {
        navigateTo('/products');
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      {product && (
        <div className="d-flex vh-100 justify-content-center align-items-center bg-dark">
          <div className="card" style={{ width: '30rem' }}>
            <div className="card-body">
              <h1 className="card-title">{product.name}</h1>
              <p className="card-text text-lg-start">{product.description}</p>
            </div>
            <div className="card-body">
              <h1>Price: {product.price}</h1>
            </div>
            <div className="card-body d-flex justify-content-between">
              <a href="/products" className="card-link text-info">
                Home
              </a>
              <button className="btn btn-danger btn-sm" onClick={() => handleDelete(product._id)}>
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ViewProduct;
