/**
 Created by: carlos
 At: 7/12/23 - 14:54
 */

import {NextResponse} from "next/server";

export async function GET(request:Request){
    return NextResponse.json({
        hola:'mundo'
    });
}