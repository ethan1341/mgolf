import React from 'react';
import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Icon,
  useColorModeValue,
  createIcon,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

interface HeroProps {
  title: string;
  subtitle: string;
  imageAlt: string;
  imageSrc: string;
  ctaText: string;
  ctaLink: string;
}

export default function Hero({
  title,
  subtitle,
  imageAlt,
  imageSrc,
  ctaText,
  ctaLink,
}: HeroProps) {
  // Use PUBLIC_URL for image paths
  const getImageUrl = (path: string) => {
    // If it's already an absolute URL (starts with http), return as is
    if (path.startsWith('http')) {
      return path;
    }
    // Otherwise, prepend the PUBLIC_URL
    return `${process.env.PUBLIC_URL}${path}`;
  };

  return (
    <Box
      position={'relative'}
      height={'600px'}
      width={'full'}
      overflow={'hidden'}
      backgroundImage={`url('${getImageUrl(imageSrc)}')`}
      backgroundSize={'cover'}
      backgroundPosition={'center center'}
      aria-label={imageAlt}
    >
      <Container maxW={'3xl'} zIndex={10} position={'relative'} height="100%">
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
          height="100%"
          justifyContent="center"
        >
          <Heading
            fontWeight={700}
            fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}
            color="white"
            textShadow="0px 0px 8px rgba(0,0,0,0.8)"
          >
            {title}
          </Heading>
          <Text 
            color={'white'} 
            fontSize={{ base: 'lg', md: 'xl' }}
            textShadow="0px 0px 4px rgba(0,0,0,0.8)"
            maxW={'md'}
            mx="auto"
          >
            {subtitle}
          </Text>
          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}
          >
            <Stack direction={{ base: 'column', sm: 'row' }} spacing={4}>
              <Button
                as={Link}
                to={ctaLink}
                colorScheme={'green'}
                bg={'brand.primary'}
                rounded={'full'}
                px={6}
                _hover={{
                  bg: 'brand.dark',
                }}
                size="lg"
              >
                {ctaText}
              </Button>
              <Button
                as={Link}
                to="/events"
                variant="outline"
                colorScheme="whiteAlpha"
                borderColor="white"
                color="white"
                rounded={'full'}
                px={6}
                _hover={{
                  bg: 'rgba(255,255,255,0.2)',
                }}
                size="lg"
              >
                View Events
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Container>
      {/* Overlay */}
      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        bg="rgba(0,0,0,0.4)"
        zIndex={1}
      />
    </Box>
  );
} 