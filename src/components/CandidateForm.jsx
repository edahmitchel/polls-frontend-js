import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
  } from '@chakra-ui/react';

import { Input, Button } from '@chakra-ui/react';
import { Colors } from '../assets/constants/colors';
export const CandidateForm = () =>{
    return (
        <FormControl mt={'2rem'} w={'100%'}>
            <FormLabel>Name of Candidate</FormLabel>
            <Input type="text" _hover={{borderColor: Colors.primary}} _focus={{borderWidth: '1px', outline: 'none'}} borderColor={Colors.primary} w={'100%'} borderRadius={'md'} placeholder=""></Input>
            <FormLabel>Gender</FormLabel>
            <Input type="text" _hover={{borderColor: Colors.primary}} _focus={{borderWidth: '1px', outline: 'none'}} borderColor={Colors.primary} w={'100%'} borderRadius={'md'} placeholder=""></Input>
            <FormLabel>Region/Level</FormLabel>
            <Input type="text" _hover={{borderColor: Colors.primary}} _focus={{borderWidth: '1px', outline: 'none'}} borderColor={Colors.primary} w={'100%'} borderRadius={'md'} placeholder=""></Input>
            <FormLabel>Party Affiliation/Department/Group</FormLabel>
            <Input type="text" _hover={{borderColor: Colors.primary}} _focus={{borderWidth: '1px', outline: 'none'}} borderColor={Colors.primary} w={'100%'} borderRadius={'md'} placeholder=""></Input>
            <Button display={'block'} mt={'1.5rem'} bgColor={'white'} width={'50%'} borderColor={Colors.primary} borderWidth={'1px'}>
                Insert Image
            </Button>
        </FormControl>
    )
}