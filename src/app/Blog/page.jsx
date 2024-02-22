import axios from "axios";
import { useEffect, useState } from "react";

export default function BlogPost() {
    const [blogPosts, setBlogPosts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("/api/blog/post");
                setBlogPosts(response.data.data); // Set blogPosts to response.data.data
            } catch (error) {
                setError(error);
            }
        };

        fetchData();
    }, []);

    if (error) {
        return <div>Error fetching data: {error.message}</div>;
    }
    const formatTimestamp = (timestamp) => {
        const date = new Date(timestamp);
        return date.toLocaleString(); // Adjust this to format the timestamp as desired
    };
    return (
        <div className="mx-8 pt-5">
            <div className="h1 flex justify-center p-2 pb-5">Post || Read || Like || Comment blog posts</div>
            {blogPosts.map(post => (
                <div key={post._id} className="justify-center w-96 mx-auto p-2 pb-4 border-b-2">
                    <div className="useredetails flex">
                        <div className="">
                            <div className="avatar bg-white h-10 w-10 rounded-full"></div>
                        </div>
                        <div className="ml-3">
                            <div className="username">{post.user.username}</div>
                            <div className="time">{formatTimestamp(post.timeStamp)}</div>
                        </div>
                        <div className=" relative  left-40">
                            <p>:</p>
                        </div>
                    </div>
                    <div className="blogdetails p-1 mt-3">
                        <p>{post.content}</p>
                    </div>
                    {/* like comment sections */}
                    <div className="flex justify-around p-1 mt-3">
                        <div className="">like</div>
                        <div className="">comment</div>
                        <div className="">Share</div>
                    </div>
                </div>
            ))}
        </div>
    );
}
