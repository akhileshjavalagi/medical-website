import React, {useEffect} from 'react';
import { useContext } from 'react';
import { GameStateContext } from '../Context/Context';
import NavBar from './NavBar';
import { Box, Heading, Image } from '@chakra-ui/react';

const Details = () => {

    const {details, image} = useContext(GameStateContext)
    // const [ image] = useContext(GameStateContext)
    console.log("images",image)

    return (
        <Box  w="1200px" >
            <NavBar/>
            {
                details.length!=0 ? 
                <Box display="flex" overflow="-moz-hidden-unscrollable">
                    <Box  h="500px" w="500px" margin="auto" >
                    <Heading></Heading>
                        {
                            details.map((e)=>(
                                <Box mt="60px">
                                <Heading size="md" >Tablets : <Heading size="sm" color="tomato"> {e.tabletName}</Heading></Heading>
                                <Heading size="md" mt="10px">Priscriptions : <Heading size="sm" color="tomato"> {e.priscriptions}</Heading></Heading>
                                </Box>
                            ))
                        }
                       
                    </Box>

                    <Box  h="400px" w="1000px" margin="auto" >
                        {
                            image.map((e)=>(
                                <Image mt="10px" src={e} />
                            ))
                        }
                    </Box>
                </Box>
                
                :
                <Heading mt="100px">please upload the documents</Heading>
            }
        </Box>
    );
}

export default Details;
