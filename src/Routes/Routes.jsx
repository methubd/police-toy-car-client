import {createBrowserRouter} from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import AddToy from "../Pages/Admin/AddToy/AddToy";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/addToy',
                element: <AddToy></AddToy>
            },
        ]
    }
])

export default router;