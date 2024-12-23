import React from 'react'

export default function AddQueries() {

    
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
    <h2 className="text-2xl font-bold text-gray-800 mb-6">Add New Query</h2>
    <form className="space-y-6">
      <div>
        <label htmlFor="productName" className="block text-sm font-medium text-gray-700 mb-1">
          Product Name
        </label>
        <input
          type="text"
          id="productName"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Enter product name"
        />
      </div>

      <div>
        <label htmlFor="productBrand" className="block text-sm font-medium text-gray-700 mb-1">
          Product Brand
        </label>
        <input
          type="text"
          id="productBrand"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Enter product brand"
        />
      </div>

      <div>
        <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700 mb-1">
          Product Image URL
        </label>
        <input
          type="url"
          id="imageUrl"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Enter image URL"
        />
      </div>

      <div>
        <label htmlFor="queryTitle" className="block text-sm font-medium text-gray-700 mb-1">
          Query Title
        </label>
        <input
          type="text"
          id="queryTitle"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Ex: Is there any better product that gives me the same quality?"
        />
      </div>

      <div>
        <label htmlFor="boycottReason" className="block text-sm font-medium text-gray-700 mb-1">
          Boycotting Reason Details
        </label>
        <textarea
          id="boycottReason"
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
  )
}
