import { connect } from "@/dbConfig/dbConfig";
import User from '@/models/userModel'
import { NextRequest, NextResponse } from "next/server";
import { getDataFromToken } from "@/helpers/detDataFromToken";

connect()

export async function GET(request: NextRequest){
    const userId = await getDataFromToken(request)
    const user = await User.findOne({_id: userId}).select("-password")
    if(!user){
        return NextResponse.json({error: "invalid token"}, {status: 400})
    }
    return NextResponse.json({
        message: "User Found",
        data: user
    })
}