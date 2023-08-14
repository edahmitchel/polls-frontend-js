import { Text, Box, Flex, Spacer,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure
 } from "@chakra-ui/react";
 import { FormHelperText } from '@chakra-ui/react'
import { Colors } from "../assets/constants/colors";
import OLiner from "../assets/images/oldLineer.png";
import Liner from "../assets/images/newLiner.png"
export const Elections = (props) =>{
    const {isOpen, onOpen, onClose } = useDisclosure();
    return(
        <>
         <Modal isOpen={isOpen} size={'4xl'}  onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
            <Flex h={'10rem'} dir="column" alignItems={'end'} bgSize={'cover'} bgImage={OLiner} p="1rem">
                <Text textTransform={'uppercase'} fontSize={"3xl"} color={'white'} fontWeight="bold">
                    creators dashboard
                </Text>
            </Flex>
          <ModalHeader>
            <Text fontSize={"20px"} fontWeight={"bold"}>FYB PRESIDENTS ELECTION</Text>
            <Text fontSize={"16px"}>ID : 466354MN </Text>
          </ModalHeader>
          {/* <ModalCloseButton /> */}
          <ModalBody>
           <Flex flexDir={"column"} alignItems={'center'} >
                <Button width={'15rem'} color={'white'} bgColor={Colors.primary}>
                    Register for this election
                </Button>
                <Flex flexDir={'row'} alignItems={'center'} justifyContent={'center'}>
                    <Box bgColor={'limegreen'} w='10px' h={'10px'} rounded={'full'}> 

                    </Box>
                    <Text  fontWeight={'light'} color={'green.300'} mt={'2px'} fontSize={'md'}>
                        Special code will be sent to your email
                    </Text>
                </Flex>
               
            </Flex>
          </ModalBody>

          <ModalFooter>
            {/* <Button color={'white'} bgColor={Colors.primary} mr={3} onClick={onClose}>
              Close
            </Button> */}
            <Text w={'full'} mt={"10rem"} textAlign={'center'} textTransform={'uppercase'} color={"limegreen"}>
                Note: no voting if you are not registered
            </Text>
          </ModalFooter>
        </ModalContent>
      </Modal>
        <Box p={"0.8rem"} w={"full"} h={"fit"} >
            <Flex direction={"column"} onClick={onOpen} _hover={{cursor: 'pointer'}} w={"25rem"} rounded={"lg"} p={"3"} h={"fit"} bgColor={Colors.pinkish}>
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