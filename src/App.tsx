import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loader from "./components/Loader/Loader";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrivateRoute from "./PrivateRoute";

const DefaultLayout = lazy(() => import("./layouts/DefaultLayout"));
const Login = lazy(() => import("./pages/auth/Login"));

const App = () => {
  return (
    <>
      <ToastContainer position="top-right" />

      <BrowserRouter>
        <Suspense
          fallback={
            <div className="w-full h-screen flex flex-col">
              <Loader />
            </div>
          }
        >
          <Routes>
            <Route path="auth/login" element={<Login />} />

            <Route
              path="*"
              element={
                <PrivateRoute>
                  <DefaultLayout />
                </PrivateRoute>
              }
            />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
};

export default App;
