import { Flex, Card, Box } from '@radix-ui/themes'
import React from 'react'
import {Skeleton} from '@/app/components'


const LoadingIssueDetailsPage = () => {
  return (
    <Box className='max-w-xl'>
      <Skeleton/>
      <Flex className="space-x-3 items-center" my="3">
        <Skeleton width="5rem"/>
        <Skeleton width="8rem"/>
      </Flex>
      <Card className='prose'>
        <Skeleton count={3}/>
      </Card>
    </Box>
  )
}

export default LoadingIssueDetailsPage
