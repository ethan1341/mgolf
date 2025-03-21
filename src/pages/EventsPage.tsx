import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  Button,
  useColorModeValue,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Link,
  HStack,
  Divider,
  Badge,
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react';

export default function EventsPage() {
  const sectionBgColor = useColorModeValue('white', 'gray.800');
  const headingColor = useColorModeValue('brand.primary', 'white');
  const textColor = useColorModeValue('gray.700', 'gray.300');
  
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
            Events & Programs
          </Heading>
          <Text color="white" fontSize={{ base: 'lg', md: 'xl' }} maxW="3xl" mx="auto">
            MGOLF Driving Range & Learning Facility offers clinics, camps, and events for golfers of all ages and skill levels
          </Text>
        </Container>
      </Box>

      <Container maxW={'6xl'} py={16}>
        <VStack spacing={16} align="stretch">
          {/* Spring/Summer Golf Clinics Section */}
          <Box 
            p={8} 
            rounded="lg" 
            shadow="lg" 
            bg={sectionBgColor}
          >
            <Heading as="h2" size="xl" mb={6} color={headingColor}>
              2025 Spring/Summer Golf Clinics
            </Heading>
            <Text fontSize="lg" mb={6} color={textColor}>
              Call the pro-shop and signup for upcoming golf clinics with Stu Ingraham.
            </Text>
            
            <Box bg={useColorModeValue('gray.50', 'gray.700')} p={6} rounded="md" mb={8}>
              <Heading as="h3" size="md" mb={4}>
                Saturday Mornings (9:30 - 10:45AM)
              </Heading>
              <Text fontSize="xl" fontWeight="bold" mb={4}>
                Cost - $40
              </Text>
              
              <Heading as="h4" size="sm" mb={3}>
                Dates:
              </Heading>
              <SimpleGrid columns={{ base: 2, md: 6 }} spacing={4}>
                <Box p={3} bg={useColorModeValue('white', 'gray.600')} shadow="sm" rounded="md" textAlign="center">
                  <Text fontWeight="medium">April</Text>
                </Box>
                <Box p={3} bg={useColorModeValue('white', 'gray.600')} shadow="sm" rounded="md" textAlign="center">
                  <Text fontWeight="medium">May</Text>
                </Box>
                <Box p={3} bg={useColorModeValue('white', 'gray.600')} shadow="sm" rounded="md" textAlign="center">
                  <Text fontWeight="medium">June</Text>
                </Box>
                <Box p={3} bg={useColorModeValue('white', 'gray.600')} shadow="sm" rounded="md" textAlign="center">
                  <Text fontWeight="medium">July</Text>
                </Box>
                <Box p={3} bg={useColorModeValue('white', 'gray.600')} shadow="sm" rounded="md" textAlign="center">
                  <Text fontWeight="medium">August</Text>
                </Box>
                <Box p={3} bg={useColorModeValue('white', 'gray.600')} shadow="sm" rounded="md" textAlign="center">
                  <Text fontWeight="medium">September</Text>
                </Box>
              </SimpleGrid>
            </Box>
            
            <HStack spacing={4} justify="center">
              <Button
                as="a"
                href="tel:6102565051"
                size="lg"
                colorScheme="green"
                bg="brand.primary"
                _hover={{ bg: 'brand.dark' }}
              >
                Call to Register
              </Button>
            </HStack>
          </Box>

          {/* Junior Golf Camps Section */}
          <Box 
            p={8} 
            rounded="lg" 
            shadow="lg" 
            bg={sectionBgColor}
          >
            <Heading as="h2" size="xl" mb={6} color={headingColor}>
              2025 Junior Golf Camps
            </Heading>
            <Text fontSize="lg" mb={6} color={textColor}>
              Our Junior Golf Camps are the ideal place for young golfers of all abilities to find their swing and lower their scores. 
              A week at one of our camps will help you improve and reach your golf potential.
            </Text>
            
            <Box bg={useColorModeValue('gray.50', 'gray.700')} p={6} rounded="md" mb={8}>
              <Heading as="h3" size="md" mb={5}>
                Monday-Thursday (8:30 - 11:30AM)
              </Heading>
              
              <Heading as="h4" size="sm" mb={3}>
                2025 Dates:
              </Heading>
              <Table variant="simple" mb={6}>
                <Thead>
                  <Tr>
                    <Th>Date</Th>
                    <Th>Session</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td fontWeight="medium">June 23 - 26</Td>
                    <Td>Session 1</Td>
                  </Tr>
                  <Tr>
                    <Td fontWeight="medium">July 14 - 17</Td>
                    <Td>Session 2</Td>
                  </Tr>
                  <Tr>
                    <Td fontWeight="medium">August 18 - 21</Td>
                    <Td>Session 3</Td>
                  </Tr>
                </Tbody>
              </Table>
              
              <VStack spacing={4} align="center">
                <Button
                  as="a"
                  href="/MGOLF_Junior_Camp_Registration2025.doc"
                  download
                  size="lg"
                  colorScheme="blue"
                >
                  Download Registration Form
                </Button>
                <Text fontSize="sm">
                  Complete the registration form and bring it to the pro shop or email it to us.
                </Text>
              </VStack>
            </Box>
          </Box>
          
          {/* Range Facilities Section */}
          <Box 
            p={8} 
            rounded="lg" 
            shadow="lg" 
            bg={sectionBgColor}
          >
            <Heading as="h2" size="xl" mb={6} color={headingColor}>
              Our Range Facilities
            </Heading>
            <Text fontSize="lg" mb={6} color={textColor}>
              Our range is famous for its unparalleled grounds and services including:
            </Text>
            
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} mb={8}>
              <Box p={5} shadow="md" borderWidth="1px" rounded="md">
                <Heading as="h3" size="md" mb={3}>
                  Range Facilities
                </Heading>
                <List spacing={2}>
                  <ListItem>• 35 mat hitting stations along with limited grass area</ListItem>
                  <ListItem>• Practice putting and chipping green with sand bunker</ListItem>
                  <ListItem>• Full-service Pro Shop</ListItem>
                </List>
              </Box>
              
              <Box p={5} shadow="md" borderWidth="1px" rounded="md">
                <Heading as="h3" size="md" mb={3}>
                  Professional Services
                </Heading>
                <List spacing={2}>
                  <ListItem>• Men's, women's and kids' lesson programs</ListItem>
                  <ListItem>• Expert instruction from PGA-certified Professionals</ListItem>
                  <ListItem>• Professional Club Fitting & Swing Analysis</ListItem>
                </List>
              </Box>
              
              <Box p={5} shadow="md" borderWidth="1px" rounded="md">
                <Heading as="h3" size="md" mb={3}>
                  Membership Options
                </Heading>
                <List spacing={2}>
                  <ListItem>• Bucket Passes</ListItem>
                  <ListItem>• Individual Range Memberships</ListItem>
                </List>
              </Box>
              
              <Box p={5} shadow="md" borderWidth="1px" rounded="md">
                <Heading as="h3" size="md" mb={3}>
                  Why Choose Us
                </Heading>
                <Text mb={3}>
                  Whether it's your way of working out stress, enjoying a day with friends or completing a business deal, 
                  we know the importance that a good practice session can have on improving your golf. 
                </Text>
                <Text>
                  And that's why MGOLF Driving Range & Learning Facility takes such pride in providing a complete practice 
                  facility from the moment you arrive until you finish your practice session. Come see the difference we offer.
                </Text>
              </Box>
            </SimpleGrid>
          </Box>
          
          {/* CTA Section */}
          <Box 
            p={8} 
            rounded="lg" 
            shadow="lg" 
            bg="brand.primary"
            color="white"
            textAlign="center"
          >
            <Heading as="h2" size="xl" mb={6}>
              Enjoy a Day at our Range
            </Heading>
            <Text fontSize="lg" mb={8}>
              MGOLF Driving Range & Learning Facility © 2023 All Rights Reserved
            </Text>
            <HStack spacing={4} justify="center">
              <Button 
                as="a" 
                href="/contact" 
                size="lg" 
                colorScheme="whiteAlpha" 
                variant="solid"
              >
                Contact Us
              </Button>
              <Button 
                as="a" 
                href="/services" 
                size="lg" 
                variant="outline" 
                colorScheme="whiteAlpha"
              >
                View Services
              </Button>
            </HStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
} 