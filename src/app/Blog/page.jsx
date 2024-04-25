"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import Skeletonloader from "../component/loader";
import Link from "next/link";

export default function BlogPost() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // State to track loading status

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/blog/post");
        setBlogPosts(response.data.data.reverse());
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  // like

  const like = async (postId) => {
    try {
      const response = await axios.post(`/api/blog/like/${postId}`);
      // Assuming the like operation was successful, update the state to reflect changes
      const updatedPosts = blogPosts.map((post) => {
        if (post._id === postId) {
          return { ...post, like: post.like + 1 }; // Assuming you have a 'likes' field in your post object
        }
        return post;
      });
      setBlogPosts(updatedPosts);
    } catch (error) {
      setError(error);
    }
  };

  if (error) {
    return <div>Error fetching data: {error.message}</div>;
  }

  if (loading) {
    // Render loader while data is being fetched
    return (
      <div className="loader flex justify-center">
        <Skeletonloader items={4} />
      </div>
    );
  }

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diff = Math.floor((now - date) / 1000); // Difference in seconds

    if (diff < 60) {
      return `${diff} sec `;
    } else if (diff < 3600) {
      const mins = Math.floor(diff / 60);
      return `${mins} min `;
    } else if (diff < 86400) {
      const hours = Math.floor(diff / 3600);
      return `${hours} hour${hours > 1 ? "s" : ""} `;
    } else if (diff < 604800) {
      const days = Math.floor(diff / 86400);
      return `${days} day${days > 1 ? "s" : ""} `;
    } else {
      const weeks = Math.floor(diff / 604800);
      return `${weeks} week${weeks > 1 ? "s" : ""} `;
    }
  };

  return (
    <div className="mx-8 pt-5">
      {blogPosts.map((post) => (
        <div
          key={post._id}
          className="justify-center w-96 mx-auto p-2 pb-4 border-gray-400 border-b-2 border-t-2"
        >
          <div className="useredetails flex justify-between">
            <div className="">
              <div className="avatar bg-white h-[40px] w-[40px] rounded-full"></div>
            </div>
            <div className="mr-60">
              <div className="username text-md font-semibold">
                <Link href={`/qy/${post.user.username}`}>
                  <p>{post.user.username}</p>
                </Link>
              </div>
              <div className="time text-[12px] text-gray-400 font-semibold">
                {formatTimestamp(post.timeStamp)}
              </div>
            </div>
            <div className=" ">
              <p>:</p>
            </div>
          </div>
          <div className="blogdetails p-1 mt-3">
            <p>{post.content}</p>
          </div>
          {/* like comment sections */}
          <div className="flex justify-around p-1 mt-3">
            <div className="flex">
              <div className="bg-grey-200 border border-1">
                {/* <button onClick={like}> &#128077; like</button> */}
                <button onClick={() => like(post._id)}> &#128077; Like</button>
              </div>
              <div className="ml-3"> {post.like}</div>
            </div>
            <div className=""> &#128172; comment</div>
            <div className=""> &#128260; Share</div>
          </div>
        </div>
      ))}
    </div>
  );
}
