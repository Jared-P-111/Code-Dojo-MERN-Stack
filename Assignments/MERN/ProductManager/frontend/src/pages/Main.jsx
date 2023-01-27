import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

const Main = () => {
  const [products, setProducts] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const cleanUp = new AbortController();
    axios
      .get('http://localhost:5001/api/products', { signal: cleanUp.signal })
      .then((res) => {
        setProducts(res.data);
        setLoaded(true);
      })
      .catch((err) => console.log(err));
    return () => cleanUp.abort();
  }, [loaded]);

  return (
    <div>
      <ProductForm setLoaded={setLoaded} />
      {loaded && <ProductList products={products} setLoaded={setLoaded} />}
    </div>
  );
};

export default Main;
