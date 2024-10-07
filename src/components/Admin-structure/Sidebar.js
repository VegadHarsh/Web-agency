// Sidebar.js
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Loader from '../Loader';

function Sidebar() {
    const [loading, setLoading] = useState(true);
    const location = useLocation();
    useEffect(() => {
        setLoading(true);

        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, [location]);

    return (
        <>
            {loading && <Loader />} {/* Show loader only when loading is true */}
            {!loading && (<section>

                {/* Link to Google Material Icons */}
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
                {/* Sidebar */}
                <div className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-10">
                    <div className="h-16 flex items-center justify-center border-b">
                        <h1 className="text-lg font-bold text-gray-800">Admin Panel</h1>
                    </div>
                    <hr />
                    <nav className="flex-1 mt-4">
                        <ul>
                            <li>
                                <Link to="/Adminpage" className="flex items-center px-4 py-2 text-gray-600 hover:bg-blue-600 hover:text-white transition duration-300 ease-in-out">
                                    <span className="mr-2 material-icons">dashboard</span>
                                    Dashboard
                                </Link>
                            </li>
                            <li>
                                <Link to="/UserList" className="flex items-center px-4 py-2 text-gray-600 hover:bg-blue-600 hover:text-white transition duration-300 ease-in-out">
                                    <span className="mr-2 material-icons">people</span>
                                    Users
                                </Link>
                            </li>
                            <li>
                                <Link to="/ProjectList" className="flex items-center px-4 py-2 text-gray-600 hover:bg-blue-600 hover:text-white transition duration-300 ease-in-out">
                                    <span className="mr-2 material-icons">assignment</span>
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link to="/Settings" className="flex items-center px-4 py-2 text-gray-600 hover:bg-blue-600 hover:text-white transition duration-300 ease-in-out">
                                    <span className="mr-2 material-icons">settings</span>
                                    Settings
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </section>
            )}
        </>
    );
}

export default Sidebar;
