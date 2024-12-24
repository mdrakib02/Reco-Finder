import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../Provider/AuthProvider";
import { Trash2, User } from "lucide-react";
export default function RecomdationForME() {
  const { user } = useContext(AuthContext);
  const [myRecomandation, setMyRecomandation] = useState([]);
  console.log(myRecomandation);
  useEffect(() => {
    fetchAllJobs();
  }, []);

  const fetchAllJobs = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/my-recomandations/${user?.email}`
    );
    setMyRecomandation(data);
  };
  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="overflow-x-auto bg-base-100 rounded-lg shadow-lg">
        <table className="table table-zebra w-full">
          {/* Table Header */}
          <thead className="bg-base-200">
            <tr>
              <th>Recommender</th>
              <th>Product Details</th>
              <th>Recommendation</th>
              <th>Query Info</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {myRecomandation.map((rec) => (
              <tr key={rec._id}>
                {/* Recommender Info */}
                <td className="min-w-[200px]">
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="w-12 h-12 rounded-full">
                        {rec.Recommender.photo ? (
                          <img
                            src={rec.Recommender.photo}
                            alt=""
                            className="object-cover"
                            onError={(e) => {
                              e.target.style.display = "none";
                              e.target.parentNode.innerHTML =
                                '<div class="w-full h-full flex items-center justify-center bg-gray-200"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-gray-500"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></div>';
                            }}
                          />
                        ) : (
                          <User className="w-6 h-6" />
                        )}
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{rec.Recommender.name}</div>
                      <div className="text-sm opacity-50">
                        {rec.Recommender.email}
                      </div>
                    </div>
                  </div>
                </td>

                {/* Product Details */}
                <td className="min-w-[200px]">
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="w-16 h-16 rounded">
                        <img
                          src={rec.RecomandationImgUrl}
                          alt={rec.RecomandationProductName}
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">
                        {rec.RecomandationProductName}
                      </div>
                      <div className="text-sm opacity-70">
                        {rec.recomandationTitle}
                      </div>
                    </div>
                  </div>
                </td>

                {/* Recommendation Text */}
                <td className="max-w-xs">
                  <div className="line-clamp-2">{rec.recomandateText}</div>
                </td>

                {/* Query Info */}
                <td className="min-w-[200px]">
                  <div className="font-medium">{rec.queryData.queryTitle}</div>
                  <div className="text-sm opacity-50">
                    by {rec.queryCreator.name}
                  </div>
                </td>

                {/* Date */}
                <td className="whitespace-nowrap">
                  {new Date(rec.currentDate).toLocaleDateString()}
                </td>

                {/* Action */}
                <td>
                  <button
                    onClick={() => handleDelete(rec._id)}
                    className="btn btn-ghost btn-sm text-red-500 hover:bg-red-50"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
