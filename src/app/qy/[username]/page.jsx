"use client";
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation'

export default function UserProfile({params}) {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {


                const response = await axios.get(`/api/users/${params.username}`);

                setUserData(response.data.data);
                setLoading(false);
                console.log(params.username);
            } catch (error) {
                console.error('Error fetching user data:', error);
                setError(error);
                setLoading(false);
            }
        };

        fetchUserData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
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
                <h2 className="text-xl font-bold mb-5">Reply</h2>
                {/* <h2 className="text-xl font-bold mb-5">Reply</h2> */}
                {/* Render your posts here */}
            </div>
        </div>
    );
}
