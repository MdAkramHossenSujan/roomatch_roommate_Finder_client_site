import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import AllRoomMatesTR from '../components/AllRoomMatesTR';
import { useLoaderData, useLocation } from 'react-router';
import Six from '../Animation/Six';
import { FaSearch } from 'react-icons/fa';

const BrowserListing = () => {
    const [filteredRoommates, setFilteredRoommates] = useState([]);
    const [roomTypeFilter, setRoomTypeFilter] = useState('');
    const [rentRangeFilter, setRentRangeFilter] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const { pathname } = useLocation();
    useEffect(() => {
        document.title = `Browse-And-Explore RoomMates Posts | RooMatch`;
    }, []);
    const roomMates = useLoaderData()
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    const roomTypes = Array.from(new Set(roomMates.map(item => item.roomType?.trim())));
    const hasFilters =
        searchQuery ||
        roomTypeFilter ||
        rentRangeFilter;

    const sourceData = hasFilters ? filteredRoommates : roomMates;

    const paginatedRoommates = sourceData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const totalPages = Math.ceil(sourceData.length / itemsPerPage);
    useEffect(() => {
        let result = [...roomMates];
        if (searchQuery) {
            result = result.filter(item =>
                item.objectives?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.location?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.profession?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.userName?.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }
        if (roomTypeFilter) {
            result = result.filter(item =>
                item.roomType?.trim() === roomTypeFilter
            );
        }

        if (rentRangeFilter) {
            result = result.filter(item => {
                const rent = parseInt(item.rent);
                if (rentRangeFilter === "0-1000") return rent >= 0 && rent <= 1000;
                if (rentRangeFilter === "1001-2000") return rent > 1000 && rent <= 2000;
                if (rentRangeFilter === "2001-4000") return rent > 2000 && rent <= 4000;
                if (rentRangeFilter === "4001+") return rent > 4000;
                return true;
            });
        }

        setFilteredRoommates(result);
        setCurrentPage(1);
    }, [roomTypeFilter, rentRangeFilter, roomMates, searchQuery]);

    console.log(filteredRoommates)
    return (
        <div>
            <div>
                <Header />
            </div>
            <div className='w-11/12 md:w-4/5 mx-auto my-10 py-20'>
                <div>
                    <Six />
                </div>
                <div className="text-center py-8 lg:py-12 px-4 ">
                    <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
                        Find Your Perfect Roommate
                    </h1>
                    <p className="max-w-2xl mx-auto">
                        Browse verified profiles, filter by your lifestyle preferences, and connect with compatible roommates in just a few clicks.
                    </p>
                </div>
                <div className="flex flex-col md:flex-row gap-4 mb-8 justify-center">


                    <div className='mt-6'>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                console.log("Search:", searchQuery);
                                // Do your search logic here
                            }}
                            className="flex w-full"
                        >
                            <div className="join">
                                <input
                                    type="text"
                                    placeholder="Search by info"
                                    className="input input-bordered rounded-l-2xl join-item w-72"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                                <button type="submit" className="btn rounded-r-2xl join-item">
                                    <FaSearch />
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Filter by Room Type</span>
                        </label>
                        <select
                            className="select select-bordered"
                            value={roomTypeFilter}
                            onChange={(e) => setRoomTypeFilter(e.target.value)}
                        >
                            <option value="">All</option>
                            {roomTypes.map((type, i) => (
                                <option key={i} value={type}>
                                    {type}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Rent Range Filter */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Filter by Rent Range</span>
                        </label>
                        <select
                            className="select select-bordered"
                            value={rentRangeFilter}
                            onChange={(e) => setRentRangeFilter(e.target.value)}
                        >
                            <option value="">All</option>
                            <option value="0-1000">0-1000</option>
                            <option value="1001-2000">1001-2000</option>
                            <option value="2001-4000">2001-4000</option>
                            <option value="4001+">More than 4000</option>
                        </select>
                    </div>
                    <button
                        onClick={() => {
                            setRoomTypeFilter('');
                            setRentRangeFilter('');
                            setSearchQuery('');
                            setCurrentPage(1);

                        }}
                        className="btn btn-outline mt-6 btn-success"
                    >
                        Clear Filters
                    </button>

                </div>

                <div className="overflow-x-auto">


                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className='border border-gray-600'>
                                <th>Name</th>
                                <th className='mx-auto'>Basic Info</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {sourceData.length === 0 ? (
                                <tr>
                                    <td colSpan={3}>
                                        <div className="bg-red-50 dark:bg-red-900/30 border border-red-300 dark:border-red-700 text-red-700 dark:text-red-300 rounded-xl p-6 w-full mx-auto mt-10 text-center">
                                            <FaSearch className="mx-auto mb-3 text-4xl text-red-400 animate-spin" />
                                            <h3 className="text-xl font-bold mb-2">No roommates found</h3>
                                            <p className="mb-4">
                                                Sorry! Your filters returned no results. Try adjusting your search or filters.
                                            </p>
                                            <button
                                                onClick={() => {
                                                    setSearchQuery("");
                                                    setRoomTypeFilter("");
                                                    setRentRangeFilter("");
                                                }}
                                                className="btn btn-success btn-outline"
                                            >
                                                Clear Filters
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ) : (
                                paginatedRoommates.map((roomMate, index) => (
                                    <AllRoomMatesTR key={index} roomMate={roomMate} />
                                ))
                            )}
                        </tbody>
                    </table>
                    <div className="join mt-6 justify-center">
                        {[...Array(totalPages)].map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentPage(i + 1)}
                                className={`join-item btn ${currentPage === i + 1 ? "btn-primary" : ""}`}
                            >
                                {i + 1}
                            </button>
                        ))}
                    </div>

                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default BrowserListing;