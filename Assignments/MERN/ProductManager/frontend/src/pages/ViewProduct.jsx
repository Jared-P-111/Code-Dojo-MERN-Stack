import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ViewProduct = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const cleanUp = new AbortController();

    //prettier-ignore
    axios
      .get(`http://localhost:5001/api/products/${id}`, { signal: cleanUp.signal })
      .then((res) => setProduct(res.data))
      .catch(err => console.log(err))
    return () => cleanUp.abort();
  }, [id]);

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
            <div className="card-body">
              <a href="/products" className="card-link text-info">
                Home
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ViewProduct;
