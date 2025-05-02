import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLayout from "../layouts/AuthLayout";
import NewsDetails from "../pages/NewsDetails";
import PrivetRoute from "../Provider/PrivetRoute";
import Loading from "../pages/Loading";



export const router = createBrowserRouter([
    {
        path:'/',
        Component:HomeLayout,
        children:[
            {
                path:'',
                Component:Home
            },
            {
                path:'/category/:id',
                loader:()=> fetch("/news.json"),
                hydrateFallbackElement:<Loading></Loading>,
                Component:CategoryNews
            },
        ],
    },
    {
        path:'/auth',
        Component:AuthLayout,
        children:[
            {
                path:'/auth/login',
                Component:Login
            },
            {
                path:'/auth/register',
                Component:Register
            },
        ],
    },
    {
        path:'/news-details/:id',
        element:<PrivetRoute><NewsDetails></NewsDetails></PrivetRoute>,
        hydrateFallbackElement:<Loading></Loading>,
        loader: () => fetch("/news.json"),
        
    } 
]
)