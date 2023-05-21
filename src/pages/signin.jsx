import {Flex, Box, Spacer, Text, Input, Image, Button } from "@chakra-ui/react";
import { useState } from "react";
import Divine from "../assets/images/liner.png";
import {Link } from "react-router-dom";
import {AiFillEye, AiFillEyeInvisible} from "react-icons/ai"
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
  } from '@chakra-ui/react'
export const SignIn = () =>{
    const [eyeopen, setEyeOpen] = useState(false);

    return(
        <>
        <div className="body">
        <Flex h={"100vh"} w={"100vw"} >
            <Flex w={{base:"100%", lg:"50%"}} m={"10rem"} direction="column" alignItems="center" justifyContent= "center">
               <Text w={"100%"} mb={"0.6rem"} textAlign={"left"} fontSize={"14px"}>New Here? <Link style={{textDecoration: "underline", color: "green"}} to={"/signup"}>Create an account</Link></Text>
               <Text w={"100%"} textAlign={"left"} mb={"1.5rem"} fontSize={"28px"}>Welcome Again!</Text>
               <FormControl>
                    <FormLabel ml={"0.3rem"} fontWeight={"semibold"} fontSize={"16px"}>Username</FormLabel>
                    <Input type="text" w={"100%"} placeholder={"Enter your Username"}></Input>
                    <FormLabel mt={"1.4rem"} ml={"0.3rem"} fontWeight={"semibold"} fontSize={"16px"}>Password</FormLabel>
                    <Flex alignItems="center" justifyContent="right" ><Input zIndex="0" position="absolute" type={eyeopen ? "text" : "password"} w={"100%"} placeholder={"............"}></Input>{eyeopen ? <AiFillEye onClick={()=>setEyeOpen(false)} size={"30px"} style={{paddingRight: "0.6rem" , color: "#0C8B28", cursor: 'pointer', zIndex: '10'}}></AiFillEye> : <AiFillEyeInvisible onClick={() => setEyeOpen(true)} size={"30px"} style={{paddingRight: "0.6rem", color: "#0C8B28", cursor: "pointer", zIndex: '10'}}></AiFillEyeInvisible>}</Flex>
                    <Text w="100%" color={"gray.400"} my="1rem" textAlign="right" fontSize="14px" ><Link>Forgot Password?</Link></Text>
                    <Button w="100%" bg="#0C8B28" color="white">Log In</Button>
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