import { Route, Routes } from "react-router-dom";
import { routerType } from "../types/router.types";
import pagesData from "./pagesData";

const Router = () => {
    const pageRoutes = pagesData.map(({ path, title, element }: routerType) => {
        return <Route key={title} path={`${process.env.PUBLIC_URL}/${path}`} element={element} />;
    });

    return <Routes>{pageRoutes}</Routes>;
};

export default Router;