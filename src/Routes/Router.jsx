import { createBrowserRouter } from "react-router";
import Home from "../Layouts/Home";
import Homes from "../Pages/Homes";
import CategortNews from "../Pages/CategortNews";
import Error from "../Pages/Error";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AuthLayout from "../Layouts/AuthLayout";
import NewsDetails from "../Pages/NewsDetails";
import PrivateRoute from "../Provider/PrivateRoute";
import NewsDetailsCard from "../Component/NewsDetailsCart";
import Loading from "../Component/Loading";



const router = createBrowserRouter(
    [
        {
            path: "/",
            Component: Home,
            children: [
                { path: "", Component: Homes },
                {
                    path: "/category/:id", Component: CategortNews,
                    loader: () => fetch("/news.json"),
                    HydrateFallback: Loading
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
            path: "/news-details/:id",
            element: <PrivateRoute>
                <NewsDetails></NewsDetails>
            </PrivateRoute>,
            loader: async ({ params }) => {
                const res = await fetch('/news.json');
                const data = await res.json();
                return data.find(item => item.id === params.id);
            }
        },
        {
            path: "/*",
            Component: Error
        },
    ]
)

export default router