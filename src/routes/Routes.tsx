import {createBrowserRouter, createRoutesFromElements, Route} from "react-router";
import App from "../App.tsx";
import Home from "../pages/Home.tsx";
import Category from "../pages/Category.tsx";
import homeLoader from "../loaders/homeLoader.ts";
import Error from "../components/Error/Error.tsx";
import categoryLoader from "../loaders/categoryLoader.ts";
import Product from "../pages/Product.tsx";
import productLoader from "../loaders/productLoader.ts";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<App/>} errorElement={<Error/>}>
            <Route index element={<Home/>} loader={homeLoader}/>
            <Route path="/:category" element={<Category/>} loader={categoryLoader}/>
            <Route path="/:category/:productName" element={<Product/>} loader={productLoader}/>
        </Route>
    )
);

export default router;