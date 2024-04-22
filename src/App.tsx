import { useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "swiper/css";
import "./App.css";
import "./tailwind.css";
import "./index.css";

import AuthProvider from "./context/auth";
import { AdminAuthLayout, AdminMainLayout } from "./layout";
// import { Register } from "./pages";
// import AppConfig from "./utilities/config"; // { BASE_API_ENDPOINT }
import { adminAuthRoutes, adminMainRoutes } from "./utilities/routes";
import AppWrapper from "./AppWrapper";
const router = createBrowserRouter([
  {
    element: <AdminAuthLayout />,
    // child route components
    children: [
      ...adminAuthRoutes.map((route) => ({
        path: route.path,
        Component: route.Component,
        children:
          route?.children?.map((childRoute) => ({
            path: childRoute.path,
            Component: childRoute.Component,
          })) || [],
      })),
    ],
  },
  {
    element: <AdminMainLayout />,
    // child route components
    children: [
      ...adminMainRoutes.map((route) => ({
        path: route.path,
        Component: route.Component,
        children:
          route?.children?.map((childRoute) => ({
            path: childRoute.path,
            Component: childRoute.Component,
          })) || [],
      })),
    ],
  },
]);

function App() {
  useEffect(() => {}, []);
  return (
    <div className="">
      <AppWrapper>
        <HelmetProvider>
          <AuthProvider>
            <RouterProvider router={router} />
          </AuthProvider>
        </HelmetProvider>
      </AppWrapper>
    </div>
  );
}

export default App;
