import React, {useState} from 'react';
import axios from 'axios';
import {FormControl, Box, Button, Heading, Image, Input, isChakraTheme } from '@chakra-ui/react';
import { useNavigate, Navigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {loginForm} from "../redux/Signin/action"

const SignIn = () => {
            //Here 2 states for storing the text of the input box that is password and username
            const [username , setUsername] = React.useState("");
            const [password , setPassword]  = React.useState("");
            const dispatch = useDispatch();
            
            //Here isAuthenticated and token imported and declared from redux
            const {isAuthenticated,token} = useSelector((state) => state.login);
            
            const navigate = useNavigate();
            
            //This is the function which is used to dispathc the loginForm function
            const handleSubmit = ()=>{
                const cred = {
                    username,
                    password
                }
               dispatch(loginForm(cred))
               console.log(cred);
            };
          
            if(isAuthenticated && token!=undefined){
                    return <Navigate to="/home"/>
            }
            

    return (
        // these are all designing
        <div>
        <Box>
        <Box shadow="lg"   margin="auto" borderRadius="20px" mt="130px"  w="150px">
                <Image w="150px" h="100px" src="https://images-platform.99static.com/EafkhFyyo3r2dV8k-xsLqTFg0Ro=/56x0:983x927/500x500/top/smart/99designs-contests-attachments/65/65415/attachment_65415703"></Image>
        </Box>
        <Heading textAlign="center" size="sm">Welcome to AGBIZ Medical Website</Heading>
        <Box  margin="auto" borderRadius="10px" _focus={{ boxShadow: "outline" }} boxShadow='dark-lg'  w="450px" h="300px" mt="20px">  
            <Box  h="80px" padding="4">
                <Heading textAlign="left" size="md">UserName</Heading>
                <Input type="text" id="email" name="email" required 
                onChange={(e)=>{
                        setUsername(e.target.value)
                }} />
            </Box>

            <Box padding="4" h="80px" mt="30px">
                <Heading textAlign="left" size="md">Password</Heading>
                <Input type="password" id="password" required 
                onChange={(e)=>{
                        setPassword(e.target.value)
                }} />
            </Box>
            {
                username && password ? 
                <Button onClick={handleSubmit} w="150px" mt="20px">
                Submit  
            </Button>
            :
            <Button disabled onClick={handleSubmit} w="150px" mt="20px">
                Submit  
            </Button>
            }
            <br />
            <Link to="signup">
                <p>new user, click here to singup</p>
            </Link>
        </Box>
        </Box>
        </div>
    );
}

export default SignIn;
