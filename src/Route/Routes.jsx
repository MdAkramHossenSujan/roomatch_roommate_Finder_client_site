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

import RoomMateDetails from "../Pages/RoomMateDetails";
import UpdateRoomMate from "../Pages/UpdateRoomMate";
import BlogSection from "../Pages/Blog";
import AboutUs from "../Pages/AboutUs";
import Contact from "../Pages/Contact";
import DashboardHome from "../Pages/dashboard/DashBoardContent";
import DashboardPage from "../Pages/dashboard/DashBoard";
import MyListingIndashboard from "../Pages/dashboard/MyListingIndashboard";
import AllRoommates from "../Pages/dashboard/AllRoommates";
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
                element: <PrivateRoute>
                    <AddListing></AddListing>
                </PrivateRoute>
            },
            {
                path: '/browselisting',
                element: <BrowserListing></BrowserListing>,
                loader: () => fetch('https://roomatch-server.vercel.app/roommates'),
                hydrateFallbackElement: <div className='min-h-screen max-w-screen mx-auto flex justify-center'>
                    <span className="loading loading-spinner text-success"></span>
                </div>
            },
            {
                path: '/userBlog&reviews',
                element: <BlogSection></BlogSection>,
                loader: () => fetch('https://roomatch-server.vercel.app/blog'),
                hydrateFallbackElement: <div className='min-h-screen max-w-screen mx-auto flex justify-center'>
                    <span className="loading loading-spinner text-success"></span>
                </div>
            },
            {
                path: '/browselisting/:id',
                loader: ({ params }) => fetch(`https://roomatch-server.vercel.app/roommates/${params.id}`),
                element: <PrivateRoute>
                    <RoomMateDetails></RoomMateDetails>
                </PrivateRoute>,
                hydrateFallbackElement: <div className='min-h-screen max-w-screen mx-auto flex justify-center'>
                    <span className="loading loading-spinner text-success"></span>
                </div>
            },
            {
                path: '/updatelisting/:id',
                loader: ({ params }) => fetch(`https://roomatch-server.vercel.app/roommates/${params.id}`),
                element: <PrivateRoute>
                    <UpdateRoomMate></UpdateRoomMate>
                </PrivateRoute>,
                hydrateFallbackElement: <div className='min-h-screen max-w-screen mx-auto flex justify-center'>
                    <span className="loading loading-spinner text-success"></span>
                </div>
            },
            {
                path: '/mylisting/:email',
                loader: ({ params }) => fetch(`https://roomatch-server.vercel.app/roommates/user/${params.email}`),
                element: <PrivateRoute>
                    <MyListings></MyListings>
                </PrivateRoute>,
                hydrateFallbackElement: <div className='min-h-screen max-w-screen mx-auto flex justify-center'>
                    <span className="loading loading-spinner text-success"></span>
                </div>
            }, {
                path: '/aboutus',
                Component: AboutUs
            }, {
                path: '/contact',
                Component: Contact
            },
            {
                path: '/dashboard',
                element: <PrivateRoute>
                    <DashboardPage></DashboardPage>
                </PrivateRoute>,
                children: [
                    {
                        index: true,
                        Component: DashboardHome,
                        loader: () => fetch('https://roomatch-server.vercel.app/roommates'),
                        hydrateFallbackElement: <div className='min-h-screen max-w-screen mx-auto flex justify-center'>
                            <span className="loading loading-spinner text-success"></span>
                        </div>
                    },
                    {
                        path: '/dashboard/:email',
                        loader: ({ params }) => fetch(`https://roomatch-server.vercel.app/roommates/user/${params.email}`),
                        element: <PrivateRoute>
                            <MyListingIndashboard></MyListingIndashboard>
                        </PrivateRoute>,
                        hydrateFallbackElement: <div className='min-h-screen max-w-screen mx-auto flex justify-center'>
                            <span className="loading loading-spinner text-success"></span>
                        </div>
                    },
            {
                path: '/dashboard/all-roommates',
                element: <AllRoommates/>,
                loader: () => fetch('https://roomatch-server.vercel.app/roommates'),
                hydrateFallbackElement: <div className='min-h-screen max-w-screen mx-auto flex justify-center'>
                    <span className="loading loading-spinner text-success"></span>
                </div>
            },
                ]
            },
            {
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
