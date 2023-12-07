import React, { useState, useEffect } from "react";
import Header from "./Header";
// import Footer from "./Footer";
import { BeatLoader } from "react-spinners";
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
    }, 1000)
  }, []);

  return (
    <div>
      <Header />
      <h1 className="p-8 text-2xl font-bold">Product List</h1>

      {loading && (
        <div>
          <BeatLoader className="text-center"  size={24}/>
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
     
      <div className="bg-zinc-950 h-52 mt-8 text-center py-8">
        <h1 className="text-white mb-4 text-lg">Pasky2great.com</h1>
        <div className="mb-4">
            <Link to='/' className="mx-4 my-4 text-white  hover:border-b-2 hover:text-gray-400 decoration-solid">About</Link>
            <Link to='/' className="mx-4 my-4 text-white  hover:border-b-2 hover:text-gray-400 decoration-solid">Blog</Link>
            <Link to='/' className="mx-4 my-4 text-white  hover:border-b-2 hover:text-gray-400 decoration-solid">Products</Link>
            <Link to='/' className="mx-4 my-4 text-white  hover:border-b-2 hover:text-gray-400 decoration-solid">Categories</Link>
        </div>
        <p className="text-gray-400">Copyright @2023. All rights reserved, Pascal.</p>
      </div>
    </div>
  );
};

export default ProductList;
