import { Box, Heading, Image } from '@chakra-ui/react'
import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css' 

const headings ={
  pos:"absolute",
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  p: 4,
  
  
}


const MyCarousel = () => {
  return (
    <Carousel autoPlay infiniteLoop interval={2000} showStatus={false} showThumbs={false} showArrows={false}>
    

        <Box w={"full"} h={"100vh"}>
            <Image src='https://images.unsplash.com/photo-1625014618427-fbc980b974f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80'/>
            <Heading bg={"blackAlpha.600"} color={"white"} {...headings}> lets build future together</Heading>
        </Box>
        <Box w={"full"} h={"100vh"}>
            <Image src='https://images.unsplash.com/photo-1560369457-fb1181a7ac4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80'/>
            <Heading bg={"blackAlpha.600"} color={"white"} {...headings}>Enabling the age of technology</Heading>
        </Box>
        <Box w={"full"} h={"100vh"}>
            <Image src='https://images.unsplash.com/photo-1552871847-d81af14f486d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80'/>
            <Heading bg={"blackAlpha.600"} color={"white"} {...headings}> Accelerating Tech with confidence</Heading>
        </Box>
    
    </Carousel>
  )
}

export default MyCarousel