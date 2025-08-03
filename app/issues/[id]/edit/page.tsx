import React from 'react'
import { prisma } from '@/prisma/client'
import { notFound } from 'next/navigation'
import IssueForm from '../../_components/IssueFormClient'

interface Props{
    params:Promise<{id:string}>
}

const EditIssuePage = async ({params}:Props) => {

    const id =(await params).id
    const issue = await prisma.issue.findUnique({
        where:{id:parseInt(id)}
    });

    if(!issue) notFound();

  return (
    <IssueForm issue={issue}/>
  )
}

export default EditIssuePage
