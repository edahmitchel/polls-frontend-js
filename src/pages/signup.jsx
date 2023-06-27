import {Flex, Box, Spacer, Text, Input, Image, Button } from "@chakra-ui/react";
import { useState } from "react";
import Divine from "../assets/images/manvote.png";
import {Link } from "react-router-dom";
import {AiFillEye, AiFillEyeInvisible} from "react-icons/ai"
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
  } from '@chakra-ui/react'
export const SignUp = () =>{
    const [eyeopen, setEyeOpen] = useState(false);
    const [eyeopen2, setEyeOpen2] = useState(false)
        return(
        <>
        <div className="body">
        <Flex h={"100vh"} w={"100vw"} >
            <Flex w={{base:"100%", lg:"50%"}} m={"10rem"} direction="column" alignItems="center" justifyContent= "center">
               <Text w={"100%"} textAlign={"left"} mb={"0.4rem"} fontSize={"28px"}>Welcome!</Text>
               <Text w={"100%"} textAlign={"left"} color="gray.400" mb={"1.5rem"} fontSize={"16px"}>
                    We just need a little more information to set up your account.
                    Get ready to make a choice of a life time. Vote wisely!!
               </Text>
               <FormControl>
                    <Flex direction="row" w="100%">
                        <Flex direction="column" mb="1.5rem">
                            <FormLabel ml={"0.3rem"} fontWeight={"semibold"} fontSize={"16px"}>First name</FormLabel>
                            <Input type="text" w={"100%"} placeholder={"Enter name"}></Input>
                        </Flex>
                        <Spacer></Spacer>
                        <Flex direction="column">
                            <FormLabel ml={"0.3rem"} fontWeight={"semibold"} fontSize={"16px"}>Last name</FormLabel>
                            <Input type="text" w={"100%"} placeholder={"Enter name"}></Input>
                        </Flex>
                    </Flex>
                    <FormLabel ml={"0.3rem"} fontWeight={"semibold"} fontSize={"16px"}>Username</FormLabel>
                    <Input type="text" w={"100%"} placeholder={"Enter your Username"}></Input>
                    <FormLabel mt={"1.4rem"} ml={"0.3rem"} fontWeight={"semibold"} fontSize={"16px"}>Password</FormLabel>
                    <Flex alignItems="center" justifyContent="right" ><Input zIndex="0" position="absolute" type={eyeopen ? "text" : "password"} w={"100%"} placeholder={"............"}></Input>{eyeopen ? <AiFillEye onClick={()=>setEyeOpen(false)} size={"30px"} style={{paddingRight: "0.6rem" , color: "#0C8B28", cursor: 'pointer', zIndex: '10'}}></AiFillEye> : <AiFillEyeInvisible onClick={() => setEyeOpen(true)} size={"30px"} style={{paddingRight: "0.6rem", color: "#0C8B28", cursor: "pointer", zIndex: '10'}}></AiFillEyeInvisible>}</Flex>
                    <FormLabel mt={"1.4rem"} ml={"0.3rem"} fontWeight={"semibold"} fontSize={"16px"}>Confirm Password</FormLabel>
                    <Flex alignItems="center" justifyContent="right" >
                        <Input zIndex="0" position="absolute" type={eyeopen2 ? "text" : "password"} w={"100%"} placeholder={"............"}></Input>{eyeopen2 ? <AiFillEye onClick={()=>setEyeOpen2(false)} size={"30px"} style={{paddingRight: "0.6rem" , color: "#0C8B28", cursor: 'pointer', zIndex: '10'}}></AiFillEye> : <AiFillEyeInvisible onClick={() => setEyeOpen2(true)} size={"30px"} style={{paddingRight: "0.6rem", color: "#0C8B28", cursor: "pointer", zIndex: '10'}}></AiFillEyeInvisible>}
                    </Flex>
                    <Text w="100%" color={"gray.400"} my="1rem" textAlign="right" fontSize="14px">
                        <Link>Forgot Password?</Link>
                    </Text>
                    <Link to={"/registerDetails"}>
                        <Button _active={{bg: "#0C8B28", color: "white"}} _hover={{bg:"white",color: "#0C8B28", borderColor: "#0C8B28", borderWidth: "1px"}} w="100%" bg="#0C8B28" color="white">Sign Up</Button>
                    </Link>
               </FormControl>
            </Flex>
            <Box w="50%" display={{base: "none", lg: "block"}}>
                <Image w="100%" h="100%" src={Divine}></Image>
            </Box>
        </Flex>
        </div>
       
        </>
    )
}