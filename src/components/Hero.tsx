import React from 'react';
import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  useColorModeValue,
  createIcon,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

interface HeroProps {
  title?: string;
  subtitle?: string;
  imageAlt?: string;
  imageSrc?: string;
  ctaText?: string;
  ctaLink?: string;
}

export default function Hero({
  title = "Practice with a Purpose at MGolf",
  subtitle = "State-of-the-art facilities to enhance your golf game. Professional instruction, advanced technology, and a welcoming atmosphere for golfers of all levels.",
  imageAlt = "Golf Driving Range",
  imageSrc = "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  ctaText = "Our Services",
  ctaLink = "/services"
}: HeroProps) {
  return (
    <Box
      position={'relative'}
      height={'600px'}
      width={'full'}
      overflow={'hidden'}
      backgroundImage={`url('${imageSrc}')`}
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