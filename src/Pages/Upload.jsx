import { Button, Container,HStack,Input,VStack } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineCloudUpload } from 'react-icons/ai'

const Upload = () => {
  return (
    <Container maxW={"container.xl"} h={"100vh"} p={"16"}>
      <VStack >
        <AiOutlineCloudUpload size={"10vmax"}/>
        <form>
          <HStack>
            <Input type={"file"} required p={"2"} css={{
              '&::file-selector-button':{
                border:"none",
                outline:"none",
                width:"calc(100% + 36px)",
                // height:"calc(100% + 36px)",
                marginLeft:"-32px",
                color:"teal",
                background:"white",
                cursor:"pointer"

              }
            }}/>
            <Button colorScheme={"teal"} type="submit">Upload</Button>
          </HStack>
        </form>
      </VStack>
    </Container>
  )
}

export default Upload