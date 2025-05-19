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
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Roots />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/addlisting',
                element: <AddListing></AddListing>
            },
            {
                path: '/browsinglisting',
                element: <BrowserListing></BrowserListing>
            },
            {
                path: '/mylisting',
                element: <MyListings></MyListings>
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
