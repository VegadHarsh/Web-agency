// Settings.js
import React from 'react';
import Sidebar from '../Admin-structure/Sidebar';
import { Link } from 'react-router-dom';
import Loader from '../Loader';

const Settings = () => {
    return (
        <div className="flex h-full bg-gray-100">
            {/* <Loader /> */}
            {/* Sidebar */}
            <Sidebar />
            {/* Main Content */}
            <div className="flex-1 ml-64 p-8 bg-white shadow-lg rounded-lg">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Settings</h3>
                <hr />
                
                {/* Profile Settings */}
                <section className="mb-8 mt-4">
                    <h4 className="text-lg font-semibold text-gray-700 mb-4">Profile Settings</h4>
                    <form className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                            <input
                                type="text"
                                className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 outline-none focus:border-blue-500 sm:text-sm"
                                placeholder="Enter your full name"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                            <input
                                type="email"
                                className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 outline-none focus:border-blue-500 sm:text-sm"
                                placeholder="Enter your email"
                            />
                        </div>
                    </form>
                </section>

                <div className='flex'>
                    {/* Privacy Settings */}
                    <section className="mb-8 w-[50%]">
                        <h4 className="text-lg font-semibold text-gray-700 mb-4">Privacy Settings</h4>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                />
                                <label className="ml-3 block text-sm text-gray-700">Enable Two-Factor Authentication</label>
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                />
                                <label className="ml-3 block text-sm text-gray-700">Share Usage Data for Analytics</label>
                            </div>
                        </div>
                    </section>

                    {/* Email Notifications */}
                    <section className="mb-8">
                        <h4 className="text-lg font-semibold text-gray-700 mb-4">Email Notifications</h4>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                />
                                <label className="ml-3 block text-sm text-gray-700">Notify me about new projects</label>
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                />
                                <label className="ml-3 block text-sm text-gray-700">Send me updates on promotions</label>
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                />
                                <label className="ml-3 block text-sm text-gray-700">Receive weekly reports</label>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Change Password Link */}
                <section className="mb-8">
                    <h4 className="text-lg font-semibold text-gray-700 mb-4">Change Password</h4>
                    <Link
                        to="/change-password"
                        className="text-blue-600 hover:text-blue-800 transition duration-200"
                    >
                        Click here to change your password
                    </Link>
                </section>

                {/* Save Button */}
                <div>
                    <button
                        type="submit"
                        className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300 ease-in-out"
                    >
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Settings;
