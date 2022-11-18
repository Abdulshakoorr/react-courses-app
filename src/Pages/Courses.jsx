import { Stack, VStack,Heading,Text, Button } from '@chakra-ui/react'
import React, { useState } from 'react'
// import videosList from '../videos';


const Courses = () => {
  const listedVideos = [
    "../../Assets/video1.mp4",
    "../../Assets/video2.mp4",
    "../../Assets/video3.mp4",
    "../../Assets/video4.mp4",
    "../../Assets/video5.mp4",
    "../../Assets/video6.mp4",
  ]
  const [videos,setVideos] = useState(listedVideos[0])
  return (
    <>
          <Stack direction={["column","row"]} p={["16px","24"]} h={"90vh"}>
          <VStack w={"full"}>
            <video src={videos} controls controlsList='nodownload' style={{width:"100%", borderRadius:"16px"}}></video>
            <VStack alignItems={"flex-start"} p={"8"} w={"full"} overflowY={"auto"}>
                       <Heading>lecture: 01</Heading>
                       <Text>description:lorem </Text>
            </VStack>
          </VStack>
          <VStack w={["full","xl"]} alignItems={"stretch"} px={"8"} spacing={"8"} overflowY={"auto"}>
           {
            listedVideos.map((item,index)=>{
              return(
                <Button variant={"outline"} colorScheme={"teal"} 
                onClick={()=> setVideos(item)}>lecture : {index+1}</Button>
              )   
            })
           }
          </VStack>
        </Stack>
    </>
  )
}

export default Courses