import { prisma } from '@/prisma/client';
import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";


export async function POST(request: NextRequest) {
    const body = await request.json();

    const validation = schema.safeParse(body);

    if (!validation.success)
        return NextResponse.json(validation.error.errors, { status: 400 });


    const createIssue = await prisma.issue.create({
        data:{
            title:body.title,
            description:body.description,
            updatedAt:new Date()
        }
    });

    return NextResponse.json(createIssue, { status: 200 });
}