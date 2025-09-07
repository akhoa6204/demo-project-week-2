import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import DefaultLayout from "../layouts/DefaultLayout.index";
import ProductDetailPage from "../pages/ProductDetailPage";
import CartPage from "../pages/CartPage";
import LoginPage from "../pages/LoginPage";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import HomeProvider from "../hooks/home/HomeProvider";
import ProductDetailProvider from "../hooks/product-detail/ProductDetailProvider";
import CartProvider from "../hooks/cart/CartProvider";

const paths = [
  {
    element: <PrivateRoute />,
    children: [
      {
        element: <DefaultLayout />,
        children: [
          {
            path: "/",
            element: (
              <HomeProvider>
                <HomePage />
              </HomeProvider>
            ),
          },
          {
            path: "/product-detail/:id",
            element: (
              <ProductDetailProvider>
                <ProductDetailPage />
              </ProductDetailProvider>
            ),
          },
          {
            path: "/cart",
            element: (
              <CartProvider>
                <CartPage />
              </CartProvider>
            ),
          },
          {
            path: "*",
            element: (
              <HomeProvider>
                <HomePage />
              </HomeProvider>
            ),
          },
        ],
      },
    ],
  },

  {
    element: <PublicRoute />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },
];

export const router = createBrowserRouter(paths);
