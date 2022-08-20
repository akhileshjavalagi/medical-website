import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Grid, Box, GridItem,Input, Image, Heading, Text, Button } from '@chakra-ui/react'
import NavBar from './NavBar';
import { useParams } from 'react-router'

const MedicineDetails = () => {
    const {id} = useParams()
    const [details, setDetails] = useState([]);

    useEffect(()=>{
        getData()
    },[])
    
    const getData = async() => {
        const res = await axios.get("https://masai-json-14.herokuapp.com/detailsMedicine");
        setDetails(res.data);
    }
    return (
        <>
        <NavBar/>
        
        <Box border="1px solid red" bg="#FBD38D" w="1200px" margin="center">
        <Heading color="#4FD1C5">Medicine Store</Heading>
        <Grid  templateColumns={{base:'repeat(2,70%)', md:'repeat(2, 48%)', lg:'repeat(4, 24%)'}}gap={4} p='3'>
             {
               details.map((e,id)=>(
                <Link key={id} to={`/particularDetails/${e.id}`}>
                <Box boxShadow='2xl' p='6' rounded='md' bg='white'  w='250px' h="350px">
                  <Image w="100%" h="70%" src={e.image}></Image>
                  <Heading size="sm" mt="15px" noOfLines={2}>{e.name}</Heading>
                  <Heading size="sm" mt="15px" noOfLines={2}>{e.price}</Heading>
                </Box>
                </Link>
               ))
             }
             
          </Grid>
        </Box>
        </>
    );
}

export default MedicineDetails;
