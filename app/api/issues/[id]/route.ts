import issueSchema from "@/app/validationSchema";
import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH (request:NextRequest , {params}:{params:Promise<{id:string}>}){
    const body = await request.json();
    const validation = issueSchema.safeParse(body);

    if(!validation.success)
        return NextResponse.json(validation.error.format(),{status:400});

    const id = (await params).id;

    const issue = await prisma.issue.findUnique({
        where:{id: parseInt(id)}
    });

    if(!issue)
        return NextResponse.json({error:'Invalid Issue'},{status:404});
    
    const updateIssue = await prisma.issue.update({
        where:{id: issue.id},
        data:{
            title:body.title,
            description:body.description
        }
    });

    return NextResponse.json(updateIssue);
}