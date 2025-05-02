import { createBrowserRouter } from "react-router";
import Home from "../Layouts/Home";
import Homes from "../Pages/Homes";
import CategortNews from "../Pages/CategortNews";
import Error from "../Pages/Error";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AuthLayout from "../Layouts/AuthLayout";



const router = createBrowserRouter(
    [
        {
            path: "/",
            Component: Home,
            children: [
                { path: "", Component: Homes },
                {
                    path: "/category/:id", Component: CategortNews,
                    loader: () => fetch("/news.json")
                },
            ]
        },
        {
            path: "/auth",
            Component: AuthLayout,
            children: [
                { path: "/auth/login", Component: Login },
                { path: "/auth/register", Component: Register }
            ]
        },
        {
            path: "/news",
            element: <h1>News layout</h1>
        },
        {
            path: "/*",
            Component: Error
        },
    ]
)

export default router