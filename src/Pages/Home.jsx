import React from 'react'
import {Container,Heading,Stack,Image,Text} from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import MyCarousel from '../Components/Carousel'


const Home = () => {
  return (
    <Box>
        <MyCarousel/>
        <Container maxW={'container.xl'}  p="16">
          <Heading textTransform={"uppercase"} py="4" m="auto" w={"fit-content"} borderBottom="2px solid black">Services</Heading>
          <Stack h="full" p="4" alignItems="center" direction={["column" ,"row"]} justifyContent={"center"} gap={"4"} mt={"14"}>
            <Image src='https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80' w={["64","96"]} borderRadius="4" boxShadow={"dark-lg"} filter={"hue-rotate(-180deg)"}></Image>
            <Box>
              <Heading px={["4","16"]}>Web-Development</Heading>
              <Text p={["4","16"]}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quia, provident deserunt, cumque reprehenderit corrupti adipisci voluptatum inventore eum eligendi vero harum quidem aut illo ad dolores sint iste quibusdam.
              </Text>
            </Box>
          </Stack>
          <Stack h="full" p="4" alignItems="center" direction={["column" ,"row"]} justifyContent={"center"} gap={"4"} mt={"14"}>
            <Box>
              <Heading px={["4","16"]}>UI Design Wireframing</Heading>
              <Text p={["4","16"]}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quia, provident deserunt, cumque reprehenderit corrupti adipisci voluptatum inventore eum eligendi vero harum quidem aut illo ad dolores sint iste quibusdam.
              </Text>
            </Box>
            <Image src='https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' w={["64","96"]} borderRadius="4" boxShadow={"dark-lg"} filter={"hue-rotate(180deg)"}></Image>
          </Stack>
          <Stack h="full" p="4" alignItems="center" direction={["column" ,"row"]} justifyContent={"center"} gap={"4"} mt={"14"}>
            <Image src='https://images.unsplash.com/photo-1587440871875-191322ee64b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80' w={["64","96"]} borderRadius="4" boxShadow={"dark-lg"} filter={"hue-rotate(-180deg)"}></Image>
            <Box>
              <Heading px={["4","16"]}>UX Strategies</Heading>
              <Text p={["4","16"]}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quia, provident deserunt, cumque reprehenderit corrupti adipisci voluptatum inventore eum eligendi vero harum quidem aut illo ad dolores sint iste quibusdam.
              </Text>
            </Box>
          </Stack>
          <Stack h="full" p="4" alignItems="center" direction={["column" ,"row"]} justifyContent={"center"} gap={"4"} mt={"14"}>
          <Box>
              <Heading px={["4","16"]}>Web-Seo </Heading>
              <Text p={["4","16"]}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quia, provident deserunt, cumque reprehenderit corrupti adipisci voluptatum inventore eum eligendi vero harum quidem aut illo ad dolores sint iste quibusdam.
              </Text>
            </Box>
          <Image src='https://images.unsplash.com/photo-1599658880436-c61792e70672?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' w={["64","96"]} borderRadius="4" boxShadow={"dark-lg"} filter={"hue-rotate(180deg)"}></Image>
          </Stack>
        </Container>
    </Box>
  )
}

export default Home