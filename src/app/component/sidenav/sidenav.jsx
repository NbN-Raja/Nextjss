"use clinet";
import React from 'react';

const Sidenav = () => {
    return (
            <div className="py-4">
            <div className="">
          <a href="#" className="block p-4 hover:bg-gray-700">Home</a>

          </div>
          <a href="#" className="block p-4 hover:bg-gray-700">Post</a>
          <a href="#" className="block p-4 hover:bg-gray-700">Notification</a>
          <a href="#" className="block p-4 hover:bg-gray-700">Profile</a>
          <a href="#" className="block p-4 hover:bg-gray-700">Categories</a>
          <a href="#" className="block p-4 bg-green-400 hover:bg-green-700 rounded-full">Post</a>
            </div>
            
    );
};

export default Sidenav;
