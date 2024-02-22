"use client";

import Image from "next/image";
import { GetServerSideProps } from 'next';
import axios from "axios";
import { useRouter } from "next/navigation";

import Navigationpage from "./component/navigation/page"
import ProfilePage from "./details/profile/page"
import HeroPage from "./Home/hero/page"
import BlogcontentPosts from "./component/Blog/postblog"

import  BlogPost from "./Blog/page"

import Sidenav from "./component/sidenav/sidenav"

export default function Home() {

  const router = useRouter()
  const logout = async () => {

    try {
      await axios.get("/api/users/logout")
      router.push("/login")

    } catch (error) {
      console.error(error)

    }
  }
  return (
    <div className="bg-black ">
      <Navigationpage />
      
        <div className="">
          <div className="sidenav ">
            <Sidenav />
          </div>
          <ProfilePage />
          <div className="sidenav ">
          
      <BlogcontentPosts />
      <BlogPost />
          </div>
        </div>
      
    </div>
  );
}
