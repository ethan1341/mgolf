import React from 'react';
import { Flex, Box, Heading, Text, useColorModeValue } from '@chakra-ui/react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
  delay?: number;
}

export default function FeatureCard({ title, description, icon, delay }: FeatureCardProps) {
  const boxBgColor = useColorModeValue('white', 'gray.700');
  const headingColor = useColorModeValue('gray.900', 'white');
  const textColor = useColorModeValue('gray.600', 'gray.300');

  return (
    <Flex
      data-aos="fade-up"
      data-aos-delay={delay || 0}
      p={5}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        bg={boxBgColor}
        maxW="sm"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative"
        p={6}
        transition="transform 0.3s ease"
        _hover={{ transform: 'translateY(-5px)' }}
      >
        <Flex
          w={16}
          h={16}
          align={'center'}
          justify={'center'}
          color={'white'}
          rounded={'full'}
          bg={'brand.primary'}
          mb={4}
          fontSize="2xl"
        >
          {icon}
        </Flex>
        <Heading as="h3" size="md" mb={2} color={headingColor}>
          {title}
        </Heading>
        <Text color={textColor}>{description}</Text>
      </Box>
    </Flex>
  );
} 