import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Heading,
  Image,
} from '@chakra-ui/react';
import {Link} from "react-router-dom"
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';
import { useSelector } from 'react-redux';

//This is nabBar component
export default function NavBar() {
  const { isOpen, onToggle } = useDisclosure();

  const signup = useSelector((state) => state.sign);

  return (
    // these all are designing
    <Box _focus={{ boxShadow: "outline" }} boxShadow='dark-lg'>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'40px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Link to="/home">
          <Text
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily={'heading'}
            color={useColorModeValue('gray.800', 'white')}>
            <Image w="100px" src="https://images-platform.99static.com/tiEDuWbYwWY1MkBvFhMeqm1QsfA=/0x0:960x960/500x500/top/smart/99designs-contests-attachments/76/76548/attachment_76548415"></Image>
          </Text>
          </Link>
          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Link to="/home">
          <Box display="flex">
          <Image w="55px" src="https://as1.ftcdn.net/v2/jpg/02/92/53/58/1000_F_292535870_UQ9RcFHGBMoaJZI4aNXdauLJc77Ejzb3.jpg"></Image>
          <Text padding="5"
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily={'heading'}
            color={useColorModeValue('gray.800', 'white')}>
            HOME
          </Text>
          </Box>
          </Link>
          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Link to="/about">
          <Box display="flex">
          <Image w="55px" src="https://media.istockphoto.com/vectors/about-help-info-information-properties-support-question-chat-bubble-vector-id1201139039?k=20&m=1201139039&s=612x612&w=0&h=zNGUREGarc2q93jLCjRRaZYuiSlLQShzQr4e2CY3y7Y="></Image>
          <Text padding="5"
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily={'heading'}
            color={useColorModeValue('gray.800', 'white')}>
            ABOUT
          </Text>
          </Box>
          </Link>
          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Link to="/details">
          <Box display="flex">
          <Image w="55px" src="https://media.istockphoto.com/vectors/about-help-info-information-properties-support-question-chat-bubble-vector-id1201139039?k=20&m=1201139039&s=612x612&w=0&h=zNGUREGarc2q93jLCjRRaZYuiSlLQShzQr4e2CY3y7Y="></Image>
          <Text padding="5"
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily={'heading'}
            color={useColorModeValue('gray.800', 'white')}>
            USER 
          </Text>
          </Box>
          </Link>
          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Link to="/contact">
          <Box display="flex">
          <Image w="38px" src="https://svgsilh.com/svg/304080.svg"></Image>
          <Text padding="5"
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily={'heading'}
            color={useColorModeValue('gray.800', 'white')}>
            CONTACT
          </Text>
          </Box>
          </Link>
          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Link to="/create">
          <Box display="flex">
          <Image w="50px" src="https://static.vecteezy.com/system/resources/previews/005/005/788/original/user-icon-in-trendy-flat-style-isolated-on-grey-background-user-symbol-for-your-web-site-design-logo-app-ui-illustration-eps10-free-vector.jpg"></Image>
          <Heading padding="5" size="md"
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily={'heading'}
            color={useColorModeValue('gray.800', 'white')}>
            {signup.username}
          </Heading>
          </Box>
          </Link>
          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  return (
    <Stack direction={'row'} spacing={4}>
     
    </Stack>
  );
};








