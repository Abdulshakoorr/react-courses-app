import { Box, Button, Heading, Input, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <Box  bottom={"0"} px={["4","16"]} bgColor={"black"} minW={"full"} color={"white"} py={"4"}>
        <Stack direction={["column","row"]} display={"flex"} alignItems={"center"} justifyContent={"space-between"} gap={"4"}>
            <Heading size={['md',"2xl"]} >XOMME</Heading>
            <VStack borderLeft={"2px"}  borderRight={"2px"} px={"8"}>
                <Heading size={['sm',"md"]}>Follow Us</Heading>
              <Text cursor={"pointer"}>facebook</Text>
              <Text cursor={"pointer"}>twitter</Text>
              <Text cursor={"pointer"}>linked in</Text>
            </VStack>
           <Box >
            <Input w={"50"} borderRadius={"full"} placeholder="subscribe to news latter"/>
            <Button variant={"ghost"} border={"1px"} borderRadius={"full"} _hover={"black"} mx={"4"}>Subscribe</Button>
           </Box>
        </Stack>
    </Box>
  )
}

export default Footer
