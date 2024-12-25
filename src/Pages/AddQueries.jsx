import React, { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function AddQueries() {
  const { user } = useContext(AuthContext);
  const [startDate, setStartDate] = useState(new Date());
  const navigate = useNavigate();
  console.log(user);
  const addQueries = async(e) => {
    e.preventDefault();
    console.log("hi");
    const form = e.target;
    const name = form.name.value;
    const brand = form.brand.value;
    const img = form.img.value;
    const title = form.title.value;
    const category = form.category.value;
    const boycokDetail = form.boycokDetail.value;
    console.log(name, brand, img, title, boycokDetail);

    const addFormData = {
      name,
      brand,
      img,
      title,
      category,
      buyer: {
        email: user?.email,
        name: user?.displayName,
        photo: user?.photoURL,
      },
      boycokDetail,
      deadline: startDate,
      recommendationCount: 0,
    };
    
    try {
      const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/add-product`, addFormData)
      console.log(data)
      toast.success('Data Added Successfully!!!');
      form.reset()
      navigate("/my-queries")

    } catch (err) {
      console.log(err.message)
      toast.error(err.message)
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Add New Query</h2>
      <form onSubmit={addQueries} className="space-y-6">
        {/* product NAme */}
        <div>
          <label
            htmlFor="productName"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Product Name
          </label>
          <input
            type="text"
            name="name"
            id="productName"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter product name"
          />
        </div>

        {/* Product Brand */}
        <div>
          <label
            htmlFor="productBrand"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Product Brand
          </label>
          <input
            type="text"
            name="brand"
            id="productBrand"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter product brand"
          />
        </div>

        {/* Img Url */}
        <div>
          <label
            htmlFor="imageUrl"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Product Image URL
          </label>
          <input
            type="url"
            id="imageUrl"
            name="img"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter image URL"
          />
        </div>

        {/* title */}
        <div>
          <label
            htmlFor="queryTitle"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Query Title
          </label>
          <input
            type="text"
            name="title"
            id="queryTitle"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Ex: Is there any better product that gives me the same quality?"
          />
        </div>
        <div className="flex flex-col gap-4">
          <label htmlFor="category" className="font-medium text-lg">Select a Category:</label>
          <select
          name="category"
            id="category"
            className="border rounded-md px-4 py-2 text-gray-700"
          >
            <option value="all">All</option>
            <option value="electronics">Electrics</option>
            <option value="cloth">Cloth</option>
            <option value="cosmetics">Cosmetics</option>
            <option value="digital-product">Digital Product</option>
          </select>
        </div>

        {/* Boycoting details */}
        <div>
          <label
            htmlFor="boycottReason"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Boycotting Reason Details
          </label>
          <textarea
            id="boycottReason"
            name="boycokDetail"
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter the reason you don't want this product"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors"
        >
          Add Query
        </button>
      </form>
    </div>
  );
}
