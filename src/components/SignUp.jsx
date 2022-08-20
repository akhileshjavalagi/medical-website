// import { Box, Button, Heading, Image, Input } from '@chakra-ui/react';
// import React, { useState } from 'react';
// import { useNavigate, Navigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { RegisterForm } from '../redux/Signup/action';

// const SignUp = () => {

//     //these all are the states of signup details
// 	const [password, setPassword] = useState("");
// 	const [username, setUsername] = useState("");
// 	const [email, setEmail] = useState("");
// 	const [description, setDesc] = useState("");
// 	const [mobile, setMobile] = useState("");
// 	const [name, setName] = useState("");

//     const dispatch = useDispatch()

//     //this is the register function to dispatch the RegisterForm funciton
//     const register = () => {
//         const payload = {
//         name,
//         email,
//         password,
//         username,
//         mobile,
//         description
//         }
//         dispatch(RegisterForm(payload))
//     }

//     //This will make the user authenticated
//     const { isAuthention } = useSelector((store) => store.sign);

//     //when authentication is true, then it will redirected to the signin page(default page)
//     if (isAuthention) {
//         return <Navigate to="/" />
//     }

//     return (
//         // these are all designing
//         <Box>
//         <Box shadow="lg"   margin="auto" borderRadius="20px"  w="150px">
//                 <Image src="https://mma.prnewswire.com/media/1631809/Masai_Logo.jpg?p=facebook"></Image>
//         </Box>
        
//         <Box  margin="auto" borderRadius="10px" _focus={{ boxShadow: "outline" }} boxShadow='dark-lg'  w="450px" h="650px" mt="20px">  
//             <Box  h="80px" padding="4">
//                 <Heading textAlign="left" size="md">Name</Heading>
//                 <Input type="text" id="email" name="email" 
//                 onChange={(e)=>{
//                   setName(e.target.value)
//                 }}/>
//             </Box>

//             <Box padding="4" h="80px" mt="30px">
//                 <Heading textAlign="left" size="md">Email</Heading>
//                 <Input type="text" id="email" name="email" 
//                 onChange={(e)=>{
//                     setEmail(e.target.value)
//                 }} />
//             </Box>

// 			<Box  h="80px" padding="4">
//                 <Heading textAlign="left" size="md">Description</Heading>
//                 <Input type="text" id="email" name="email" 
//                 onChange={(e)=>{
//                     setDesc(e.target.value)
//                 }} />
//             </Box>

//             <Box padding="4" h="80px" mt="30px">
//                 <Heading textAlign="left" size="md">Username</Heading>
//                 <Input type="text" id="email" name="email" 
//                 onChange={(e)=>{
//                     setUsername(e.target.value)
//                 }}/>
//             </Box>

// 			<Box  h="80px" padding="4">
//                 <Heading textAlign="left" size="md">Password</Heading>
//                 <Input type="text" id="email" name="email" 
//                 onChange={(e)=>{
//                     setPassword(e.target.value)
//                 }} />
//             </Box>

//             <Box padding="4" h="80px" mt="30px">
//                 <Heading textAlign="left" size="md">Mobile</Heading>
//                 <Input id="email" name="email" 
//                 onChange={(e)=>{
//                     setMobile(e.target.value)
//                 }}/>
//             </Box>

//             <Button onClick = {register} w="150px" mt="20px">
//                 Submit  
//             </Button>
//         </Box>
//         </Box>
//     );
// }

// export default SignUp;

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
import { useNavigate, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RegisterForm } from '../redux/Signup/action';



  
  export default function SignUp() {
     const dispatch = useDispatch()

     //     //these all are the states of signup details
	const [password, setPassword] = useState("");
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [description, setDesc] = useState("");
	const [mobile, setMobile] = useState("");
	const [name, setName] = useState("");
    //this is the register function to dispatch the RegisterForm funciton
    const register = () => {
        const payload = {
        name,
        email,
        password,
        username,
        mobile,
        description
        }
        dispatch(RegisterForm(payload))
    }
  
    
     //This will make the user authenticated
    const { isAuthention } = useSelector((store) => store.sign);

    //when authentication is true, then it will redirected to the signin page(default page)
    if (isAuthention) {
        return <Navigate to="/" />
    }

    
    return (
    <>
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
                <FormLabel>Name</FormLabel>
                <Input type="text" id="email" name="email" 
                   onChange={(e)=>{
                    setName(e.target.value)
                }} />
              </FormControl>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input type="text" id="email" name="email" 
                 onChange={(e)=>{
                     setEmail(e.target.value)
                 }} />
              </FormControl>
              <FormControl>
                <FormLabel>Description</FormLabel>
                <Textarea type="text" id="email" name="email" 
                 onChange={(e)=>{
                     setDesc(e.target.value)
                 }}/>
              </FormControl>
              <FormControl >
                <FormLabel>Username</FormLabel>
                <Input type="text" id="email" name="email" 
                 onChange={(e)=>{
                     setUsername(e.target.value)
                 }}/>
              </FormControl>
              <FormControl>
                <FormLabel>Password</FormLabel>
                <Input type="text" id="email" name="email" 
                 onChange={(e)=>{
                     setPassword(e.target.value)
                 }} />
              </FormControl>
              <FormControl>
                <FormLabel>Mobile</FormLabel>
                <Input id="email" name="email" 
                 onChange={(e)=>{
                     setMobile(e.target.value)
                 }}/>
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                </Stack>
               
                <Button  onClick = {register}
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  SIGNUP 
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
