import React, { useEffect } from 'react';
import { useState } from 'react';
import { Grid, Box, GridItem,Input, Image, Heading, Text, Button } from '@chakra-ui/react'
import NavBar from './NavBar';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Home = () => {

    const medicines = [
        {
            image : "https://cloudfront-us-east-1.images.arcpublishing.com/gray/RZSXDB4LLZO7TF3DOIZL3UPIQM.jpg",
            name : "VITAMINS & SUPPLEMENTS"
        },
        {
            image : "https://m.economictimes.com/thumb/msid-57927429,width-1200,height-900,resizemode-4,imgsize-47493/central-body-to-check-quality-of-new-ayurvedic-drugs-likely.jpg",
            name : "AYURVEDIC"
        },
        {
            image : "https://www.obelis.net/content/images/2021/11/Mask-Group.png",
            name : "HEALTHCARE DEVICES"
        },
        {
            image : "http://cdn.shopify.com/s/files/1/0013/2477/7569/products/nutrlpack_1200x1200.jpg?v=1643136034",
            name : "NUTRIAL DRINKS"
        },
        {
            image : "https://assets1.cbsnewsstatic.com/hub/i/2015/03/11/d69a384e-439f-4591-ad82-7aecd919e0b8/homeopathy.jpg",
            name : "HOMEOPATHY"
        },
        {
            image : "https://medilodgeoffrankenmuth.com/wp-content/uploads/sites/28/2019/07/diabetes-care-plan.jpeg",
            name : "DIABITIES CARE"
        },
        {
            image : "https://upload.wikimedia.org/wikipedia/commons/1/19/Cosmetologist_applying_skincare_treatment.jpg",
            name : "SKIN CARE"
        },
        {
            image : "https://www.thefoodstatecompany.com/content/images/thumbs/0001867_900.jpeg",
            name : "CALCIUM AND MINERALS"
        }
    ]

    const [details, setDetails] = useState([]);

    const signup = useSelector((state) => state.sign);

    useEffect(()=>{

        getData()
    },[])
    
    const getData = async() => {
        const res = await axios.get("https://masai-json-14.herokuapp.com/homeMedicines");
        setDetails(res.data);
    }

    //console.log(signup)

    return (
        <>
        <NavBar/>

        <Box border="1px solid red" bg="#FBD38D" w="1200px" margin="center">
        <Box>
            <Heading>Our services</Heading>
            <Box  display="flex" ml="380px">
            <Heading size="sm" color="#D53F8C"> Order Medicines, </Heading>
            <Heading size="sm" color="#D53F8C"> Flexible Delivery, </Heading>
            <Heading size="sm" color="#D53F8C"> All Medicines available, </Heading>
            </Box>
        </Box>

        <Grid  templateColumns={{base:'repeat(2,70%)', md:'repeat(2, 48%)', lg:'repeat(4, 24%)'}}gap={4} p='3'>
             {
               details.map((e)=>(
                <Link to="/medicinedetails">
                <Box boxShadow='2xl' p='6' rounded='md' bg='white'  w='250px' h="350px">
                  <Image w="100%" h="70%" src={e.image}></Image>
                  <Heading size="sm" mt="15px" noOfLines={2}>{e.name}</Heading>
                </Box>
                </Link>
               ))
             }
        </Grid>
        </Box>
        </>
    );
}

export default Home;
