"use client";

import axios from "axios";
import { useEffect, useState } from "react";

export default function Displaynamehome() {
  const [userData, setUsername] = useState(null);

  useEffect(() => {
    const fetchUsername = async () => {
      try {
        const response = await axios.get("/api/users/details");
        setUsername(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUsername();
  }, []);

  return (
    <div className="flex mt-40">
      <div className="avatar w-10 h-10 rounded-full bg-gray-500"></div>

      <div className="ml-2">
        {/* Username */}
        <h1 className="text-[16px] font-bold ">
          {userData ? userData.username : "Loading..."}
        </h1>

        {/* Email */}
        <p className="mt-2 text-[14px]">{userData ? userData.email : "Loading..."}</p>
      </div>
    </div>

    //  second page starts
  );
}
