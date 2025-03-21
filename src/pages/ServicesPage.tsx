import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  Divider,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  useColorModeValue,
  List,
  ListItem,
  HStack,
  Badge,
} from '@chakra-ui/react';

export default function ServicesPage() {
  const sectionBgColor = useColorModeValue('white', 'gray.800');
  const headingColor = useColorModeValue('brand.primary', 'white');
  const textColor = useColorModeValue('gray.700', 'gray.300');
  const highlightColor = useColorModeValue('brand.primary', 'brand.secondary');
  const tableBgColor = useColorModeValue('white', 'gray.700');
  
  return (
    <Box>
      {/* Header */}
      <Box
        bg={useColorModeValue('brand.primary', 'gray.900')}
        py={20}
        px={8}
        textAlign="center"
      >
        <Container maxW={'6xl'}>
          <Heading color="white" mb={6} fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            Our Services
          </Heading>
          <Text color="white" fontSize={{ base: 'lg', md: 'xl' }} maxW="3xl" mx="auto">
            MGOLF Driving Range & Learning Facility offers a complete range of services to improve your game
          </Text>
        </Container>
      </Box>

      <Container maxW={'6xl'} py={16}>
        <VStack spacing={16} align="stretch">
          {/* Equipment Section */}
          <Box 
            p={8} 
            rounded="lg" 
            shadow="lg" 
            bg={sectionBgColor}
          >
            <Heading as="h2" size="xl" mb={6} color={headingColor}>
              Equipment
            </Heading>
            <Text fontSize="lg" mb={4} color={textColor}>
              MGOLF is a major retailer of Titleist, TaylorMade, Cleveland and Callaway products. 
              Demo the latest equipment. Expert club-fitting is provided by Callaway Staff Professional 
              Stu Ingraham. MGOLF guarantees to deliver the best price for all of our products.
            </Text>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} mt={8}>
              <Box p={5} shadow="md" borderWidth="1px" rounded="md">
                <Heading as="h3" size="md" mb={3}>
                  Demo Equipment
                </Heading>
                <Text>
                  Try before you buy! Test out the latest clubs from top brands and find the perfect fit for your game.
                </Text>
              </Box>
              <Box p={5} shadow="md" borderWidth="1px" rounded="md">
                <Heading as="h3" size="md" mb={3}>
                  Professional Club Fitting
                </Heading>
                <Text>
                  Get fitted by our expert staff to ensure your equipment matches your swing and playing style.
                </Text>
              </Box>
            </SimpleGrid>
          </Box>

          {/* Golf Lessons Section */}
          <Box 
            p={8} 
            rounded="lg" 
            shadow="lg" 
            bg={sectionBgColor}
          >
            <Heading as="h2" size="xl" mb={6} color={headingColor}>
              Golf Lessons with PGA Professional Stu Ingraham
            </Heading>
            <Text fontSize="lg" mb={4} color={textColor}>
              Gather your family or friends and schedule your own private lesson or signup for one of 
              MGOLF's clinic with former tour professional Stu Ingraham. Take strokes off your game 
              by improving your short and long games. In addition, focus will be on chipping, pitching, 
              putting and greenside bunker play.
            </Text>
            <Text fontSize="lg" fontWeight="bold" mb={8} color={highlightColor}>
              You can reach Stu by calling 610-256-5051 or email at birdiestu@aol.com.
            </Text>
            
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} mt={8}>
              <Box p={5} shadow="md" borderWidth="1px" rounded="md">
                <Heading as="h3" size="md" mb={3}>
                  Private Lessons
                </Heading>
                <Text mb={3}>
                  One-on-one instruction tailored to your specific needs and skill level.
                </Text>
                <Badge colorScheme="green">All skill levels</Badge>
              </Box>
              <Box p={5} shadow="md" borderWidth="1px" rounded="md">
                <Heading as="h3" size="md" mb={3}>
                  Group Clinics
                </Heading>
                <Text mb={3}>
                  Learn alongside others in a fun, social environment with focused instruction.
                </Text>
                <Badge colorScheme="blue">Scheduled weekly</Badge>
              </Box>
              <Box p={5} shadow="md" borderWidth="1px" rounded="md">
                <Heading as="h3" size="md" mb={3}>
                  Short Game Focus
                </Heading>
                <Text mb={3}>
                  Specialized instruction on chipping, pitching, putting and bunker play.
                </Text>
                <Badge colorScheme="purple">Game improvement</Badge>
              </Box>
            </SimpleGrid>
          </Box>

          {/* Ball Rental Section */}
          <Box 
            p={8} 
            rounded="lg" 
            shadow="lg" 
            bg={sectionBgColor}
          >
            <Heading as="h2" size="xl" mb={6} color={headingColor}>
              Ball Rental
            </Heading>
            <Box overflowX="auto">
              <Table variant="simple" bg={tableBgColor} rounded="md" mb={4}>
                <Thead>
                  <Tr>
                    <Th>Option</Th>
                    <Th isNumeric>Price</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>Large Bucket (100-110 balls)</Td>
                    <Td isNumeric fontWeight="bold">$13</Td>
                  </Tr>
                  <Tr>
                    <Td>Medium Bucket (40-50 balls)</Td>
                    <Td isNumeric fontWeight="bold">$9</Td>
                  </Tr>
                  <Tr>
                    <Td>Family Bucket (200 balls)</Td>
                    <Td isNumeric fontWeight="bold">$21</Td>
                  </Tr>
                </Tbody>
              </Table>
            </Box>
            <Text fontSize="md" fontStyle="italic" mb={6}>
              Senior Citizens (60 & above) receive $1 off Medium or Large buckets when paying in cash.
            </Text>
          </Box>

          {/* Membership Section */}
          <Box 
            p={8} 
            rounded="lg" 
            shadow="lg" 
            bg={sectionBgColor}
          >
            <Heading as="h2" size="xl" mb={6} color={headingColor}>
              Membership Value Programs
            </Heading>
            <Box overflowX="auto">
              <Table variant="simple" bg={tableBgColor} rounded="md" mb={4}>
                <Thead>
                  <Tr>
                    <Th>Membership Option</Th>
                    <Th isNumeric>Price</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>10 Medium Buckets (save $10)</Td>
                    <Td isNumeric fontWeight="bold">$72</Td>
                  </Tr>
                </Tbody>
              </Table>
            </Box>
            <Text fontSize="md" fontWeight="bold" mb={8}>
              Note: The short game area is "Open" to all customers holding a membership value card.
            </Text>
          </Box>

          {/* Hours Section */}
          <Box 
            p={8} 
            rounded="lg" 
            shadow="lg" 
            bg={sectionBgColor}
            textAlign="center"
          >
            <Heading as="h2" size="xl" mb={6} color={headingColor}>
              2025 Spring Range Hours
            </Heading>
            <Text fontSize="2xl" fontWeight="bold" mb={4}>
              9AM - 7:30PM (Dusk)
            </Text>
            <Text fontSize="lg" mb={6}>
              Come enjoy a day at our range!
            </Text>
            <HStack spacing={4} justify="center">
              <Button 
                as="a" 
                href="/contact" 
                size="lg" 
                colorScheme="green" 
                bg="brand.primary"
                _hover={{ bg: 'brand.dark' }}
              >
                Contact Us
              </Button>
              <Button 
                as="a" 
                href="tel:6102565051"
                size="lg" 
                variant="outline" 
                colorScheme="green"
              >
                Call for Information
              </Button>
            </HStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
} 