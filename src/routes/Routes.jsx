import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/Layout/MainLayout";
import Home from "../components/Home/Home";
import Register from "../components/Register/Register";
import Login from "../components/Login/Login";
import PrivateRoute from "../private_route/PrivateRoute";
import Dashboard from "../components/Layout/Dashboard";
import AllUser from "../components/User/Admin/AllUser/AllUser";
import AdminHome from "../components/User/Admin/AdminHome/AdminHome";
import InstructorHome from "../components/User/Instructor/InstructorHome/InstructorHome";
import Random from "../components/User/Random";
import Classes from "../components/Classes/Classes";
import AddClass from "../components/User/Instructor/AddClass/AddClass";
import MyClass from "../components/User/Instructor/MyClass/MyClass";
import ManageClasses from "../components/User/Admin/MangeClasses/ManageClasses";
import StudentHome from "../components/User/Student/StudentHome/StudentHome";
import SelectedClass from "../components/User/Student/SelectedClass/SelectedClass";
import EnrolledClass from "../components/User/Student/EnrolledClass/EnrolledClass";
import PaymentHistory from "../components/User/Student/PaymentHistory/PaymentHistory";


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
                path: "manage-users",
                element: <AllUser></AllUser>
            }, 
            {
                path: "admin-home",
                element: <AdminHome></AdminHome>
            }, 
            {
                path: "manage-classes",
                element: <ManageClasses></ManageClasses>
            }, 
            // instructor routes
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
            // student routes
            {
                path: "student-home",
                element: <StudentHome></StudentHome>
            }, 
            {
                path: "my-selected-classes",
                element: <SelectedClass></SelectedClass>
            }, 
            {
                path: "my-enroll-classes",
                element: <EnrolledClass></EnrolledClass>
            }, 
            {
                path: "payment-history",
                element: <PaymentHistory></PaymentHistory>
            }, 
            
            {
                path: "random",
                element: <Random></Random>
            }
        ]
    }
]);

export default router;