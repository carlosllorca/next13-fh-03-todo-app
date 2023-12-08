/**
 Created by: carlos
 At: 7/12/23 - 15:54
 */
import {NextResponse} from "next/server";
import prisma from "@/lib/prisma";

export async function GET(request: Request) {
    await prisma.todo.deleteMany()
    await prisma.todo.createMany({
        data:[
            {description:'Piedra del alma',complete:true},
            {description:'Piedra del poder'},
            {description:'Piedra del tiempo'},
            {description:'Piedra de la realidad'},
        ]
    })
    return NextResponse.json({
        message: 'Seed executed'
    });
}