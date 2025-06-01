import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home";
import RootLayout from "../layouts/RootLayout";
import Register from "../Pages/Register/Register";
import SignIn from "../Pages/SignIn/SignIn";

const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: "/register",
                Component: Register
            },
            {
                path: "/login",
                Component: SignIn
            }
        ]
    },
]);

export default router