import { Button, Container, Heading, Input, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <Container maxW={"container.xl"} h={"100vh"} p={"16"}>
      <form>
        <VStack alignItems={"stretch"} spacing={"8"} w={["full","96"]} m="auto" my="16">
          <Heading textAlign={"center"}>Login</Heading>
          <Input type={"email"} placeholder="enter your email" required focusBorderColor='teal.500'/>
          <Input type={"password"} placeholder="enter your password" required focusBorderColor='teal.500'/>
          <Button variant={"link"} alignSelf={"flex-end"}>
            <Link to={"/forgetpassword"} style={{fontSize:"14px"}}>forget password?</Link>
          </Button>
          <Button bgColor={"teal.500"} type={"submit"} textColor={"whitesmoke"} _hover={"teal.900"}>logIn</Button>
          <Text alignSelf={"flex-end"} style={{fontSize:"14px"}}> new user? <Link to={"/signUp"} style={{fontSize:"18px"}}>Sign Up</Link></Text>
        </VStack>
      </form>
    </Container>
  )
}

export default Login