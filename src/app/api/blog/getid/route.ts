import { NextRequest, NextResponse } from "next/server";
import { Types } from 'mongoose';
import { decodetoken } from "@/helpers/decodetoken";
import { connect } from "@/db/db";
import Blog from "@/models/blogmodel";
import User from "@/models/usermodel";

export async function GET(req: NextRequest) {
    try {
        const userid = decodetoken(req);

        const users = await User.find({_id: userid}).exec();

        const blogs = await Blog.find({ userId: userid }).exec();
        console.log(userid);
        return NextResponse.json({ message: "Blog get here", blogs,users }, { status: 200 });
    } catch (error:any) {
        console.error(error);
        return NextResponse.json({ message: "Error getting blog", errorMessage: error.message }, { status: 500 });
    }
}

export async function POST(req: NextRequest) {
    try {
        await connect();
        const userid = decodetoken(req);
        const reqBody = await req.json();
        const { content } = reqBody;
        const blog = new Blog({
            userId: userid,
            content: content,
        });
        await blog.save(); // Wait for the save operation to complete
        return NextResponse.json({ message: "Content saved" });
    } catch (error:any) {
        console.error(error);
        return NextResponse.json({ message: "Error saving content", errorMessage: error.message }, { status: 500 });
    }
}
