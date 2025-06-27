import React, { useContext } from "react";
import { FaUsers, FaList, FaCity } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLoaderData } from "react-router";
import Chart from "react-apexcharts";

const DashboardHome = () => {
    const { user } = useContext(AuthContext);
    const allRoommates = useLoaderData();
console.log(allRoommates)
    const totalRoommates = allRoommates.length;

    const myRoommates = user
        ? allRoommates.filter((rm) => rm?.userEmail === user?.email)
        : [];

    let cityCounts = {};
    allRoommates.forEach((rm) => {
        const city = rm?.location?.split(",")[0]?.trim();
        if (city) {
            cityCounts[city] = (cityCounts[city] || 0) + 1;
        }
    });

    const mostPopularCity =
        Object.entries(cityCounts).sort((a, b) => b[1] - a[1])[0]?.[0] || "N/A";

    // Chart data
    const pieOptions = {
        labels: ["Excellent", "Good", "Average", "Poor"],
        colors: ["#16a34a", "#60a5fa", "#facc15", "#f87171"],
        legend: {
            position: "bottom",
            labels: {
                colors: [
                    "#16a34a",
                    "#60a5fa",
                    "#facc15",
                    "#f87171",
                ],
            },
        },



    };

    const pieSeries = [45, 30, 15, 10];

    const gaugeOptions = {
        chart: {
            type: "radialBar",
        },
        plotOptions: {
            radialBar: {
                hollow: { size: "50%" },
                dataLabels: {
                    value: {
                        fontSize: "24px",
                        color: "#16a34a",
                    },
                    name: { show: true },
                },
            },
        },
        labels: ["Trust Score"],
        colors: ["#16a34a"],
    };

    const gaugeSeries = [85]; // e.g. 85% trust score

    return (
        <div className="flex-1 p-8 bg-gray-50 dark:bg-gray-900 min-h-screen">
           
            <h1 className="text-3xl font-bold mb-8 text-gray-800 dark:text-gray-200">
                Roomatch Dashboard
            </h1>

            {/* Cards grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                {/* Card 1: Total Roommates */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                    <div className="flex items-center gap-3 mb-4">
                        <FaUsers className="text-3xl text-blue-500" />
                        <h2 className="xl:text-xl font-semibold text-gray-700 dark:text-gray-200">
                            All Roommates
                        </h2>
                    </div>
                    <p className="text-4xl font-bold text-gray-800 dark:text-gray-100">
                        {totalRoommates}
                    </p>
                    <p className="xl:text-sm text-xs text-gray-500 dark:text-gray-400">
                        Total listings on Roomatch
                    </p>
                </div>

                {/* Card 2: My Roommates */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                    <div className="flex items-center gap-3 mb-4">
                        <FaList className="text-3xl text-green-500" />
                        <h2 className="xl:text-xl font-semibold text-gray-700 dark:text-gray-200">
                            My Roommates
                        </h2>
                    </div>
                    <p className="text-4xl font-bold text-gray-800 dark:text-gray-100">
                        {myRoommates.length}
                    </p>
                    <p className="lg:text-sm text-xs text-gray-500 dark:text-gray-400">
                        Listings you’ve posted
                    </p>
                </div>

                {/* Card 3: Most Popular City */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                    <div className="flex items-center gap-3 mb-4">
                        <FaCity className="text-3xl text-purple-500" />
                        <h2 className="xl:text-xl font-semibold text-gray-700 dark:text-gray-200">
                            Top City
                        </h2>
                    </div>
                    <p className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                        {mostPopularCity}
                    </p>
                    <p className="xl:text-sm text-xs text-gray-500 dark:text-gray-400">
                        City with most listings
                    </p>
                </div>
            </div>

            {/* Chart section */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-8">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">
                    User Reviews & Trust
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Pie Chart */}
                    <div className="flex justify-center">
                        <Chart
                            options={pieOptions}
                            series={pieSeries}
                            type="pie"
                            width={350}
                        />
                    </div>

                    {/* Radial Gauge */}
                    <div className="flex justify-center">
                        <Chart
                            options={gaugeOptions}
                            series={gaugeSeries}
                            type="radialBar"
                            width={300}
                        />
                    </div>
                </div>

                <p className="mt-6 text-gray-600 dark:text-gray-300 text-sm text-center">
                    Roomatch has a <strong>85%</strong> trust score based on user reviews. Most users rate the platform as excellent or good, indicating high satisfaction and reliability.
                </p>
            </div>
        </div>
    );
};

export default DashboardHome;

