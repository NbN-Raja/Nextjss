
"use client";

import Image from "next/image";
import { GetServerSideProps } from 'next';
import axios from "axios";
import { useRouter } from "next/navigation";

import Navigationpage from "./component/navigation/page"
import ProfilePage from "./details/profile/page"
import HeroPage from "./Home/hero/page"
import BlogcontentPosts from "./component/Blog/postblog"
import BlogPost from "./Blog/page"
import Sidenav from "./component/sidenav/sidenav"

export default function Home() {
  const router = useRouter();
  
  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      router.push("/login");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
          <Navigationpage />

    <div className="bg-black flex justify-center mt-0">
     
        <div className=" fixed left-40   w-[259px] p-2 flex-col py-4">
         <Sidenav />
        </div>
        
        <div className="posts w-[598px]  ">
          <BlogcontentPosts />
          <BlogPost />
        </div>

        <div className="fixed max-w-[350px] top-20 right-40">
          <div className="bg-black p-1 ">
            <input
              type="search"
              name="search"
              placeholder="search ..."
              className="rounded-md h-10 pb-2 pt-1 pl-2 w-full "
            />
          </div>
        </div>
    </div>
    </>
  );
}
