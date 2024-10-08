import React, { useState } from 'react';
import { Chart, registerables } from 'chart.js';
import { Bar, Pie } from 'react-chartjs-2';
import Sidebar from './Sidebar';

// Register chart.js components
Chart.register(...registerables);

const AdminPage = () => {
    const [showPopup, setShowPopup] = useState(false);

    // Dummy data for charts
    const dataBar = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Projects Progress',
                data: [65, 59, 80, 81, 56, 55, 40],
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    const dataPie = {
        labels: ['Completed', 'Pending', 'On Hold'],
        datasets: [
            {
                data: [15, 8, 2], // Example data
                backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 206, 86, 0.6)', 'rgba(255, 99, 132, 0.6)'],
            },
        ],
    };

    const totalProjects = 25; // Total number of projects
    const completedProjects = 15; // Completed projects
    const pendingProjects = totalProjects - completedProjects; // Pending projects
    const onHoldProjects = 2; // On-hold projects
    const progressPercentage = (completedProjects / totalProjects) * 100; // Progress percentage

    // Dummy notifications and activities
    const notifications = [
        { id: 1, message: 'Alpha has been completed.', date: '2024-09-25' },
        { id: 2, message: 'Beta is nearing its deadline.', date: '2024-09-20' },
        { id: 3, message: 'project proposal submitted.', date: '2024-09-15' },
    ];

    const recentActivities = [
        { id: 1, action: 'Started Project Beta', date: '2024-09-26' },
        { id: 2, action: 'Completed Project Gamma', date: '2024-09-20' },
        { id: 3, action: 'Updated Project Alpha status', date: '2024-09-18' },
    ];

    return (
        <>
            <div className='flex bg-gray-100'>
                <Sidebar />
                <div className="flex ml-64 flex-col p-6 bg-gray-100 h-full w-full">
                    <div className='flex justify-between'>
                        {/* Header */}
                        <h1 className="text-3xl font-bold text-gray-800 mb-6">Admin Dashboard</h1>

                        {/* New Project Button */}
                        <button
                            onClick={() => setShowPopup(true)}
                            className="mb-4 px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 shadow-md transition duration-300 ease-in-out"
                        >
                            Progress Project
                        </button>
                    </div>

                    {/* Project Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                        <div className="bg-white shadow-lg rounded-lg p-4">
                            <h2 className="text-xl font-semibold text-gray-700">Total Projects</h2>
                            <p className="text-2xl font-bold text-gray-800">{totalProjects}</p>
                        </div>
                        <div className="bg-white shadow-lg rounded-lg p-4">
                            <h2 className="text-xl font-semibold text-gray-700">Completed Projects</h2>
                            <p className="text-2xl font-bold text-gray-800">{completedProjects}</p>
                        </div>
                        <div className="bg-white shadow-lg rounded-lg p-4">
                            <h2 className="text-xl font-semibold text-gray-700">Pending Projects</h2>
                            <p className="text-2xl font-bold text-gray-800">{pendingProjects}</p>
                        </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="flex flex-col lg:flex-row gap-4">
                        {/* Progress Chart */}
                        <div className="bg-white shadow-lg rounded-lg p-4 flex-grow lg:w-2/3 mb-8">
                            <h2 className="text-xl font-semibold text-gray-700 mb-4">Projects Progress</h2>
                            <Bar data={dataBar} />
                        </div>

                        {/* Additional Information on the Left */}
                        <div className="bg-white shadow-lg rounded-lg p-4 lg:w-1/3 mb-8">
                            <h2 className="text-xl font-semibold text-gray-700 mb-4">Progress Summary</h2>
                            <div className="mb-4">
                                <h3 className="text-lg font-semibold text-gray-700">Progress Overview</h3>
                                <p className="text-gray-600">Completed: {completedProjects} ({progressPercentage.toFixed(2)}%)</p>
                                <p className="text-gray-600">Pending: {pendingProjects}</p>
                                <p className="text-gray-600">On Hold: {onHoldProjects}</p>
                            </div>
                            <div className="mb-4">
                                <h3 className="text-lg font-semibold text-gray-700">Upcoming Deadlines</h3>
                                <ul className="list-inside text-gray-600">
                                    <li>Project Alpha - Due by September 30</li>
                                    <li>Project Beta - Due by October 15</li>
                                    <li>Project Gamma - Due by October 31</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-700">Tasks Completion</h3>
                                <div className="flex items-center">
                                    <div className="relative w-full">
                                        <div
                                            className="bg-blue-600 h-2.5 rounded-full"
                                            style={{ width: `${progressPercentage.toFixed(5)}%` }}
                                        />
                                    </div>
                                    <span className="ml-2 text-sm font-semibold text-gray-700">
                                        {progressPercentage.toFixed(2)}%
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Pie Chart for Project Status */}
                    <div className="bg-white shadow-lg rounded-lg p-4 mb-8">
                        <h2 className="text-xl font-semibold text-gray-700 mb-4">Project Status Overview</h2>
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="rounded-lg p-4 w-full md:w-[50%]">
                                <h3 className="text-lg font-semibold text-gray-700 mb-2">Project Breakdown</h3>
                                <ul className="list-disc list-inside mb-5 text-gray-600">
                                    <li>Completed: {completedProjects}</li>
                                    <li>Pending: {pendingProjects}</li>
                                    <li>On Hold: {onHoldProjects}</li>
                                </ul>
                                {/* Notifications */}
                                <div className="p-2 mb-4">
                                    <h2 className="text-xl font-semibold text-gray-700 mb-4">Notifications</h2>
                                    <ul className="list-disc list-inside text-gray-600">
                                        {notifications.map((notification) => (
                                            <li key={notification.id} className="mb-2">
                                                <span className="font-semibold">{notification.message}</span> - <span className="text-sm">{notification.date}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Recent Activities */}
                                <div className="p-2 mb-4">
                                    <h2 className="text-xl font-semibold text-gray-700 mb-4">Recent Activities</h2>
                                    <ul className="list-disc list-inside text-gray-600">
                                        {recentActivities.map((activity) => (
                                            <li key={activity.id} className="mb-2">
                                                <span className="font-semibold">{activity.action}</span> - <span className="text-sm">{activity.date}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                            </div>
                            <div className="">
                                <Pie data={dataPie} style={{ width: '50%', height: '400px' }} />
                            </div>
                        </div>
                    </div>

                    {showPopup && (
                        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                            <div className="bg-white rounded-lg p-6 shadow-lg w-80">
                                <h2 className="text-lg font-semibold mb-4 text-center">Add Project</h2>
                                <form>
                                    <div className="mb-4">
                                        <label className="block text-gray-800 font-medium mb-1" htmlFor="projectName">Project Name</label>
                                        <input
                                            type="text"
                                            id="projectName"
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                            placeholder="Project name"
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label className="block text-gray-800 font-medium mb-1" htmlFor="status">Status</label>
                                        <select
                                            id="status"
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                        >
                                            <option value="completed">Completed</option>
                                            <option value="inProgress">In Progress</option>
                                        </select>
                                    </div>

                                    <div className="flex justify-end mt-6">
                                        <button
                                            type="button"
                                            onClick={() => setShowPopup(false)}
                                            className="mr-2 px-3 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition duration-200"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type="submit"
                                            className="px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300 ease-in-out"
                                        >
                                            Save
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default AdminPage;
