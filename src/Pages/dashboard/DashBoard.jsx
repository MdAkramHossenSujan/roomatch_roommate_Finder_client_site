import React from "react";
import { Outlet, } from "react-router";
import DashboardSidebar from "./DashBoardSidebar";


const DashboardPage = () => {
    return (
        <div className="flex">
            <DashboardSidebar />
            <Outlet />
        </div>
    );
};

export default DashboardPage;
