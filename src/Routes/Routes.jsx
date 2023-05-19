import {createBrowserRouter} from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import AddToy from "../Pages/Admin/AddToy/AddToy";
import Toys from "../Pages/Home/Products/Toys";
import ToyDetails from "../Pages/Home/Products/ToyDetails";
import MyToy from "../Pages/Admin/AddToy/MyToy";
import Login from "../Pages/Shared/Login/Login";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import UpdateToy from "../Pages/Admin/AddToy/UpdateToy";
import Register from "../Pages/Shared/Register/Register";
import Error from "../Pages/Shared/Error404/Error";
import Blog from "../Pages/Shared/Blog/Blog";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/toys')                
            },
            {
                path: '/addToy',
                element: <PrivateRoute><AddToy></AddToy></PrivateRoute>
            },
            {
                path: '/allToys',
                element: <Toys></Toys>,
                loader: () => fetch('http://localhost:5000/toys') 
            },
            {
                path: '/toyDetails/:id',
                element: <PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/toys/${params.id}`)
            },
            {
                path: '/myToys',
                element: <PrivateRoute><MyToy></MyToy></PrivateRoute>,

            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/updateToy/:id',
                element: <PrivateRoute><UpdateToy></UpdateToy></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/mytoys/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    }, 
    {
        path: '*',
        element: <Error></Error>
    }
])

export default router;