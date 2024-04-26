const { NextResponse } = require("next/server");
import jwt from "jsonwebtoken";
import { headers } from 'next/headers';

export  const decodetoken= (req)=>{

    try {
        //   use gettoken from headers and 
        const getToken = req.cookies.get('token')?.value || '';



//  verify the token 
        const decodedtoken= jwt.decode(getToken, process.env.Token_SECRET);

        return decodedtoken.id;
        // Decoded id
        
    } catch (error) {
        console.error(error)
        return NextResponse.json("Error occured",error)
        
    }

}

