import React, { useState } from 'react';
import Sidebar from '../Admin-structure/Sidebar';

const ProjectList = () => {
    const [projects, setProjects] = useState([
        { id: 1, name: 'Project Alpha', status: 'In Progress', description: 'Initial project setup.', startDate: '2023-01-01', endDate: '2023-12-31', budget: 10000 },
        { id: 2, name: 'Project Beta', status: 'Completed', description: 'Completed project phases.', startDate: '2023-02-01', endDate: '2023-11-30', budget: 15000 },
        { id: 3, name: 'Project Gamma', status: 'Pending', description: 'Pending approval.', startDate: '', endDate: '', budget: 5000 },
    ]);
    
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newProjectName, setNewProjectName] = useState('');
    const [newProjectStatus, setNewProjectStatus] = useState('In Progress');
    const [newProjectDescription, setNewProjectDescription] = useState('');
    const [newProjectStartDate, setNewProjectStartDate] = useState('');
    const [newProjectEndDate, setNewProjectEndDate] = useState('');
    const [newProjectBudget, setNewProjectBudget] = useState('');

    const handleAddProject = () => {
        if (newProjectName.trim()) {
            setProjects([...projects, { 
                id: projects.length + 1, 
                name: newProjectName, 
                status: newProjectStatus, 
                description: newProjectDescription,
                startDate: newProjectStartDate,
                endDate: newProjectEndDate,
                budget: newProjectBudget 
            }]);
            setNewProjectName('');
            setNewProjectStatus('In Progress');
            setNewProjectDescription('');
            setNewProjectStartDate('');
            setNewProjectEndDate('');
            setNewProjectBudget('');
            setIsModalOpen(false);
        }
    };

    return (
        <>
            <div className="flex h-screen bg-gray-200">
                <Sidebar />
                <div className="bg-white p-4 w-full ml-64">
                    <h3 className="text-lg font-semibold">Project Management</h3>
                    
                    {/* New Project Button */}
                    <button 
                        onClick={() => setIsModalOpen(true)} 
                        className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
                    >
                        New Project
                    </button>

                    {/* Project Table */}
                    <table className="min-w-full mt-4">
                        <thead>
                            <tr className="bg-gray-200 ">
                                <th className="px-4 py-2 text-left">Project Name</th>
                                <th className="px-4 py-2 text-left">Status</th>
                                <th className="px-4 py-2 text-left flex justify-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {projects.map((project) => (
                                <tr key={project.id}>
                                    <td className="border px-4 py-2">{project.name}</td>
                                    <td className="border px-4 py-2">{project.status}</td>
                                    <td className="border px-4 py-2 w-1/3">
                                    <div className='flex justify-center'>
                                        <button className="bg-blue-600 text-white rounded-xl ml-6 px-3 py-2">Edit</button>
                                        <button className="text-white bg-red-500 rounded-xl ml-6 px-3 py-2">Delete</button>
                                    </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Modal for New Project Form */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded shadow-lg w-1/3">
                        <h2 className="text-lg font-semibold mb-4">Add New Project</h2>
                        <input
                            type="text"
                            placeholder="Project Name"
                            className="border border-gray-300 rounded-md p-2 w-full mb-4"
                            value={newProjectName}
                            onChange={(e) => setNewProjectName(e.target.value)}
                        />
                        <select 
                            className="border border-gray-300 rounded-md p-2 w-full mb-4"
                            value={newProjectStatus}
                            onChange={(e) => setNewProjectStatus(e.target.value)}
                        >
                            <option value="In Progress">In Progress</option>
                            <option value="Completed">Completed</option>
                            <option value="Pending">Pending</option>
                        </select>
                        <textarea
                            placeholder="Project Description"
                            className="border border-gray-300 rounded-md p-2 w-full mb-4 h-20 resize-none"
                            value={newProjectDescription}
                            onChange={(e) => setNewProjectDescription(e.target.value)}
                        />
                        <input
                            type="date"
                            className="border border-gray-300 rounded-md p-2 w-full mb-4"
                            value={newProjectStartDate}
                            onChange={(e) => setNewProjectStartDate(e.target.value)}
                        />
                        <input
                            type="date"
                            className="border border-gray-300 rounded-md p-2 w-full mb-4"
                            value={newProjectEndDate}
                            onChange={(e) => setNewProjectEndDate(e.target.value)}
                        />
                        <input
                            type="number"
                            placeholder="Project Budget"
                            className="border border-gray-300 rounded-md p-2 w-full mb-4"
                            value={newProjectBudget}
                            onChange={(e) => setNewProjectBudget(e.target.value)}
                        />
                        <div className="flex justify-end">
                            <button 
                                onClick={handleAddProject} 
                                className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition mr-2"
                            >
                                Add
                            </button>
                            <button 
                                onClick={() => setIsModalOpen(false)} 
                                className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ProjectList;
