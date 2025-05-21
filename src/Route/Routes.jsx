import {
    createBrowserRouter,
} from "react-router";
import Roots from "../rootFile/Roots";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import AddListing from "../Pages/AddListing";
import BrowserListing from "../Pages/BrowserListing";
import MyListings from "../Pages/MyListings";
import Auth from "../Pages/Auth";
import Register from "../auth/Register";
import SignIn from "../auth/SignIn";
import PrivateRoute from "../Provider/PrivateRoute";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Roots />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:3000/city')
            },
            {
                path: '/addlisting',
                element: <PrivateRoute>
                    <AddListing></AddListing>
                </PrivateRoute>
            },
            {
                path: '/browselisting',
                element: <BrowserListing></BrowserListing>
            },
            {
                path: '/browselisting/:id',
                loader:
            },
            {
                path: '/mylisting',
                element: <PrivateRoute>
                    <MyListings></MyListings>
                </PrivateRoute>
            },
            {
                path: '/auth',
                element: <Auth></Auth>,
                children: [
                    {
                        path: '/auth/register',
                        element: <Register></Register>
                    },
                    {
                        path: '/auth/signin',
                        element: <SignIn></SignIn>
                    }
                ]
            }
        ]
    },
]);
