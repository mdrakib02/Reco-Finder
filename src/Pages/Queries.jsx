import React, { useEffect, useState } from "react";
import axios from "axios";
import { key } from "localforage";
import { Link } from "react-router-dom";

export default function Queries() {
  const [products, setProducts] = useState([]);
  console.log(products);
  useEffect(() => {
    fetchAllJobs();
  }, []);

  const fetchAllJobs = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/products`
    );
    setProducts(data);
  };

  const sortedQueries = [...products].sort(
    (a, b) => b.recommendationCount - a.recommendationCount
  );
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
      {sortedQueries.map((query) => (
        <div
          key={query._id}
          className="bg-white rounded-lg shadow-lg overflow-hidden"
        >
          {/* Image Container */}
          <div className="h-48 overflow-hidden">
            <img
              src={query.img}
              alt={query.title}
              className="w-full h-full object-cover transition-transform hover:scale-105"
            />
          </div>

          {/* Content Container */}
          <div className="p-4">
            {/* Recommendation Count */}
            <div className="flex items-center gap-2 mb-3">
              <span className="text-sm font-medium text-gray-600">
                {query.recommendationCount} recommendations
              </span>
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold mb-4 text-gray-800">
              {query.title}
            </h3>

            {/* Button */}
            <Link to={`/query-details/${query._id}`}>
              <button className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition-colors text-sm font-medium">
                Recommend
              </button>
            </Link>
          </div>
        </div>
      ))}{" "}
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
