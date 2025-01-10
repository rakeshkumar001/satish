import Homepage from "../components/Homepage";
import AuthPage from "../components/authPages/AuthPage";
import BlogMain from "../components/blogs/BlogMain";
import BlogPage from "../components/blogs/BlogPage";
import TalkToUs from "../components/contactus/TalkToUs";
import { routerType } from "../types/router.types";

const pagesData: routerType[] = [
    {
        path: "/blogs",
        element: <BlogMain />,
        title: "blogs"
    },
    {
        path: "/",
        element: <Homepage />,
        title: "home"
    },
    {
        path: "/home",
        element: <Homepage />,
        title: "home"
    },
    {
        path: "/talk_to_us",
        element: <TalkToUs />,
        title: "contactUs"
    },
    {
        path: "/blogs/:id/:slug",
        element: <BlogPage />,
        title: "blogPage"
    },
    {
        path: "/login",
        element: <AuthPage />,
        title: "login"
    }
];

export default pagesData;