import {Register, Login, loginAction, RootLayout } from "@presentation/pages";
import { createAccountAction } from "@presentation/pages/CreateAccount/createAccount.action";
import { createProductAction } from "@presentation/pages/product/NewProduct/createProduct.action";
import { NewProduct } from "@presentation/pages/product/NewProduct/NewProduct";
import { ProductDetail } from "@presentation/pages/product/ProductDetail/ProductDetail";
import { productDetailAction } from "@presentation/pages/product/ProductDetail/productDetail.action";
import { productDetailLoader } from "@presentation/pages/product/ProductDetail/productDetail.loader";
import { Products } from "@presentation/pages/product/Products";
import { productsLoader } from "@presentation/pages/product/products.loader";
import { loader as rootLoader } from "@presentation/pages/RootLayout/root.loader";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
    action: loginAction,
  },
  {
    path: "/registro",
    element: <Register />,
    action: createAccountAction
  },
  {
    path: "/",
    element: <RootLayout />,
    loader: rootLoader,
    children: [
    {
      path: 'produtos',
      id: 'produtos',
      element: <Products />,
      loader:productsLoader
    },{
      path: 'produtos/novo-produto',
      id: 'novo-produto',
      element: <NewProduct />,
      action: createProductAction,
    },
    {
      path: 'produto/:id',
      id: 'produto',
      element: <ProductDetail />,
      loader: productDetailLoader,
      action: productDetailAction
    }
  ]
  },

]);
