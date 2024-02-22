"use clinet";
import React from 'react';

const Sidenav = () => {
    return (
        <div className="fixed left-0 top-32 h-full w-64 bg-black-800 text-white flex flex-col justify-between border-r-2">
            <div className="py-4">
                <a href="#" className="block p-4 hover:bg-gray-700">Home</a>
                <a href="#" className="block p-4 hover:bg-gray-700">Post</a>
                <a href="#" className="block p-4 hover:bg-gray-700">Notification</a>
                <a href="#" className="block p-4 hover:bg-gray-700">Profile</a>
                <a href="#" className="block p-4 hover:bg-gray-700">Categories</a>

                <a href="#" className="block p-4 bg-green-400 hover:bg-green-700 rounded-full">Post</a>
            </div>
            <div className="pb-4">
                <a href="#" className="block p-4 hover:bg-gray-700">Logout</a>
            </div>
        </div>
    );
};

export default Sidenav;
