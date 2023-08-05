import {Flex, Box, Spacer, Text, Input, Image, Button } from "@chakra-ui/react";
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
  } from '@chakra-ui/react';
import {Colors} from "../assets/constants/colors.js"
import Liner from "../assets/images/newLiner.png"
import { CandidateForm } from "../components/CandidateForm.jsx";
export const AddElectoralDetails = () =>{
    return (
        <Box className="body" w={'full'} height="fit-content" >
            <Flex h={'16rem'} w={'full'} flexDir={'column'} justifyContent={'end'}  p={'1rem'} bgSize={'cover'} bgImage={Liner}>
                <Text as={'h4'} color={'white'} fontSize={'xl'} fontWeight={'bold'}>
                    Create Upcoming Elections
                </Text>
            </Flex>
            <Box w="full" p={'2rem'} px={'4rem'}>
                <Flex flexDir={'row'} justifyContent={'space-between'}>
                    <Text w={'50%'}>Election Enhancement</Text>
                    
                    <Flex w={'50%'} flexDir={'column'}>
                        <FormLabel>Creators Email</FormLabel>
                        <Input  _hover={{borderColor: Colors.primary}} _focus={{borderWidth: '1px', outline: 'none'}} borderColor={Colors.primary} w={'90%'} borderRadius={'xl'} type="email" placeholder=""></Input>
                    </Flex>
                </Flex>
                <Flex flexDir={'row'} mt={'2rem'}justifyContent={'space-between'}>
                    <Text w={'50%'}>Election Enhancement</Text>
                    
                    <Flex w={'50%'}>
                        <FormControl w={'100%'}>
                            <FormLabel>Election name</FormLabel>
                            <Input _hover={{borderColor: Colors.primary}} borderColor={Colors.primary}  w={'90%'} borderRadius={'xl'} type="text" placeholder=""></Input>
                            <Text as={'h3'} mt={'1rem'} color={'gray.300'} fontSize={'1.2rem'} my={'0.4rem'}>Registration Dates and Times</Text>
                            <Flex flexDir={'row'} w={'100%'}>
                                <Box w={'50%'}>
                                    <FormLabel>Start Date</FormLabel>
                                    <Input type="date" w={'100%'}  _hover={{borderColor: Colors.primary}} _focus={{borderWidth: '1px', outline: 'none'}} borderColor={Colors.primary}  borderRadius={'xl'} placeholder=""></Input>
                                </Box>
                                <Box w={'50%'}>
                                    <FormLabel>End Date</FormLabel>
                                    <Input type="date" w={'100%'}  _hover={{borderColor: Colors.primary}} _focus={{borderWidth: '1px', outline: 'none'}} borderColor={Colors.primary} borderRadius={'xl'}  placeholder=""></Input>
                                </Box>
                            </Flex>
                            <Text as={'h3'} color={'gray.300'} my={'0.4rem'} mt={'2rem'} fontSize={'1.2rem'} >Election Dates and Times</Text>
                            <Flex flexDir={'row'} w={'100%'}>
                                <Box w={'50%'}>
                                    <FormLabel>Start Date</FormLabel>
                                    <Input type="date" w={'100%'}  _hover={{borderColor: Colors.primary}} _focus={{borderWidth: '1px', outline: 'none'}} borderColor={Colors.primary} borderRadius={'xl'} placeholder=""></Input>
                                </Box>
                                <Box w={'50%'}>
                                    <FormLabel>End Date</FormLabel>
                                    <Input type="date" w={'100%'}  _hover={{borderColor: Colors.primary}} _focus={{borderWidth: '1px', outline: 'none'}} borderColor={Colors.primary} borderRadius={'xl'} placeholder=""></Input>
                                </Box>
                            </Flex>
                        </FormControl>
                       
                    </Flex>
                </Flex>

                <Text as={'h3'} mt={'2rem'}>Candidates/Participants</Text>
                <Flex flexDir={'row'}  w={'100%'}>
                    <Box mr={'8rem'} w={'50%'}>
                        <CandidateForm></CandidateForm>
                    </Box>
                    <Spacer w={'4rem'}></Spacer>
                   <Box w={'50%'}>
                        <CandidateForm></CandidateForm>
                   </Box>
                </Flex>
                <Flex flexDir={'row'} justifyContent={'center'} alignItems={'center'}  w={'full'} mt={'4rem'}>
                    <Button bg={'white'} w={'fit-content'} borderColor={Colors.primary} px={'1rem'} color={Colors.primary} borderWidth={'1px'}>
                        Add Candidates
                    </Button>
                </Flex>
                <Flex flexDir={'row'}  >
                    <Button bg={'white'} pr={'auto'} w={'fit-content'} borderColor={Colors.primary} px={'1rem'} color={Colors.primary} borderWidth={'1px'}>
                       Back
                    </Button>
                    <Spacer/>
                    <Button bg={Colors.primary} w={'fit-content'} borderColor={Colors.primary} px={'1rem'} color={'white'} borderWidth={'1px'}>
                        Done
                    </Button>
                </Flex>
            </Box>
        </Box>
    )
}