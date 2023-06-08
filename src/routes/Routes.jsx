import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/Layout/MainLayout";
import Home from "../components/Home/Home";
import Register from "../components/Register/Register";
import Login from "../components/Login/Login";
import Dashboard from "../components/Dashboard/Dashboard";
import AllUser from "../components/Dashboard/AdminHome/AllUser/AllUser";
import Random from "../components/Dashboard/Random";
import PrivateRoute from "../private_route/PrivateRoute";
import AdminHome from "../components/Dashboard/AdminHome/AdminHome";
import UserHome from "../components/Dashboard/UserHome/UserHome";
import InstructorHome from "../components/Dashboard/InstructorHome/InstructorHome";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/login",
                element: <Login></Login>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: "alluser",
                element: <AllUser></AllUser>
            }, 
            {
                path: "admin-home",
                element: <AdminHome></AdminHome>
            }, 
            {
                path: "user-home",
                element: <UserHome></UserHome>
            }, 
            {
                path: "instructor-home",
                element: <InstructorHome></InstructorHome>
            }, 
            
            {
                path: "random",
                element: <Random></Random>
            }
        ]
    }
]);

export default router;