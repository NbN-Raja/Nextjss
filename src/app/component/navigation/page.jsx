"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NavigationPage() {
  const router = useRouter();
  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      router.push("/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <nav className="mx-auto mt-4">
      <ul className="flex justify-between">
        <div className=" ml-5">
        <div className="avatar h-15 w-15 p-2 bg-white rounded-full flex items-center justify-center">
  <p className="text-sm font-semibold text-black">Quicky</p>
</div>
        </div>

       
        <li>
          <button
            onClick={logout}
            className="text-xl mr-5 border border-gray-500 rounded-md p-2"
          >
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
}
