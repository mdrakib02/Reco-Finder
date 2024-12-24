import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import { motion } from "framer-motion";
import { Upload, User, Package, Mail, Building } from "lucide-react";
import { h1 } from "framer-motion/client";
import toast from "react-hot-toast";

export default function QueryDetails() {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  console.log(id);
  const [product, setProduct] = useState({});
  console.log(product);
  const [startDate, setStartDate] = useState(new Date());
  const [recomantaions, setRecomantaions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/product/${id}`
        );
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    fetchData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const recomandationTitle = form.recomandationTitle.value;
    const RecomandationProductName = form.RecomandationProductName.value;
    const RecomandationImgUrl = form.RecomandationImgUrl.value;
    const recomandateText = form.recomandateText.value;
    console.log(
      recomandationTitle,
      RecomandationProductName,
      RecomandationImgUrl,
      recomandateText
    );

    const recomandationData = {
      recomandationTitle,
      RecomandationProductName,
      RecomandationImgUrl,
      recomandateText,
      queryData: {
        queryId: product?._id,
        queryTitle: product?.title,
        productName: product?.name,
      },
      queryCreator: {
        email: product?.buyer?.email,
        name: product?.buyer?.name,
      },
      Recommender: {
        email: user?.email,
        name: user?.displayName,
        photo: user?.photoURL,
      },
      currentDate: startDate,
    };

    try {
      // Send data to backend
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/add-recomandation`,
        recomandationData
      );

      // Success message
      toast.success("Data Added Successfully!!!");
    } catch (err) {
      // Handle errors
      console.error(err.message);
      toast.error(err.response?.data || "Failed to add recommendation!");
    }
  };

  // Get Recomandation
  console.log(recomantaions);
  useEffect(() => {
    fetchAllJobs();
  }, []);

  const fetchAllJobs = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/recomantaions`
    );
    setRecomantaions(data);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col lg:flex-row gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:w-1/2"
        >
          <div className="card bg-base-100 shadow-xl h-full">
            <div className="card-body">
              <div className="border-b border-base-300 pb-6">
                <div className="flex items-center gap-4">
                  <div className="avatar">
                    <div className="w-20 rounded-full ring ring-indigo-400 ring-offset-2">
                      <img src={product?.buyer?.photo} alt="User" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <User size={18} className="text-indigo-500" />
                      <h3 className="font-bold text-lg">
                        {product?.buyer?.name}
                      </h3>
                    </div>
                    <div className="flex items-center gap-2 text-base-content/70">
                      <Mail size={18} />
                      <p>{product?.buyer?.email}</p>
                    </div>
                    <div className="flex items-center gap-2 text-base-content/70">
                      <Building size={18} />
                      <p>Senior Developer</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <img
                    src={product?.img}
                    alt="Product"
                    className="rounded-xl w-full md:w-1/2 object-cover shadow-lg"
                  />
                  <div className="space-y-4">
                    <div className="badge bg-indigo-500 text-white">
                      Featured Product
                    </div>
                    <h3 className="text-xl font-bold">{product?.name}</h3>
                    <p className="text-base-content/70">{product?.brand}</p>
                    <div className="flex gap-2">
                      <div className="badge badge-outline">Wireless</div>
                      <div className="badge badge-outline">
                        Noise Cancelling
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Recomandations Sections */}
              <div className="">
                <h2 className="text-2xl font-bold mb-6">All Recommendations</h2>

                <div className="space-y-6">
                  {recomantaions.map((rec) => (
                    <div key={rec._id} className="card bg-base-100 shadow-lg">
                      <div className="card-body">
                        {/* User Info & Date */}
                        <div className="flex items-center gap-4 mb-4">
                          <div className="avatar">
                            <div className="w-10 h-10 rounded-full">
                              <img src={rec.Recommender?.photo} alt={rec.userName} />
                            </div>
                          </div>
                          <div>
                            <h3 className="font-semibold">{rec.userName}</h3>
                            <time className="text-sm text-gray-500">
                              {new Date(
                                rec.currentDate
                              ).toLocaleDateString()}
                            </time>
                          </div>
                        </div>

                        {/* Recommendation Text */}
                        <p className="text-gray-700 mb-4">
                          {rec.recomandateText}
                        </p>

                        {/* Recommendation Image */}
                        {rec.recommendationImage && (
                          <div className="rounded-lg overflow-hidden">
                            <img
                              src={rec.RecomandationImgUrl}
                              alt="Recommendation"
                              className="w-full h-auto object-cover"
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:w-1/2"
        >
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-2xl mb-6">Add Recommendation</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="form-control">
                  <input
                    type="text"
                    name="recomandationTitle"
                    placeholder="Recommendation Title"
                    className="input input-bordered w-full focus:ring-2 ring-indigo-500"
                    required
                  />
                </div>

                <div className="form-control">
                  <input
                    type="text"
                    name="RecomandationProductName"
                    placeholder="Recommended Product Name"
                    className="input input-bordered w-full focus:ring-2 ring-indigo-500"
                    required
                  />
                </div>

                <div className="form-control">
                  <input
                    type="text"
                    name="RecomandationImgUrl"
                    placeholder="Recommended Img Url"
                    className="input input-bordered w-full focus:ring-2 ring-indigo-500"
                    required
                  />
                </div>

                <div className="form-control">
                  <textarea
                    name="recomandateText"
                    placeholder="Why do you recommend this product?"
                    className="textarea textarea-bordered h-32 focus:ring-2 ring-indigo-500"
                    required
                  />
                </div>

                <button className="btn bg-indigo-500 w-full hover:bg-indigo-500 text-white hover:ring-indigo-500">
                  Submit Recommendation
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
