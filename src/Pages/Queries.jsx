import React, { useEffect, useState } from "react";
import axios from 'axios'
import { key } from "localforage";

export default function Queries() {
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
                    <button className="btn btn-primary btn-xs md:btn-sm">View Details</button>
                  </div>
                </div>
              </div>)
        }
      
    </div>
  );
}


// {
//     "_id": "676952cb7fa02ff169830446",
//     "name": "Watch",
//     "brand": "Samgsang",
//     "img": "https://i.ibb.co.com/HGL0Jgy/pngwing-com-23.png",
//     "title": "Mobile Watch",
//     "buyer": {
//         "email": "mdrakibahmed514@gmail.com",
//         "name": "Md Rakib",
//         "photo": "https://lh3.googleusercontent.com/a/ACg8ocI2Uv-ubYkIaMNCFwuYq0-_76qO2RUBvYwAkIVlHakHpY7Db51E=s96-c"
//     },
//     "detail": "Mobile watches, also known as smartwatches, are wearable devices that offer functionalities beyond timekeeping. These devices integrate features similar to ...",
//     "deadline": "2024-12-23T11:56:36.174Z",
//     "recommendationCount": 0
// }