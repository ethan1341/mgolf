import React from 'react';
import {
  Box,
  Container,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

export default function Footer() {
  const bgColor = useColorModeValue('white', 'gray.900');
  const textColor = useColorModeValue('gray.700', 'gray.200');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Box
      bg={bgColor}
      color={textColor}
      borderTop={1}
      borderStyle={'solid'}
      borderColor={borderColor}
      py={4}
    >
      <Container maxW={'6xl'} textAlign={'center'}>
        <Text fontSize={'sm'}>
          © {new Date().getFullYear()} MGOLF Driving Range & Learning Facility. All rights reserved.
        </Text>
      </Container>
    </Box>
  );
} 