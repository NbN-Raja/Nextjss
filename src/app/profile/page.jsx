"use client";

import NavigationPage from "../component/navigation/page";

import Sidenav from "../component/sidenav/sidenav"
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function ProfilePage() {

  const [userData, setUsername] = useState(null);

  useEffect(() => {
    const fetchUsername = async () => {
      try {
        const response = await axios.get('/api/users/details');
        setUsername(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUsername();
  }, []);


  return (
    <div className="">
      <NavigationPage />

      <div className="container p-2 flex justify-center items-center">
      <div className=" fixed left-40 top-10   w-[259px] p-2 flex-col py-4">
         <Sidenav />
        </div>
        <div className="flex flex-col items-center w-[500px]">
            {/* Cover image */}
            {/* <img src="cover-image-url" alt="Cover" className="w-full" /> */}
            <div className="w-full h-36 bg-gray-600"></div>

            {/* Avatar */}
            <div className="relative">
            {/* <img src={userData?.avatar} alt="Avatar" className="w-32 h-32 rounded-full border-4 border-white absolute -bottom-16" /> */}
            <div className="w-36 h-36 rounded-full bg-gray-600"></div>

                <button className="absolute top-0 right-0 bg-gray-800 text-white rounded-full w-8 h-8 flex items-center justify-center">Edit</button>
            </div>

            {/* Username */}
            <h1 className="text-2xl font-bold mt-4">{userData ? userData.username : 'Loading...'}</h1>

            {/* Email */}
            <p className="mt-2">{userData ? userData.email : 'Loading...'}</p>

            {/* Other content */}
            <div className="w-full justify-evenly flex mt-8">
                {/* Posts */}
                <h2 className="text-xl font-bold mb-4">Quicks</h2>
                <h2 className="text-xl font-bold mb-4">Reply</h2>
                {/* Render your posts here */}
            </div>
        </div>
      </div>


     

    </div>
    

    //  second page starts
  );
}
