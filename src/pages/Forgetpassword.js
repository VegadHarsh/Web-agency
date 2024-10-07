import React, { useState } from 'react';

const Forgetpassword = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            setError('Please enter a valid email address.');
            setMessage('');
            return;
        }
        
        setError('');
        setMessage('Password reset instructions have been sent to your email.');
        
        // Handle the actual password reset logic here (e.g., call an API).
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-semibold text-center mb-6">Forget Password</h2>
                
                {/* Success/Error Messages */}
                {message && <div className="text-green-600 text-center mb-4">{message}</div>}
                {error && <div className="text-red-600 text-center mb-4">{error}</div>}
                
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="email">
                            Email Address
                        </label>
                        <input 
                            type="email"
                            id="email"
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <button 
                        type="submit" 
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
                    >
                        Send Reset Link
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Forgetpassword;
