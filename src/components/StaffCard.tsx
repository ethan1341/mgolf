import React from 'react';
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Image,
  Tag,
  HStack,
} from '@chakra-ui/react';

interface StaffCardProps {
  name: string;
  role: string;
  image: string;
  bio: string;
}

export default function StaffCard({ name, role, image, bio }: StaffCardProps) {
  const tagBgColor = useColorModeValue('brand.accent', 'gray.800');
  const tagTextColor = 'brand.dark';
  const cardBgColor = useColorModeValue('white', 'gray.900');
  const bioTextColor = useColorModeValue('gray.700', 'gray.400');

  return (
    <Center py={6}>
      <Box
        maxW={'320px'}
        w={'full'}
        bg={cardBgColor}
        boxShadow={'2xl'}
        rounded={'lg'}
        p={6}
        textAlign={'center'}
        position="relative"
        overflow="hidden"
        transition="transform 0.3s ease"
        _hover={{
          transform: 'translateY(-5px)',
        }}
      >
        <Avatar
          size={'xl'}
          src={image}
          mb={4}
          pos={'relative'}
        />
        <Heading fontSize={'2xl'} fontFamily={'body'}>
          {name}
        </Heading>
        <Text fontWeight={600} color={'brand.primary'} mb={4}>
          {role}
        </Text>
        <Text
          textAlign={'center'}
          color={bioTextColor}
          px={3}
          mb={4}
        >
          {bio}
        </Text>
      </Box>
    </Center>
  );
} 