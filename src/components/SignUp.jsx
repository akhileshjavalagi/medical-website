import { Box, Button, Heading, Image, Input } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RegisterForm } from '../redux/Signup/action';

const SignUp = () => {

    //these all are the states of signup details
	const [password, setPassword] = useState("");
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [description, setDesc] = useState("");
	const [mobile, setMobile] = useState("");
	const [name, setName] = useState("");

    const dispatch = useDispatch()

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
        // these are all designing
        <Box>
        <Box shadow="lg"   margin="auto" borderRadius="20px"  w="150px">
                <Image src="https://mma.prnewswire.com/media/1631809/Masai_Logo.jpg?p=facebook"></Image>
        </Box>
        
        <Box  margin="auto" borderRadius="10px" _focus={{ boxShadow: "outline" }} boxShadow='dark-lg'  w="450px" h="650px" mt="20px">  
            <Box  h="80px" padding="4">
                <Heading textAlign="left" size="md">Name</Heading>
                <Input type="text" id="email" name="email" 
                onChange={(e)=>{
                  setName(e.target.value)
                }}/>
            </Box>

            <Box padding="4" h="80px" mt="30px">
                <Heading textAlign="left" size="md">Email</Heading>
                <Input type="text" id="email" name="email" 
                onChange={(e)=>{
                    setEmail(e.target.value)
                }} />
            </Box>

			<Box  h="80px" padding="4">
                <Heading textAlign="left" size="md">Description</Heading>
                <Input type="text" id="email" name="email" 
                onChange={(e)=>{
                    setDesc(e.target.value)
                }} />
            </Box>

            <Box padding="4" h="80px" mt="30px">
                <Heading textAlign="left" size="md">Username</Heading>
                <Input type="text" id="email" name="email" 
                onChange={(e)=>{
                    setUsername(e.target.value)
                }}/>
            </Box>

			<Box  h="80px" padding="4">
                <Heading textAlign="left" size="md">Password</Heading>
                <Input type="text" id="email" name="email" 
                onChange={(e)=>{
                    setPassword(e.target.value)
                }} />
            </Box>

            <Box padding="4" h="80px" mt="30px">
                <Heading textAlign="left" size="md">Mobile</Heading>
                <Input id="email" name="email" 
                onChange={(e)=>{
                    setMobile(e.target.value)
                }}/>
            </Box>

            <Button onClick = {register} w="150px" mt="20px">
                Submit  
            </Button>
        </Box>
        </Box>
    );
}

export default SignUp;
