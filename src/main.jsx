import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import AuthProvider from "./Provider/AuthProvider";
import { Toaster } from "react-hot-toast";
import { router } from "./Routes/Routes";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
        <Toaster position="top-right" reverseOrder={false} />
      </AuthProvider>
    </React.StrictMode>
  </StrictMode>
);
