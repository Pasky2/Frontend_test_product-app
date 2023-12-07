import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Modal from "react-modal";
import axios from "axios";


const ProductDetail = () => {
  const Navigate = useNavigate();
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [inputData, setInputData] = useState({
    name: '',
    category: '',
    description: ''
  });

  useEffect(() => {
    axios.get(`https://jsonplaceholder.org/posts/${id}`)
      .then((response) => setProduct(response.data))
  }, [id]);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.org/posts/${id}`)
    .then((response) => response.json())
    .then((data) => setInputData(data))
    .catch(error => console.log(error));
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put(`https://jsonplaceholder.org/posts/${id}`, product)
    .then ((response) => {
      alert('Data Updated Successfully')
      Navigate('/')
    })
  }


  return (
    <div className="md:flex justify-around items-center shadow-lg p-4 m-auto bg-slate-900 text-white">
      <div>
        <img src={product.thumbnail} alt="product.title" className="w-full" />
      </div>
      <div className=" md:w-7/12">
        <h1 className="my-4 font-bold">Product Details</h1>
        <h2 className="mb-3">Price: ${product.id}</h2>
        <p className="mb-3">Name: {product.slug}</p>
        <p className="mb-3">Category: {product.title}</p>
        <h3>Description:</h3>
        <p className="text-gray-300">{product.content}</p>

        <div className="my-6">
          <Link
            to="/"
            className="py-2 px-4 border border-gray-200 rounded-md mx-2"
          >
            Go Back
          </Link>
          <Link 
            className="py-2 px-4 border border-gray-200 rounded-md mx-2"
            onClick={() => setModalIsOpen(true)}
          >
            Edit Details
          </Link>
        </div>
      </div>

      <div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          style={{
            overlay: {
              backgroundColor: "rgba(10, 10, 10, .96",
            },
            content: {
              width: "300px",
              height: "400px",
              margin: "0 auto",
            },
          }}
        >
          <button
            onClick={() => setModalIsOpen(false)}
            className=" mb-8 border border-gray-600 rounded-md py-1 px-2  hover:bg-gray-950 hover:text-white "
          >
            Close
          </button>

          <form className="my-8" onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
              onChange={e => setInputData({...inputData, name: e.target.value})}
              value={inputData.slug}
                type="text"
                placeholder="Name"
                className="w-full border rounded-md py-2 pl-6 shadow-sm focus:outline-none placeholder:italic placeholder:text-slate-400 block border-slate-600"
              />
            </div>

            <div className="mb-3">
              <input
              value={inputData.title}
              onChange={e => setInputData({...inputData, category: e.target.value})}
                type="text"
                placeholder="Category"
                className="w-full border rounded-md py-2 pl-6 shadow-sm focus:outline-none placeholder:italic placeholder:text-slate-400 block border-slate-600"
              />
            </div>

            <div className="mb-3">
              <textarea
              onChange={e => setInputData({...inputData, description: e.target.value})}
              value={inputData.content}
                type="text"
                placeholder="Description"
                className="w-full border rounded-md py-2 pl-6 shadow-sm focus:outline-none placeholder:italic placeholder:text-slate-400 block border-slate-600"
              />
            </div>

            <div>
              <button
                type="submit"
                className="text-slate-900 py-2 px-4 border border-gray-600 rounded-md mx-2 hover:bg-gray-950 hover:text-white"
              >
                Update
              </button>
            </div>
          </form>
        </Modal>
      </div>
    </div>
  );
};

export default ProductDetail;
