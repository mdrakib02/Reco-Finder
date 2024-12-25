import React, { useEffect, useState } from "react";
import axios from 'axios'
import { Link } from "react-router-dom";

export default function FindFavoriteProducts() {
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
      e.preventDefault();
      console.log(searchTerm.trim());
      fetchAllProducts(searchTerm.trim())
    };

    useEffect(()=>{
      fetchAllProducts();
    },[])
     
    const fetchAllProducts = async(name)=>{
      console.log({name});
      
      const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/products?limit=${6}&${name ? `name=${name}`: ''}`)
      setProducts(data)
    };

  return (
    <>
    <form onSubmit={handleSearch} className="relative w-full max-w-4xl mx-auto p-4">
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="relative flex-1">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search products..."
              className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                ×
              </button>
            )}
          </div>
          <button
            type="submit"
            className="px-6 py-2 text-white bg-indigo-500 hover:bg-indigo-600 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-auto w-full"
          >
            Search
          </button>
        </div>
      </form>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 my-6 md:my-8 lg:my-12">
    {
        products.map(product=>  <div className="card w-40 md:w-56 bg-base-100 shadow-xl mx-auto ">
            <figure className="px-4 pt-4">
              <img
                src={product?.img}
                alt="Product"
                className="rounded-xl object-cover h-full w-28 md:w-32"
              />
            </figure>
            <div className="card-body">
              <span className="text-sm opacity-70">Brand: {product?.brand}</span>
              <h2 className="text-sm font-bold md:text-xl">{product?.title}</h2>
              <div className="card-actions mt-2">
                <Link to="/queries" ><button className="btn btn-primary btn-xs md:btn-sm">View Details</button></Link>
              </div>
            </div>
          </div>)
    }
  
      </div>
    </>
  )
}
