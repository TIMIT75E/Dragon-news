import { createBrowserRouter } from "react-router";
import Home from "../Layouts/Home";
import Homes from "../Pages/Homes";
import CategortNews from "../Pages/CategortNews";



const router = createBrowserRouter(
    [
        {
            path:"/",
            Component: Home,
            children:[
                {path:"",Component:Homes},
                {path:"/category/:id",Component:CategortNews},
            ]
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