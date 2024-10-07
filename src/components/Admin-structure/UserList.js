import React, { useState } from 'react';
import Sidebar from '../Admin-structure/Sidebar';

const UserList = () => {
    const initialUsers = [
        { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
        { id: 3, name: 'Mike Johnson', email: 'mike@example.com', role: 'User' },
        // Add more users if needed
    ];

    const [users, setUsers] = useState(initialUsers);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortConfig, setSortConfig] = useState({ key: 'name', direction: 'ascending' });

    // Search functionality
    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Sorting function
    const sortedUsers = filteredUsers.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
    });

    const requestSort = (key) => {
        let direction = 'ascending';
        if (sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    return (
        <div className="flex h-[100%]">
            <Sidebar />
            <div className="flex-1 bg-white ml-64 p-4">
                <h3 className="text-lg font-semibold mb-4">User List</h3>

                <div className="mt-4 mb-2">
                    <input
                        type="text"
                        placeholder="Search users..."
                        className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-600"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                <div className="overflow-x-auto">
                    <table className="min-w-full mt-4 border border-gray-200 rounded-lg shadow-lg">
                        <thead className="bg-blue-600 text-white">
                            <tr>
                                <th onClick={() => requestSort('name')} className="cursor-pointer px-6 py-4 text-left">Name</th>
                                <th onClick={() => requestSort('email')} className="cursor-pointer px-6 py-4 text-left">Email</th>
                                <th onClick={() => requestSort('role')} className="cursor-pointer px-6 py-4 text-left">Role</th>
                                <th className="px-6 py-4 text-left">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            {sortedUsers.map((user, index) => (
                                <tr key={user.id} className={`border-t border-gray-200 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} transition duration-300 hover:bg-blue-50`}>
                                    <td className="border-b px-6 py-4">{user.name}</td>
                                    <td className="border-b px-6 py-4">{user.email}</td>
                                    <td className="border-b px-6 py-4">{user.role}</td>
                                    <td className="border-b px-6 py-4">
                                        <button className="bg-blue-600 sm:mb-3 text-white rounded-xl ml-6 px-3 py-2">Edit</button>
                                        <button
                                            className="text-white bg-red-500 rounded-xl ml-6 px-3 py-2"
                                            onClick={() => {
                                                if (window.confirm('Are you sure you want to delete this user?')) {
                                                    setUsers(users.filter(u => u.id !== user.id));
                                                }
                                            }}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default UserList;
