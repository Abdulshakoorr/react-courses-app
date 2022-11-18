import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import {BiMenuAltLeft} from "react-icons/bi"
// import {MdOutlineCategory} from "react-icons/md"
import {GrScorecard,GrContactInfo} from "react-icons/gr"
import {RiAccountPinCircleLine} from "react-icons/ri"
import {HiUserCircle} from "react-icons/hi"
import {AiOutlineLogin,AiOutlineVideoCameraAdd} from "react-icons/ai"
import {FaSignInAlt} from "react-icons/fa"
import {AiOutlineHome} from "react-icons/ai"

const Header = () => {
    const {isOpen,onOpen,onClose} = useDisclosure()
  return <>
    <Button 
    pos={"fixed"}
    left={4}
    top={4}
    colorScheme={"purple"}
    w={6}
    h={6}
    p={0}
    zIndex={1000}
    background={"teal.400"}
    borderRadius={"full"}
    onClick={onOpen}
    >
        <BiMenuAltLeft size={"20"}/>
    </Button>
    <Drawer isOpen={isOpen} placement="left" onClose={onClose} >
      <DrawerOverlay/>
      <DrawerContent>
        <DrawerCloseButton/>
        <DrawerHeader>
          <h2>XOMME</h2>
        </DrawerHeader>
        <DrawerBody>
          <VStack alignItems={"flex-start"} justifyContent={"space-between"} gap={8}>
            <Button onClick={onClose} variant={"link"} colorScheme={"teal"} gap={2}>
              <AiOutlineHome/>
              <Link to="/">Home</Link>
            </Button>
            <Button onClick={onClose} variant={"link"} colorScheme={"teal"} gap={2}>
            <AiOutlineVideoCameraAdd/>
              <Link to="/courses">Courses</Link>
            </Button>
            <Button onClick={onClose} variant={"link"} colorScheme={"teal"} gap={2}>
              <HiUserCircle/>
              <Link to="/users:id">Profile</Link>
            </Button>
            <Button onClick={onClose} variant={"link"} colorScheme={"teal"} gap={2}>
              <GrScorecard color='teal'/>
              <Link to="/upload">Upload</Link>
            </Button>
            <Button onClick={onClose} variant={"link"} colorScheme={"teal"} gap={2}>
              <RiAccountPinCircleLine/>
              <Link to="/account">Accounts</Link>
            </Button>
            {/* <Button variant={"link"} colorScheme={"teal"} gap={2}>
              <MdOutlineCategory/>
              <Link to="/category">Category</Link>
            </Button> */}
            <Button onClick={onClose} variant={"link"} colorScheme={"teal"} gap={2}>
              <GrContactInfo/>
              <Link to="/info">Information</Link>
            </Button>
          </VStack>
          <HStack pos={"absolute"} bottom={"10"} left={"4"}>
            <Button onClick={onClose} variant={"outline"} colorScheme={"teal"} gap={2}>
              <AiOutlineLogin/>
              <Link to="/login">log In</Link>
            </Button>
            <Button onClick={onClose} variant={"solid"} colorScheme={"teal"} gap={2}>
              <FaSignInAlt/>
              <Link to="/signUp">Sign Up</Link>
            </Button>
          </HStack>
        </DrawerBody>
   
      </DrawerContent>
    </Drawer>
  </>;
};

export default Header;
