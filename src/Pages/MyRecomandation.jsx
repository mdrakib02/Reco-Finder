import { Trash2, User } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import AuthContext from "../Provider/AuthContext";
export default function MyRecomandation() {
  const {user} = useContext(AuthContext)
  const [recomandations, setRecomandations] = useState([]);
  console.log(recomandations);
  useEffect(() => {
    fetchAllJobs();
  }, []);

  const fetchAllJobs = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/my-recomandations/${user?.email}`
    );
    setRecomandations(data);
  };
  // Delete Functionality
  const handleDelete = (id) => {
    toast(
      (t) => (
        <div className="flex flex-col gap-4">
          <p>Are you sure you want to delete?</p>
          <div className="flex gap-2">
            <button
              onClick={async () => {
                try {
                  await axios.delete(
                    `${import.meta.env.VITE_API_URL}/recomandation/${id}`
                  );
                  toast.success("Recommendation deleted successfully!");
                  fetchAllJobs();
                } catch (err) {
                  console.log(err.message);
                  toast.error(err.message);
                }
                toast.dismiss(t.id);
              }}
              className="bg-red-500 text-white px-3 py-2 rounded-md text-sm"
            >
              Delete
            </button>
            <button
              onClick={() => toast.dismiss(t.id)}
              className="bg-gray-200 px-3 py-2 rounded-md text-sm"
            >
              Cancel
            </button>
          </div>
        </div>
      ),
      {
        duration: 5000, // Toast will stay for 5 seconds
        position: "top-center",
      }
    );
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* Rest of your table code stays exactly the same */}
          <thead>
            <tr>
              <th>Recommender</th>
              <th>Title</th>
              <th>Recommendation</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {recomandations.map((rec) => (
              <tr key={rec._id} className="hover">
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="w-12 h-12 rounded-full bg-gray-100">
                        {rec.Recommender ? (
                          <img
                            src={rec.Recommender?.photo}
                            alt=""
                            onError={(e) => {
                              e.target.style.display = "none";
                              e.target.parentNode.innerHTML =
                                '<div class="w-full h-full flex items-center justify-center bg-gray-200"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-gray-500"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></div>';
                            }}
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-gray-200">
                            <User className="w-6 h-6 text-gray-500" />
                          </div>
                        )}
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{rec.Recommender?.name}</div>
                    </div>
                  </div>
                </td>
                <td className="font-medium">{rec.recomandationTitle}</td>
                <td className="max-w-md">
                  <div className="line-clamp-2">
                    {rec.recomandateText?.slice(0, 20)}
                    {rec.recomandateText?.length > 20 && "..."}
                  </div>
                </td>
                <td>{new Date(rec.currentDate).toLocaleDateString()}</td>
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
