import React, {useState} from 'react';
import NavBar from './NavBar';
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

  import { useNavigate } from 'react-router'

const Contact = () => {
    const initalState = {
        packing_Issue : "",
        expired_date : "",
        return : "",
        reason_to_return : ""
      };

    const [text, setText] = useState(initalState)
    const [query, setQueries]  = useState([])
    const navigate = useNavigate() //here I declared navigate function


    const handleChange = (e) =>{
        const {id, value} = e.target
        setText({...text, [id] : value})
      }

    
    const save = () =>{
        if( text.packing_Issue.length==0 && text.expired_date.length==0 && text.return.length==0
            && text.reason_to_return.length==0
            ){
          alert("please enter the details")
        }else{
            setQueries([...query, text]);
            alert("Your queries are recieved")
            navigate("/home")
            setText({packing_Issue:"",expired_date:"", return:"", reason_to_return :""})
        }
      }

    console.log("queries",query)
    return (
        <div>
            <NavBar/>
            <Box w="1200px">
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading color="#68D391" fontSize={'4xl'}>Upload Your Queries</Heading>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl>
                <FormLabel>Packing Issue Details</FormLabel>
                <Input  id="packing" type="text" onChange={handleChange} />
              </FormControl>
              
              <FormControl>
                <FormLabel>Expire Date Details</FormLabel>
                <Input  id="packing" type="text" onChange={handleChange} />
                {/* <Input  id="expire" type="text" onChange={handleChange} /> */}
              </FormControl>

              <FormControl>
                <FormLabel>Return Details</FormLabel>
                <Input  id="packing" type="text" onChange={handleChange} />
                {/* <Input  id="return" type="text" onChange={handleChange} /> */}
              </FormControl>

              <FormControl>
                <FormLabel>Reason for Return</FormLabel>
                <Input id="packing" type="text" onChange={handleChange} />
                {/* <Input  id="reason" type="text" onChange={handleChange} /> */}
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
    </Box>
        </div>
    );
}

export default Contact;
