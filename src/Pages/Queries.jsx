import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { LayoutGrid, Layout, Rows } from 'lucide-react';

export default function Queries() {
  const [products, setProducts] = useState([]);
  const [layout, setLayout] = useState('grid-5'); 
  const [category, setCategory] = useState('all'); //  category filter

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

  // Get grid class based on selected layout
  const getGridClass = () => {
    switch(layout) {
      case 'grid-2':
        return 'grid grid-cols-1 md:grid-cols-2 gap-5';
      case 'grid-3':
        return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5';
      case 'grid-5':
        return 'grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5';
      default:
        return 'grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5';
    }
  };

  // Products category filter
  const filteredQueries = category === 'all' 
    ? sortedQueries 
    : sortedQueries.filter(query => query.category === category);
  return (
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-6 md:my-8 lg:my-12">
      {/* Control Panel */}
      <div className="flex justify-between items-center mb-6">
        {/* Layout Toggle Btn */}
        <div className="join">
          <button 
            onClick={() => setLayout('grid-2')}
            className={`join-item btn btn-sm ${layout === 'grid-2' ? 'btn-active' : ''}`}
          >
            <Layout size={16} />
          </button>
          <button 
            onClick={() => setLayout('grid-3')}
            className={`join-item btn btn-sm ${layout === 'grid-3' ? 'btn-active' : ''}`}
          >
            <Rows size={16} />
          </button>
          <button 
            onClick={() => setLayout('grid-5')}
            className={`join-item btn btn-sm ${layout === 'grid-5' ? 'btn-active' : ''}`}
          >
            <LayoutGrid size={16} />
          </button>
        </div>

        {/* optional category */}
        <select 
          className="select select-bordered select-sm"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="all">All Categories</option>
          <option value="electronics ">Electronics</option>
          <option value="cloth">Clothing</option>
          <option value="cosmetics">Cosmetics</option>
          <option value="digital-product">Digital Products</option>
          <option value="sports">Sports Products</option>
         
        </select>
      </div>

      {/* Products grids*/}
      <div className={getGridClass()}>
        {filteredQueries.map((query) => (
          <div
            key={query._id}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
          {/* img  */}
            <div className="max-w-64 max-h-48 min-h-36 min-w-28 overflow-hidden">
              <img
                src={query.img}
                alt={query.title}
                className="w-full h-full object-cover transition-transform hover:scale-105"
              />
            </div>
            <div className="p-4">
             
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
        ))}
      </div>
    </div>
  );
}

