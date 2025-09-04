import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import DefaultLayout from "../layouts/DefaultLayout.index";
import ProductDetailPage from "../pages/ProductDetailPage";
import CartPage from "../pages/CartPage";

const paths = [
  {
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/product-detail/:id",
        element: <ProductDetailPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "*",
        element: <HomePage />,
      },
    ],
  },
];
export const router = createBrowserRouter(paths);
