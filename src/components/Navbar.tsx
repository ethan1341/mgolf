import React from 'react';
import { 
  Box, 
  Flex, 
  HStack, 
  IconButton, 
  Button, 
  Menu, 
  MenuButton, 
  MenuList, 
  MenuItem, 
  useDisclosure, 
  useColorModeValue, 
  Stack, 
  Image,
  Text,
  VStack,
  Badge
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, TimeIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

interface NavLinkProps {
  children: React.ReactNode;
  to: string;
}

const NavLink = ({ children, to }: NavLinkProps) => (
  <Box
    as={Link}
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('brand.accent', 'brand.dark'),
    }}
    to={to}
    fontWeight="semibold"
  >
    {children}
  </Box>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  const Links = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Staff', path: '/staff' },
    { name: 'Events', path: '/events' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <Box bg={useColorModeValue('white', 'gray.900')} px={4} boxShadow="sm">
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <IconButton
          size={'md'}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={'Open Menu'}
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems={'center'}>
          <Box as={Link} to="/" display="flex" alignItems="center">
            <Text fontSize="xl" fontWeight="bold" color="brand.primary">
              MGolf Driving Range
            </Text>
          </Box>
          <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
            {Links.map((link) => (
              <NavLink key={link.name} to={link.path}>
                {link.name}
              </NavLink>
            ))}
          </HStack>
        </HStack>
        <Flex alignItems={'center'}>
          <Box textAlign="right" display={{ base: 'none', md: 'block' }}>
            <HStack spacing={1} alignItems="center">
              <TimeIcon color="brand.primary" />
              <Text fontWeight="medium" fontSize="sm">
                Mon-Fri: 9am-9pm
              </Text>
            </HStack>
            <Text fontSize="sm">Sat-Sun: 8am-8pm</Text>
          </Box>
          
          {/* Mobile hours - shown in dropdown menu */}
        </Flex>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as={'nav'} spacing={4}>
            {Links.map((link) => (
              <NavLink key={link.name} to={link.path}>
                {link.name}
              </NavLink>
            ))}
            {/* Hours for mobile view */}
            <Box borderTop="1px" borderColor="gray.200" pt={2} mt={2}>
              <Flex align="center" justify="center">
                <TimeIcon color="brand.primary" mr={2} />
                <VStack spacing={0} align="start">
                  <Text fontWeight="medium" fontSize="sm">Hours:</Text>
                  <Text fontSize="sm">Mon-Fri: 9am-9pm</Text>
                  <Text fontSize="sm">Sat-Sun: 8am-8pm</Text>
                </VStack>
              </Flex>
            </Box>
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
} 