import React, { useEffect, useState } from "react";
import axios from 'axios'
import { Link } from "react-router-dom";

export default function QueriesComponent() {
    const [products, setProducts] = useState([]);
    console.log(products)
    useEffect(()=>{
      fetchAllJobs();
    },[])
     
    const fetchAllJobs = async()=>{
      const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/products`)
      setProducts(data)
    };
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
    {
        products.slice(0, 6).map(product=>  <div className="card w-40 md:w-56 bg-base-100 shadow-xl mx-auto ">
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
  )
}
