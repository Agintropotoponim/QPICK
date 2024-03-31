import { Navigate } from "react-router-dom"
import ProductCatalog from "../pages/ProductCatalog"
import Basket from "../pages/Basket"
import PageNotFound from "../pages/PageNotFound"

export const publicRoutes = [
    { path: '/products', element: <ProductCatalog />, exact: false },
    { path: '/basket', element: <Basket />, exact: false },
    { path: '/404', element: <PageNotFound />, exact: false },
    { path: '/*', element: <Navigate to="/products" />, exact: false },
]

