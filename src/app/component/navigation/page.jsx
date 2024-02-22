"use client";

import axios from 'axios';
import Link from 'next/link';
import { useRouter } from "next/navigation";

export default function NavigationPage() {


    const router= useRouter();
  const  logout=async  () =>{

    try {

       await axios.get("/api/users/logout")
       router.push("/login")
      
    } catch (error) {
      console.error(error)
      
    }

  }

    return (
        <nav className='mx-auto mt-4'>
            <ul className='flex justify-between'>

                <div className=" ml-5">
                <div className="avatar h-10 w-10 bg-white rounded-full">

                </div>
                </div>
                
                <div className=" ml-5">
                 <input type='search' name='search' placeholder='search ...' className='rounded-md h-10 pb-2 pt-1 pl-2 w-96 ' />
                </div>
                <li>
                <button onClick={logout} className='text-xl mr-5 border border-gray-500 rounded-md p-2'>
                Logout 

              </button>
                              </li>
            </ul>
        </nav>
    );
}
