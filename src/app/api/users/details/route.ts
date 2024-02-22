import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/db/db";
import User from "@/models/usermodel";
import {decodetoken  } from "@/helpers/decodetoken";

export  async function GET(req:NextRequest) {

    try {

        await connect();
        const tokenid= decodetoken(req);
        const user= await User.findById({_id:tokenid});
        
        return NextResponse.json({
            mesaaage: "User found",
            data: user
        })

    } catch (error:any) {
        console.error(error)
        return NextResponse.json({error: error.message}, {status: 400});
        
    }
    
}