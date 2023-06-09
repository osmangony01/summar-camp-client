import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/Layout/MainLayout";
import Home from "../components/Home/Home";
import Register from "../components/Register/Register";
import Login from "../components/Login/Login";
import PrivateRoute from "../private_route/PrivateRoute";
import Dashboard from "../components/Layout/Dashboard";
import AllUser from "../components/User/Admin/AllUser/AllUser";
import AdminHome from "../components/User/Admin/AdminHome/AdminHome";
import StudentHome from "../components/User/Student/StudentHome/StudentHome";
import InstructorHome from "../components/User/Instructor/InstructorHome/InstructorHome";
import Random from "../components/User/Random";
import Classes from "../components/Classes/Classes";
import AddClass from "../components/User/Instructor/AddClass/AddClass";
import MyClass from "../components/User/Instructor/MyClass/MyClass";


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
            },{
                path:"/classes",
                element:<Classes></Classes>
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
                path: "student-home",
                element: <StudentHome></StudentHome>
            }, 
            {
                path: "instructor-home",
                element: <InstructorHome></InstructorHome>
            }, 
            {
                path: "add-class",
                element: <AddClass></AddClass>
            }, 
            {
                path: "my-classes",
                element: <MyClass></MyClass>
            }, 
            
            {
                path: "random",
                element: <Random></Random>
            }
        ]
    }
]);

export default router;