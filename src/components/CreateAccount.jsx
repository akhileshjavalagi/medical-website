import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Button,
    Image,
    Heading,
    useColorModeValue,
  } from '@chakra-ui/react';
  import React, { useState } from 'react';
  import { useNavigate } from 'react-router'
  import { useContext } from "react";
  import { GameStateContext } from "../Context/Context";

  //here I used navigate to redirect to the homepage.
  import NavBar from './NavBar';
  
  export default function CreateAccount() {
    const navigate = useNavigate() //here I declared navigate function
   
    //here I took the object as the initial state of hook.
    const initalState = {
      tabletName : "",
      priscriptions : "",
    };
  
    //here I initiated the state to the initialstate
    const [text, setText] = useState(initalState)
    const [showImage, setshowImage] = useState([]);

    var { details, setDetails, image, setImage } = useContext(GameStateContext);

    //this is handle function to store the input value to the state
    const handleChange = (e) =>{
      const {id, value} = e.target
      setText({...text, [id] : value})
    }

    

    const handleImage = (e) =>{
      setshowImage([...showImage, URL.createObjectURL(e.target.files[0])])
    }
    
    //console.log("show",showImage)
  
   const save = () =>{
    if( text.tabletName.length==0 && text.priscriptions.length==0){
      alert("please enter the details")
    }else{
       setDetails([...details, text]);
       setImage([...image, showImage])
       alert("Document uploaded succefully")
       navigate("/home")
    }
  }

  
  console.log("context image",details)

    return (
    <>
    <NavBar/>
    <Box  w="1200px">
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading color="#68D391" fontSize={'4xl'}>Upload Your Documents</Heading>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl>
                <FormLabel>Tablet Name</FormLabel>
                <Input id="tabletName" onChange={handleChange} />
              </FormControl>
              
              <FormControl>
                <FormLabel>Priscription</FormLabel>
                <Input id="priscriptions" onChange={handleChange} />
              </FormControl>
              
              <FormControl>
                <FormLabel>Upload Image</FormLabel>
                <Input type="file" onChange={handleImage} />
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
                  UPLOAD 
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
      {/* {
        image.map((e)=>(
          <Image src={e}></Image>
        ))
      }
      */}
      
    </Box>
    </>
    );
  }