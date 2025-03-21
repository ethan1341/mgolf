import React from 'react';
import {
  Box,
  Image,
  Text,
  Stack,
  Heading,
  useColorModeValue,
  Button,
  Badge,
  Flex,
  List,
  ListItem,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  imageSrc: string;
  price: string;
  priceNote?: string;
  isPopular?: boolean;
  features: string[];
}

export default function ServiceCard({
  title,
  description,
  imageSrc,
  price,
  priceNote,
  isPopular = false,
  features,
}: ServiceCardProps) {
  const cardBgColor = useColorModeValue('white', 'gray.700');
  const priceBgColor = useColorModeValue('gray.50', 'gray.600');
  const textColor = useColorModeValue('gray.600', 'gray.300');
  const featureIconColor = useColorModeValue('green.500', 'green.300');

  return (
    <Box
      maxW={'380px'}
      w={'full'}
      bg={cardBgColor}
      boxShadow={'2xl'}
      rounded={'md'}
      overflow={'hidden'}
      position="relative"
    >
      {isPopular && (
        <Badge
          position="absolute"
          top={4}
          right={4}
          px={2}
          py={1}
          fontSize="xs"
          fontWeight="bold"
          colorScheme="green"
          rounded="md"
          zIndex={10}
        >
          POPULAR
        </Badge>
      )}

      <Image h={'200px'} w={'full'} src={imageSrc} objectFit={'cover'} />

      <Stack p={6}>
        <Heading
          color={useColorModeValue('gray.700', 'white')}
          fontSize={'2xl'}
          fontFamily={'body'}
        >
          {title}
        </Heading>
        <Text color={textColor} mb={4}>
          {description}
        </Text>

        <Box
          bg={priceBgColor}
          px={6}
          py={4}
          borderRadius="lg"
          position="relative"
          zIndex={1}
        >
          <Flex justifyContent="space-between" alignItems="center">
            <Box>
              <Text fontWeight={800} fontSize="2xl">
                {price}
              </Text>
              {priceNote && (
                <Text fontSize="sm" color={textColor}>
                  {priceNote}
                </Text>
              )}
            </Box>
          </Flex>
        </Box>

        <Stack spacing={2} mb={4}>
          <List spacing={2}>
            {features.map((feature, index) => (
              <ListItem key={index}>
                <Flex alignItems="center">
                  <Box color={featureIconColor} mr={2}>
                    ✓
                  </Box>
                  <Text>{feature}</Text>
                </Flex>
              </ListItem>
            ))}
          </List>
        </Stack>

        <Button
          as={Link}
          to="/contact"
          mt={4}
          fontWeight={600}
          color={'white'}
          bg={'brand.primary'}
          rounded={'md'}
          _hover={{
            transform: 'translateY(-2px)',
            boxShadow: 'lg',
            bg: 'brand.dark',
          }}
        >
          Book Now
        </Button>
      </Stack>
    </Box>
  );
} 