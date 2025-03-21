import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Flex,
  useColorModeValue,
  VStack,
  Button,
  Link,
} from '@chakra-ui/react';
import ContactForm from '../components/ContactForm';

export default function ContactPage() {
  const primaryBgColor = useColorModeValue('brand.primary', 'gray.900');
  const boxBgColor = useColorModeValue('white', 'gray.700');
  const sectionBgColor = useColorModeValue('gray.50', 'gray.900');
  const faqBoxBgColor = useColorModeValue('white', 'gray.800');

  return (
    <Box>
      {/* Header */}
      <Box
        bg={primaryBgColor}
        py={20}
        px={8}
        textAlign="center"
      >
        <Container maxW={'6xl'}>
          <Heading color="white" mb={6} fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            Contact Us
          </Heading>
          <Text color="white" fontSize={{ base: 'lg', md: 'xl' }} maxW="3xl" mx="auto">
            Get in touch with our team for bookings, inquiries, or feedback
          </Text>
        </Container>
      </Box>

      {/* Contact Info and Form */}
      <Container maxW={'6xl'} py={16}>
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={10}>
          {/* Contact Form */}
          <Box>
            <ContactForm />
          </Box>

          {/* Contact Information */}
          <Box>
            <VStack spacing={8} align="stretch">
              <Box bg={boxBgColor} p={8} rounded="lg" shadow="lg">
                <Heading as="h3" size="lg" mb={6}>
                  Contact Information
                </Heading>

                <VStack spacing={6} align="start">
                  <Flex align="center">
                    <Box color="brand.primary" boxSize={6} mr={4} fontWeight="bold" fontSize="xl">
                      📞
                    </Box>
                    <Box>
                      <Text fontWeight="bold">Phone</Text>
                      <Link href="tel:+15551234567" color="brand.primary">
                        (555) 123-4567
                      </Link>
                    </Box>
                  </Flex>

                  <Flex align="center">
                    <Box color="brand.primary" boxSize={6} mr={4} fontWeight="bold" fontSize="xl">
                      ✉️
                    </Box>
                    <Box>
                      <Text fontWeight="bold">Email</Text>
                      <Link href="mailto:info@mgolfrange.com" color="brand.primary">
                        info@mgolfrange.com
                      </Link>
                    </Box>
                  </Flex>

                  <Flex align="center">
                    <Box color="brand.primary" boxSize={6} mr={4} fontWeight="bold" fontSize="xl">
                      📍
                    </Box>
                    <Box>
                      <Text fontWeight="bold">Address</Text>
                      <Text>123 Golf Drive</Text>
                      <Text>Anytown, ST 12345</Text>
                    </Box>
                  </Flex>

                  <Flex align="center">
                    <Box color="brand.primary" boxSize={6} mr={4} fontWeight="bold" fontSize="xl">
                      🕒
                    </Box>
                    <Box>
                      <Text fontWeight="bold">Hours</Text>
                      <Text>Monday-Friday: 7AM - 10PM</Text>
                      <Text>Saturday: 6AM - 10PM</Text>
                      <Text>Sunday: 6AM - 8PM</Text>
                    </Box>
                  </Flex>
                </VStack>
              </Box>

              <Box bg={boxBgColor} p={8} rounded="lg" shadow="lg">
                <Heading as="h3" size="lg" mb={6}>
                  Location
                </Heading>
                {/* Replace with actual Google Maps embed */}
                <Box
                  as="iframe"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.1508400263864!2d-74.0060!3d40.7128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjEiTiA3NMKwMDAnMjEuNiJX!5e0!3m2!1sen!2sus!4v1651234567890!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{ border: 0, borderRadius: 'md' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </Box>
              
              <Button
                as="a"
                href="https://goo.gl/maps/1234"
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                colorScheme="green"
                bg="brand.primary"
                _hover={{ bg: 'brand.dark' }}
              >
                📍 Get Directions
              </Button>
            </VStack>
          </Box>
        </SimpleGrid>
      </Container>

      {/* FAQ Section */}
      <Box bg={sectionBgColor} py={16}>
        <Container maxW={'4xl'}>
          <Heading as="h2" size="xl" mb={8} textAlign="center">
            Frequently Asked Questions
          </Heading>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
            <Box p={5} shadow="md" borderWidth="1px" rounded="lg" bg={faqBoxBgColor}>
              <Heading as="h3" size="md" mb={3}>
                Do I need to bring my own clubs?
              </Heading>
              <Text>
                No, we provide complimentary club rentals for all visitors. However, you're welcome to bring your own clubs if you prefer.
              </Text>
            </Box>

            <Box p={5} shadow="md" borderWidth="1px" rounded="lg" bg={faqBoxBgColor}>
              <Heading as="h3" size="md" mb={3}>
                Do you offer gift cards?
              </Heading>
              <Text>
                Yes! Gift cards are available for purchase in person or online and can be used for any of our services.
              </Text>
            </Box>

            <Box p={5} shadow="md" borderWidth="1px" rounded="lg" bg={faqBoxBgColor}>
              <Heading as="h3" size="md" mb={3}>
                Is there food available on-site?
              </Heading>
              <Text>
                Yes, our clubhouse features a full-service restaurant and bar offering a variety of food and beverage options.
              </Text>
            </Box>

            <Box p={5} shadow="md" borderWidth="1px" rounded="lg" bg={faqBoxBgColor}>
              <Heading as="h3" size="md" mb={3}>
                Do I need to make a reservation?
              </Heading>
              <Text>
                Reservations are recommended for peak times but not required. Members have priority booking privileges.
              </Text>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>
    </Box>
  );
} 