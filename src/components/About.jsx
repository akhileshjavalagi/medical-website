import React from 'react';
import NavBar from './NavBar';
import { Grid, Box, GridItem,Input, Image, Heading, Text, Button } from '@chakra-ui/react'

const About = () => {

    const medicines = [
        {
            image : "https://cloudfront-us-east-1.images.arcpublishing.com/gray/RZSXDB4LLZO7TF3DOIZL3UPIQM.jpg",
            name : "VITAMINS",
            devilery : "bangalore",
            offer : "20%"
        },
        {
            image : "https://m.economictimes.com/thumb/msid-57927429,width-1200,height-900,resizemode-4,imgsize-47493/central-body-to-check-quality-of-new-ayurvedic-drugs-likely.jpg",
            name : "AYURVEDIC",
            devilery : "Chennai",
            offer : "10%"
        },
        {
            image : "https://www.obelis.net/content/images/2021/11/Mask-Group.png",
            name : "HEALTHCARE DEVICES",
            devilery : "Hydrabad",
            offer : "15%"
        },
        {
            image : "http://cdn.shopify.com/s/files/1/0013/2477/7569/products/nutrlpack_1200x1200.jpg?v=1643136034",
            name : "NUTRIAL DRINKS",
            devilery : "Delhi",
            offer : "25%"
        },
        {
            image : "https://assets1.cbsnewsstatic.com/hub/i/2015/03/11/d69a384e-439f-4591-ad82-7aecd919e0b8/homeopathy.jpg",
            name : "HOMEOPATHY",
            devilery : "Mumbai",
            offer : "5%"
        },
        {
            image : "https://medilodgeoffrankenmuth.com/wp-content/uploads/sites/28/2019/07/diabetes-care-plan.jpeg",
            name : "DIABITIES CARE",
            devilery : "Pune",
            offer : "8%"
        },
        {
            image : "https://upload.wikimedia.org/wikipedia/commons/1/19/Cosmetologist_applying_skincare_treatment.jpg",
            name : "SKIN CARE",
            devilery : "Hubli",
            offer : "30%"
        },
        {
            image : "https://www.thefoodstatecompany.com/content/images/thumbs/0001867_900.jpeg",
            name : "CALCIUM AND MINERALS",
            devilery : "Jamkhandi",
            offer : "10%"
        }
    ]

    return (
      
        <>
        <NavBar/>
        <Box border="1px solid red" bg="#FBD38D" w="1200px" margin="center">
        <Grid  templateColumns={{base:'repeat(2,70%)', md:'repeat(2, 48%)', lg:'repeat(4, 24%)'}}gap={4} p='3'>
             {
               medicines.map((e)=>(
                <Box boxShadow='2xl' p='6' rounded='md' bg='tomato'  w='250px' h="350px">
                  <Image w="100%" h="70%" src={e.image}></Image>
                  <Heading size="sm" mt="15px" noOfLines={2}>{e.name}</Heading>
                  <Heading size="sm" mt="15px" noOfLines={2}>Devilery : {e.devilery}</Heading>
                  <Heading size="sm" mt="15px" noOfLines={2}>Discount : {e.offer}</Heading>
                </Box>
               ))
             }
             
          </Grid>
        </Box>
        </>
    );
}

export default About;
