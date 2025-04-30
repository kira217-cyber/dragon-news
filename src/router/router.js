import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";


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
                Component:CategoryNews
            }
        ]
    },
      
    
])