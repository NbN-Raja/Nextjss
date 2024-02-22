import { NextResponse,NextRequest  } from "next/server";
import { connect } from "@/db/db";
import User from "@/models/usermodel";
import bcrypt from "bcrypt";



// To handle a GET request to /api
export async function GET() {
    // Do whatever you want
    return NextResponse.json({ message: "Hello World" }, { status: 200 });
}

// To handle a POST request to /api
export async function POST(req: NextRequest) {
    try {
        await connect();
        const reqBody = await req.json()
        const {username, email, password} = reqBody



        const existingUser = await User.findOne({ username });

        if (existingUser) {
            return NextResponse.json({ message: "username or email already exists" }, { status: 301 });
        }
        
        // Generate salt
        const salt = await bcrypt.genSalt(10);
        
        // Check if password is provided
        if (!password) {
            return NextResponse.json({ error: 'Password is required' }, { status: 400 });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            username: username,
            email: email,
            password: hashedPassword
        });

        await newUser.save();

        return NextResponse.json({ message: "user registered completely" }, { status: 200 });

    } catch (error:any) {
        console.error(error);
        return NextResponse.json({ error: 'Something went wrong', errorMessage: error.message }, { status: 500 });
    }
}
