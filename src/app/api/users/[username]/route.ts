import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/db/db";
import User from "@/models/usermodel";
import { decodetoken } from "@/helpers/decodetoken";

export async function GET(req: NextRequest) {
    try {
        await connect();
        
        // Get the request URL
        const { url } = req;

        // Extract the username from the URL
        const username = extractUsernameFromUrl(url);

        // Find the user in the database based on the extracted username
        const user = await User.findOne({ username });

        // Return a JSON response
        return NextResponse.json({
            message: "User found",
            data: user
        });
    } catch (error: any) {
        // Handle errors
        console.error(error);
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}

function extractUsernameFromUrl(url: string): string {
    // Assuming the username is the last part of the URL after the last '/'
    const parts = url.split('/');
    return parts[parts.length - 1];
}
