import React from 'react';
import Link from 'next/link';
import Displaynamehome from "../../component/displayname"

const Sidenav = () => {
    return (
        <div className="py-4 font-semibold ">
            <div className="">
                <Link href="/">
                    <p className="block p-4 hover:bg-gray-700">Home</p>
                </Link>
            </div>
            <Link href="/">
                <p className="block p-4 hover:bg-gray-700">Post</p>
            </Link>
            <Link href="/">
                <p className="block p-4 hover:bg-gray-700">Notification</p>
            </Link>
           
            <Link href="/">
                <p className="block p-4 hover:bg-gray-700">Categories</p>
            </Link>
            <Link href="/profile">
                <p className="block p-4 bg-green-400 hover:bg-green-700 rounded-full">Profile</p>
            </Link>

            <div className="">
                <Displaynamehome />
            </div>
        </div>
    );
};

export default Sidenav;
