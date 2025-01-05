import {createBrowserRouter, createRoutesFromElements, Route} from "react-router";
import App from "../App.tsx";
import Home from "../pages/Home.tsx";
import Category from "../pages/Category.tsx";
import homeLoader from "../loaders/homeLoader.ts";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<App/>}>
            <Route index element={<Home/>} loader={homeLoader}/>
            <Route path="/:category" element={<Category/>}/>
        </Route>
    )
);

export default router;