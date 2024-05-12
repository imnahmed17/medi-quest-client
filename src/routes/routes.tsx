import App from "@/App";
import DashboardLayout from "@/components/layout/DashboardLayout";
import About from "@/pages/about/About";
import AllSupplies from "@/pages/all-supplies/AllSupplies";
import AddSupply from "@/pages/dashboard/add-supply/AddSupply";
import DashboardHome from "@/pages/dashboard/home/DashboardHome";
import SupplyPosts from "@/pages/dashboard/supply-posts/SupplyPosts";
import Error from "@/pages/error/Error";
import Home from "@/pages/home/Home";
import Login from "@/pages/login/Login";
import Register from "@/pages/register/Register";
import SupplyDetails from "@/pages/supply-details/SupplyDetails";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "supplies",
                element: <AllSupplies />,
            },
            {
                path: "supplies/:id",
                element: <SupplyDetails />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "register",
                element: <Register />,
            },
        ],
    },
    {
        path: "dashboard",
        element: <DashboardLayout />,
        children: [
            {
                index: true,
                element: <DashboardHome />,
            },
            {
                path: "supplies",
                element: <SupplyPosts />,
            },
            {
                path: "create-supply",
                element: <AddSupply />,
            },
        ],
    },
]);

export default router;