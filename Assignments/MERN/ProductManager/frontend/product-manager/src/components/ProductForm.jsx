import { useState } from 'react';
import axios from 'axios';

const ProductForm = () => {
  const [product, setProduct] = useState({ title: '', price: '', description: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:5001/api/products', product)
      .then((res) => {
        setProduct(res.data);
        console.log(res.data);
        setProduct({ title: '', price: '', description: '' });
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  return (
    <div className="card mt-5">
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div>
            <h1>Product Manager</h1>
            <label htmlFor="product" className="form-label">
              Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              className="form-control mb-3"
              value={product.title}
              onChange={handleChange}
              placeholder="Enter product name"
            />
            <label htmlFor="price" className="form-label">
              Price
            </label>
            <input
              type="number"
              name="price"
              id="price"
              className="form-control mb-3"
              value={product.price}
              onChange={handleChange}
              placeholder="Enter price"
            />
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <input
              type="text"
              name="description"
              id="description"
              className="form-control"
              value={product.description}
              onChange={handleChange}
              placeholder="Enter description"
            />
          </div>
          <div className="d-flex justify-content-end">
            <button type="submit" className="btn-primary mt-5">
              CREATE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;
