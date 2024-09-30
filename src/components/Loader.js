// Loader.js
import React from 'react';

const Loader = () => {
    return (
        <div id="loader" className="loader" style={{ display: 'flex' }}>
            {/* Loader animation or spinner */}
            <div id="loader" className="flex justify-center items-center h-screen">
                <img src="/Assets/Imgs/temple-loader.gif" alt="loader" />
            </div>
        </div>
    );
};

export default Loader;
