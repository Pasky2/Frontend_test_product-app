import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetails";
import Modal from 'react-modal';

Modal.setAppElement('#root')
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ProductList />} /> 
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes> 
    </div>
  );
};

export default App;
