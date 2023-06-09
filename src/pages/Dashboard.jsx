import {Flex, Box, Spacer, Text, Input, Image, Button, Heading, Center } from "@chakra-ui/react";
import { useState,  } from "react";
import Rec from "../assets/images/flier.png";
import {BsCheck2, BsThreeDots} from "react-icons/bs";
import Flier from "../assets/images/bg.png";
// import { useState } from "react";
import Divine from "../assets/images/manvote.png";
import {Link } from "react-router-dom";
import {AiFillEye, AiFillEyeInvisible} from "react-icons/ai";
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
  } from '@chakra-ui/react';
import { Colors } from "../assets/constants/colors";
import { Elections } from "../components/Elections";
import { AllElections } from "../components/AllElections";
import { MyButton } from "../components/minorComponents/myButton";
import { BlogPost } from "../components/Blogpost";

export const Dashboard = () =>{
    const [onActive, setOnActive] = useState(true);
    const unSettle = () =>{
        setOnActive(!onActive)
    }
    return(
        <Flex className="body" w={"full"} p={"2rem"}>
            <Box w={"60%"} p={"2rem"}>
                <Image w={'auto'} src={Rec}></Image>
                <Input mt={"2rem"} type="search" placeholder="Search for polls with code" p={"1rem"} _focus={{outline: "none", borderWidth: "0px", borderColor: Colors.gray1}} borderColor={Colors.gray1} bg={Colors.gray1} h={"3rem"}></Input>
                <Box>
                    <Flex mt={"1.5rem"} borderBottomWidth={"1px"}>
                        <Button onClick={unSettle} borderColor={Colors.primary} borderRadius={"0px"} borderBottomWidth={onActive ? "2px" : "0px"} _hover={{bg: "none"}} bg={"transparent"}>
                            All
                        </Button>
                        <Button onClick={unSettle} bg={"transparent"} borderRadius={"0px"} borderColor={Colors.primary} borderBottomWidth={ !onActive ? "2px": "0px"} _hover={{bg: "none"}}>
                            Elections
                        </Button>
                    </Flex>
                    {onActive ? <Elections></Elections> : <AllElections></AllElections>}
                </Box>
            </Box>
            <Box as="aside" w={"40%"} m={"2rem"}>
                <Flex direction={"column"}>
                 <MyButton add={true} textInfo = {"Create Upcoming Election"} bgCol={Colors.primary}></MyButton>
                 <MyButton add= {false} textInfo= {"Creators dashboard login"} bgCol = {Colors.unknown} ></MyButton>
                </Flex>
                <Flex w={"full"} direction={"column"} p={"4"} borderWidth={"1px"}  rounded={"md"}>
                    <Text as={"h3"} >Blogs and Articles</Text>
                    <Box mt={"2.5rem"} h={{lg: "18rem"}} overflowY={"scroll"}>
                        <BlogPost></BlogPost>
                        <BlogPost></BlogPost>
                        <BlogPost></BlogPost>
                        <BlogPost></BlogPost>
                    </Box>
                </Flex>
            </Box>
        </Flex>
    )
}