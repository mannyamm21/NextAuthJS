import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";

connect()

export async function GET(){
    try {
        const reponse = NextResponse.json({
            message: "Logout Successfully",
            success: true
        })

        reponse.cookies.set("token","",{
            httpOnly: true,
            expires: new Date(0)
        })
        return reponse
    } catch (error:any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}