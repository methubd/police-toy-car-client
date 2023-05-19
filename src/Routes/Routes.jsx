import {createBrowserRouter} from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import AddToy from "../Pages/Admin/AddToy/AddToy";
import Toys from "../Pages/Home/Products/Toys";
import ToyDetails from "../Pages/Home/Products/ToyDetails";

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
                element: <AddToy></AddToy>
            },
            {
                path: '/allToys',
                element: <Toys></Toys>,
                loader: () => fetch('http://localhost:5000/toys') 
            },
            {
                path: '/toyDetails/:id',
                element: <ToyDetails></ToyDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/toys/${params.id}`)
            }
        ]
    }
])

export default router;