import React, { useEffect } from "react";
import { Outlet, useLocation, } from "react-router";
import DashboardSidebar from "./DashBoardSidebar";


const DashboardPage = () => {
    const { pathname } = useLocation();
     useEffect(() => {
            document.title = `Dashboard | Roomatch`;
          }, []);

     useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
    return (
        <div className="flex">
            <DashboardSidebar />
            <Outlet />
        </div>
    );
};

export default DashboardPage;
