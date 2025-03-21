import React from 'react';
import {
  Box,
  Image,
  Badge,
  Text,
  Stack,
  Heading,
  useColorModeValue,
  Button,
  Flex,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

interface EventCardProps {
  title: string;
  description: string;
  image: string;
  date: string;
  time: string;
  location: string;
  isUpcoming?: boolean;
}

export default function EventCard({
  title,
  description,
  image,
  date,
  time,
  location,
  isUpcoming = false,
}: EventCardProps) {
  const cardBgColor = useColorModeValue('white', 'gray.900');
  const titleColor = useColorModeValue('gray.700', 'white');
  const textColor = useColorModeValue('gray.600', 'gray.300');
  const descriptionColor = useColorModeValue('gray.500', 'gray.400');

  return (
    <Box
      maxW={'400px'}
      w={'full'}
      bg={cardBgColor}
      boxShadow={'md'}
      rounded={'lg'}
      p={6}
      overflow={'hidden'}
      position="relative"
      transition="transform 0.3s ease"
      _hover={{
        transform: 'translateY(-5px)',
        boxShadow: 'lg',
      }}
    >
      {isUpcoming && (
        <Badge
          position="absolute"
          top={4}
          right={4}
          px={2}
          py={1}
          fontSize="xs"
          fontWeight="bold"
          colorScheme="red"
          rounded="md"
          zIndex={10}
        >
          UPCOMING
        </Badge>
      )}
      <Box
        h={'200px'}
        bg={'gray.100'}
        mt={-6}
        mx={-6}
        mb={6}
        pos={'relative'}
      >
        <Image 
          src={image} 
          alt={`${title} event`}
          objectFit="cover" 
          h="100%" 
          w="100%" 
        />
      </Box>
      <Stack>
        <Heading
          color={titleColor}
          fontSize={'2xl'}
          fontFamily={'body'}
          mb={2}
        >
          {title}
        </Heading>
        
        <Stack direction={'column'} spacing={1} mb={3}>
          <Flex align="center">
            <Box color="brand.primary" mr={2} fontWeight="bold">
              📅
            </Box>
            <Text color={textColor}>{date}</Text>
          </Flex>
          
          <Flex align="center">
            <Box color="brand.primary" mr={2} fontWeight="bold">
              🕒
            </Box>
            <Text color={textColor}>{time}</Text>
          </Flex>
          
          <Flex align="center">
            <Box color="brand.primary" mr={2} fontWeight="bold">
              📍
            </Box>
            <Text color={textColor}>{location}</Text>
          </Flex>
        </Stack>
        
        <Text color={descriptionColor} mb={4}>
          {description}
        </Text>
      </Stack>
      <Button
        as={Link}
        to="/contact"
        mt={4}
        w={'full'}
        bg={'brand.primary'}
        color={'white'}
        rounded={'md'}
        _hover={{
          bg: 'brand.dark',
        }}
      >
        Register Now
      </Button>
    </Box>
  );
} 