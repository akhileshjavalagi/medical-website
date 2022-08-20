import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import axios from 'axios';
import { Box, Grid, Image, Heading, Text, Button } from "@chakra-ui/react"
import NavBar from './NavBar';

const ParticularDetails = () => {
    const { id } = useParams();
    const [data, setData] = useState({});

    useEffect(() => {
        getData()
      }, [])
    
      const order = () =>{
        alert("your order placed successfully")
      }
      const getData = async () => {
          const res = await axios.get(`https://masai-json-14.herokuapp.com/detailsMedicine/${id}`)
          setData(res.data)
      }
      console.log("details", data)

    return (
        <>
      <NavBar/>
      <Heading color="#4FD1C5" mt="30px">Details of this Medicine</Heading>
      <Box boxShadow='lg' p='6' rounded='md' bg='white' w="100%" m="auto" h="450px" display="flex" gap="30px">
        <Box h="100%" w="65%">
          <Image h="100%" w="100%" src={data.image}></Image>
        </Box>
        <Box w="100%">
          <Heading size="md">Name : {data.name}</Heading>
          <Text mt="40px">Price : {data.price}</Text>
          <Button mt="100px" w="100px" onClick={order}>
                Buy
            </Button>
        </Box>
      </Box>
        </>
    );
}

export default ParticularDetails;
