import { prisma } from "@/prisma/client";
import delay from "delay";
import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: Promise <{ id: string }>;
}

const IssueDetailsPage = async ({ params }: Props) => {

  await delay(1000);

  const id = (await params).id;

  if(typeof id !== "string") notFound();
  
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(id) },
  });

  if (!issue) notFound();
  return (
    <div>
      <p>{issue.title}</p>
      <p>{issue.description}</p>
      <p>{issue.status}</p>
      <p>{issue.createdAt.toDateString()}</p>
    </div>
  );
};

export default IssueDetailsPage;
