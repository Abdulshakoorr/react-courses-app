import { Button, Container, Heading, Input, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <Container maxW={"container.xl"} h={"100vh"} p={"16"}>
        <form>
          <VStack w={["full","96"]} m="auto" my="16">
            <Heading textAlign={"center"}>Sign Up</Heading>
            <Input type={"text"} placeholder="enter your name" required focusBorderColor='teal.500'/>
            <Input type={"email"} placeholder="enter your email" required focusBorderColor='teal.500'/>
            <Input type={"password"} placeholder="enter your password" required focusBorderColor='teal.500'/>
            <Button variant={"link"} alignSelf={"flex-end"}>
            </Button>
            <Button bgColor={"teal.500"} type={"submit"} textColor={"whitesmoke"} _hover={"teal.900"}>Sign Up</Button>
            <Text> already have an account <Link to={"/login"}>Sign In</Link>
              {/* <Link to={"/forgetpassword"}>forget password?</Link> */}
            </Text>
          </VStack>
        </form>
    </Container>
  )
}

export default SignUp