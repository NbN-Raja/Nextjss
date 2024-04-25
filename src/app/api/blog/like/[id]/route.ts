import { NextRequest, NextResponse } from "next/server";
import Blog from "@/models/blogmodel"
import User from "@/models/usermodel";
import { connect } from "@/db/db";
import { NextApiRequest } from "next";

export async function GET(request: NextRequest, content: { params: { id: string } }) {


    try {
        await connect()

      const id= content.params.id

        // Now you have the ID, you can use it to fetch data from the database or perform any other operations
        // For example, fetching a blog post with the extracted ID
        const blogPost = await Blog.find({_id:id}).select("like")

        // Return the blog post in the response
        return NextResponse.json({ message: "Blog post found", data: blogPost });
    } catch (error: any) {
        // Handle errors

        console.error(error);
        return NextResponse.json({ message: "Error getting blog post", errorMessage: error.message }, { status: 500 });
    }
}


export async function POST(request: NextRequest, content: { params: { id: string } }) {

    try {

        await connect();

        // get id for like post
        const id= content.params.id;

      
         

        const updatedBlogPost = await Blog.findByIdAndUpdate(id, { $inc: { like: 1 } }, { new: true });
        if (!updatedBlogPost) {
            return NextResponse.json({ message: "Blog post not found" }, { status: 404 });
        }

        // Return the updated blog post with the new like count
        return NextResponse.json({ message: "Like count updated", data: updatedBlogPost });
        
    } catch (error:any) {
        return NextResponse.json({ message: "Error getting blog post", errorMessage: error.message }, { status: 500 });

    }


}