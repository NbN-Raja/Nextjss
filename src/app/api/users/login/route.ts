import { NextResponse,NextRequest  } from "next/server";
import { connect } from "@/db/db";
import User from "@/models/usermodel";
import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";


export function GET(){
   return NextResponse.json({message :"Login get here "},{status:200})
}


export async  function POST(req:NextRequest){

    try {
        // database connect first 
        await connect();

        // then you shoould change to json format 
        const reqBody = await req.json()
        const {username, password} = reqBody
        
        const user = await User.findOne({username})

        if(!user){

            return NextResponse.json({ message:"You are not registered"}, {status:300})
        }

        if(!username || !password){
            return NextResponse.json({ message:"Username or password required"},{status:300})
        }

      
        
       

    if (password === undefined) {
        return NextResponse.json({ message: 'Invalid password format' }, { status: 400 });
    }

    if (typeof password !== 'string') {
        return NextResponse.json({ message: 'Invalid password format' }, { status: 400 });
    }

    if (typeof user.password !== 'string') {
        return NextResponse.json({ message: 'Invalid password format' }, { status: 400 });
    }

        const validPassword=  bcryptjs.compare(password,user.password)

        if(!validPassword){
             NextResponse.json({error: "Invalid password"}, {status: 400})
        }

      
        const tokenid= {
            id:user._id,
        }

        const token = await jwt.sign(tokenid, process.env.Token_SECRET!,{expiresIn:"7d"})

        const response = NextResponse.json({
            message: "Login successful",
            success: true,
        })

        response.cookies.set("token", token, {
            httpOnly: true, 
            
        })

        return response;


    } catch (error:any ) {
        console.error(error)
        return NextResponse.json({ message:"Username or password required",errorMessage:error.message},{status:500})

    }
}