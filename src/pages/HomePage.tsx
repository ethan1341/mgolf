import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  SimpleGrid,
  Button,
  VStack,
  HStack,
  useColorModeValue,
  Divider,
  Badge,
} from '@chakra-ui/react';
import Hero from '../components/Hero';
import FeatureCard from '../components/FeatureCard';

export default function HomePage() {
  return (
    <Box>
      <Hero
        title="MGOLF Driving Range & Learning Facility"
        subtitle="4000 West Chester Pike, Newtown Square, PA 19073"
        imageAlt="Golf Driving Range"
        imageSrc="https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        ctaText="Book a Lesson"
        ctaLink="/contact"
      />


      {/* Loyalty Card Promo */}

      {/* Pro Shop Section */}
      <Box py={16}>
        <Container maxW={'6xl'}>
          <VStack spacing={10}>
            <Heading as="h2" size="xl" textAlign="center" color="brand.primary">
              Pro Shop & Facilities
            </Heading>
            
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
              <Box 
                p={6} 
                shadow="lg" 
                rounded="lg" 
                bg={useColorModeValue('white', 'gray.700')}
              >
                <Heading as="h3" size="lg" mb={4} color="brand.primary">
                  Our Range
                </Heading>
                <Text fontSize="md" mb={4}>
                  We have 35 mat hitting stations along with a limited grass area to work on your game. 
                  Our tees are lazered to our numerous target greens. A 6,000 square ft putting and 
                  chipping green rounds out our facility for work on your short game.
                </Text>
                <Button 
                  as="a" 
                  href="/services" 
                  colorScheme="green" 
                  bg="brand.primary"
                  _hover={{ bg: 'brand.dark' }}
                >
                  View Services
                </Button>
              </Box>
              
              <Box 
                p={6} 
                shadow="lg" 
                rounded="lg" 
                bg={useColorModeValue('white', 'gray.700')}
              >
                <Heading as="h3" size="lg" mb={4} color="brand.primary">
                  Golf Lessons & Equipment
                </Heading>
                <Text fontSize="md" mb={4}>
                  Use our Pro Shop to get outfitted with the latest equipment, inquire about range 
                  membership, bucket passes and expert advice from our staff PGA Professionals.
                </Text>
                <Text fontSize="md" mb={4}>
                  Whether you're a beginner or more advanced golfer, contact the Pro Shop to schedule 
                  an individual lesson or sign up for one of our clinics. Former PGA Tour Professional 
                  Stu Ingraham will work to get you on the right path to improve your skills.
                </Text>
                <Button 
                  as="a" 
                  href="/contact" 
                  colorScheme="green" 
                  bg="brand.primary"
                  _hover={{ bg: 'brand.dark' }}
                >
                  Schedule Lesson
                </Button>
              </Box>
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* Features section */}
    
      {/* CTA section */}
      <Box bg="brand.primary" color="white" py={16}>
        <Container maxW={'5xl'} textAlign="center">
          <Heading mb={6}>Ready to improve your game?</Heading>
          <Text fontSize="xl" mb={8}>
            Visit MGOLF Driving Range today and experience the difference quality practice makes.
          </Text>
          <Box display="flex" justifyContent="center" width="100%">
            <Button
              as="a"
              href="/contact"
              colorScheme="whiteAlpha"
              size="lg"
              fontWeight="bold"
              rounded="md"
              width={{ base: '80%', sm: 'auto' }}
              px={8}
            >
              Contact Us
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
} 