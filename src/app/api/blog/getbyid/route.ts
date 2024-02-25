import { NextRequest, NextResponse } from "next/server";
import { Types } from 'mongoose';
import { decodetoken } from "@/helpers/decodetoken";
import { connect } from "@/db/db";
import Blog from "@/models/blogmodel";
import User from "@/models/usermodel";

export async function GET(req: NextRequest) {
  try {
      // Fetch all blog posts
              const userid = decodetoken(req);

      const blogs = await Blog.find({userId: userid}).exec();

      // Extract user IDs from the blog posts
      const userIds = blogs.map(blog => blog.userId);

      // Fetch users corresponding to the user IDs
      const users = await User.find({ _id: { $in: userIds } }).exec();

      // Combine blog posts with user details
      const data = blogs.map(blog => {
          const user = users.find(u => u._id.equals(blog.userId)); // Find user details for the current blog post
          return { ...blog.toObject(), user }; // Combine blog post with user details
      });

      // Return the combined data in the response
      return NextResponse.json({ message: "Blog posts with user details", data }, { status: 200 });
  } catch (error:any) {
      console.error(error);
      return NextResponse.json({ message: "Error getting blog posts", errorMessage: error.message }, { status: 500 });
  }
}


// export async function POST(req: NextRequest) {
//     try {
//         await connect();
//         const userid = decodetoken(req);
//         const reqBody = await req.json();
//         const { content } = reqBody;
//         const blog = new Blog({
//             userId: userid,
//             content: content,
//         });
//         await blog.save(); // Wait for the save operation to complete
//         return NextResponse.json({ message: "Content saved" });
//     } catch (error:any) {
//         console.error(error);
//         return NextResponse.json({ message: "Error saving content", errorMessage: error.message }, { status: 500 });
//     }
// }
