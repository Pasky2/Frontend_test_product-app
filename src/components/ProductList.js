import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    setLoading(true);
    const response = await axios.get("https://jsonplaceholder.org/posts");
    setProducts(response.data);
    console.log(products);
    setLoading(false);
  };

  useEffect(() => {
    setTimeout(() => {
      fetchProducts();
      setLoading(false);
    }, 500)
  }, []);

  return (
    <div>
      <Header />
      <h1 className="p-8 text-2xl font-bold">Product List</h1>

      {loading && (
        <div className="text-center">
          <h4>Loading...</h4>
        </div>
      )}

      <ul className="md:grid md:grid-rows-4  grid-flow-col gap-4 mx-10 md:px-10">
        {products?.length > 0 ? (
          products.slice(0, 16).map((product) => (
            <li key={product.id} className="p-2 rounded-lg border my-3 hover:translate-y-2">
              <Link to={`product/${product.id}`}>
                <img src={product.thumbnail} alt={product.title} className="w-full"/>
               <p>Name: {product.slug}</p>
               <p>Price: {`$${product.id}`}</p> 
              </Link>
            </li>
          ))
        ) : (
          <p className="text-center text-lg">Products not found</p>
        )}
      </ul>
      <Footer />
    </div>
  );
};

export default ProductList;
