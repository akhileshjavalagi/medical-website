import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Textarea 
  } from '@chakra-ui/react';
  import axios from 'axios';
  import React, { useState } from 'react';
  
  //here I used navigate to redirect to the homepage.
  import { useNavigate } from 'react-router'
import NavBar from './NavBar';
  
  export default function CreateAccount() {
    const navigate = useNavigate() //here I declared navigate function
    
    //here I took the object as the initial state of hook.
    const initalState = {
      firstname : "",
      lastname : "",
      email : "",
      dateOfBirth : "" ,
      description : ""
    }
  
    const [details, setDetails] = useState({});

    //here I initiated the state to the initialstate
    const [text, setText] = useState(initalState)
    
    //this is handle function to store the input value to the state
    const handleChange = (e) =>{
      const {id, value} = e.target
      setText({...text, [id] : value})
    }

    const save = () =>{
        setDetails(text);
        console.log(details)

    }
    
   
    
    return (
    <>
    <NavBar/>
    <Box border="1px solid red" w="1200px">
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading color="#68D391" fontSize={'4xl'}>Register your account</Heading>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl>
                <FormLabel>First Name</FormLabel>
                <Input id="firstname" onChange={handleChange} />
              </FormControl>
              <FormControl>
                <FormLabel>Last Name</FormLabel>
                <Input id="lastname" onChange={handleChange} />
              </FormControl>
              <FormControl>
                <FormLabel>Enter Email</FormLabel>
                <Input valid="email" onChange={handleChange}/>
              </FormControl>
              <FormControl >
                <FormLabel>Date of birth</FormLabel>
                <Input id="dateOfBirth" type="date" onChange={handleChange}/>
              </FormControl>
              <FormControl>
                <FormLabel>Short Description about your self</FormLabel>
                <Textarea id="description" onChange={handleChange} />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                </Stack>
               
                <Button onClick={save}
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  SAVE 
                
                </Button>
          
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </Box>
    </>
    );
  }