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
import Classes from "../components/Classes/Classes";
import AddClass from "../components/User/Instructor/AddClass/AddClass";
import MyClass from "../components/User/Instructor/MyClass/MyClass";
import ManageClasses from "../components/User/Admin/MangeClasses/ManageClasses";
import StudentHome from "../components/User/Student/StudentHome/StudentHome";
import SelectedClass from "../components/User/Student/SelectedClass/SelectedClass";
import EnrolledClass from "../components/User/Student/EnrolledClass/EnrolledClass";
import PaymentHistory from "../components/User/Student/PaymentHistory/PaymentHistory";
import Payment from "../components/User/Student/Payement/Payment";
import Instructor from "../components/Instructor/Instructor";
import Feedback from "../components/User/Admin/Feedback";
import ErrorRoute from "../components/ErrorPage/ErrorRoute";
//import isAdmin from "../private_route/isAdmin";
import Contact from "../components/Contact/Contact";
import New from "../new/New";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorRoute></ErrorRoute>,
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
            },
            {
                path:"/classes",
                element:<Classes></Classes>
            },
            {
                path:"/instructors",
                element:<Instructor></Instructor>
            },
            {
                path:"/contact",
                element:<Contact></Contact>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: "manage-users",
                element:  <isAdmin><AllUser></AllUser></isAdmin>
            }, 
            {
                path: "admin-home",
                element: <isAdmin><AdminHome></AdminHome></isAdmin> 
            }, 
            {
                path: "manage-classes",
                element: <isAdmin><ManageClasses></ManageClasses></isAdmin>
            }, 
            {
                path: "feedback/:id",
                element: <isAdmin><Feedback></Feedback></isAdmin>
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
                path:"payment/:id",
                element:<Payment></Payment>,
                loader: ({params}) => fetch(`https://summar-camp-server.vercel.app/booked-class/${params.id}`)
            },
            
            
        ]
    },
    // {
    //     path: "/new",
    //     element: <New></New>
    // }

]);

export default router;