import { createBrowserRouter } from "react-router";
import Home from "../Layouts/Home";

const router = createBrowserRouter(
    [
        {
            path:"/",
            Component: Home
        },
        {
            path:"/auth",
            element: <h1>authentication layout</h1>
        },
        {
            path:"/news",
            element: <h1>News layout</h1>
        },
        {
            path:"/*",
            element: <h1>error</h1>
        },
    ]
)

export default router