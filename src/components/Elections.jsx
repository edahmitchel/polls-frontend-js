import { Text, Box, Flex, Spacer } from "@chakra-ui/react"
import { Colors } from "../assets/constants/colors"
export const Elections = () =>{
    return(
        <>
        <Box p={"0.8rem"} w={"full"} h={"fit"} >
            <Flex direction={"column"} w={"25rem"} rounded={"lg"} p={"3"} h={"fit"} bgColor={Colors.pinkish}>
                <Text>Elections</Text>
                <Spacer></Spacer>
                <Box mt={"20"} w={"50%"}>
                    <Text fontSize={"20px"} fontWeight={"bold"}>FYB PRESIDENTS ELECTION</Text>
                    <Text fontSize={"16px"}>ID : 466354MN </Text>
                    
                </Box>
                <Text mt={"4"} lineHeight={"1rem"}>Register now election starts soon..........</Text>
            </Flex>
        </Box>
        </>
    )
}