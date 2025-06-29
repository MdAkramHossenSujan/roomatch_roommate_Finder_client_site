import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  RouterProvider,
} from "react-router";
import { router } from './Route/Routes.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import { Toaster } from 'react-hot-toast';
import { Tooltip } from 'react-tooltip';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
       <RouterProvider router={router} />
        <Toaster position='top-center'></Toaster>
        <Tooltip id="view-tooltip" />
    </AuthProvider>
  </StrictMode>,
)
