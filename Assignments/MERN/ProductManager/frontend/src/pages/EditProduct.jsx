import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditProduct = () => {
  const navigateTo = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState({ name: '', price: '', description: '' });

  useEffect(() => {
    const cleanUp = new AbortController();
    console.log(`ID is: ${id}`);
    axios
      .get(`http://localhost:5001/api/products/${id}`, {
        signal: cleanUp.signal,
      })
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => console.log(err));
    return () => cleanUp.abort();
  }, [id, navigateTo]);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
    console.log(product);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(product);
    axios
      .put(`http://localhost:5001/api/products/${id}`, product)
      .then((res) => {
        console.log(res.data);
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
              <h1 className="card-title">Edit Product</h1>
              <form onSubmit={handleSubmit} id="edit-form">
                <label htmlFor="name" className="form-label">
                  Edit Product name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="form-control"
                  value={product.name}
                  onChange={handleChange}
                />
                <label htmlFor="price" className="form-label">
                  Edit Product price
                </label>
                <input
                  type="number"
                  name="price"
                  id="price"
                  className="form-control"
                  value={product.price}
                  onChange={handleChange}
                />
                <label htmlFor="description" className="form-label">
                  Edit Product description
                </label>
                <input
                  type="text"
                  name="description"
                  id="description"
                  className="form-control"
                  value={product.description}
                  onChange={handleChange}
                />
              </form>
              <div className="d-flex justify-content-between mt-3">
                <a href="/products" className="card-link text-info">
                  Home
                </a>
                <button className="btn btn-success btn-sm" type="submit" form="edit-form">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EditProduct;
