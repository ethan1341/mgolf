import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  useColorModeValue,
} from '@chakra-ui/react';
import StaffCard from '../components/StaffCard';

export default function StaffPage() {
  const staff = [
    {
      name: 'Mike Oswik',
      role: 'Owner',
      image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      bio: 'Mike is a graduate of Haverford High School and attended the Golf Academy of America training in the business of golf, course operations, teaching, technology and mentorship.  Mike is competing at the amateur level throughout the Mid-Atlantic area. He competed in the 2024 Philadelphia Open.',
    },
    {
      name: 'Mike Oswik Jr',
      role: 'Owner',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      bio: 'Mike opened MGOLF in 1999 and has established the range as one the premier practice facilities in the area.  Mike is a graduate of Archbishop John Carroll High School. He is a five-time qualifier to the USGA Public Links Golf Championship and is a four-time winner of the Philadelphia Open Amateur at Cobbs Creek and qualified for the 2011 USGA Senior Amateur Championship. '
    },
    {
      name: 'Stu Ingraham',
      role: 'Golf Professional',
      image: 'https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',
      bio: 'Stu is a former winner of the Pennsylvania State High School Championship, Pennsylvania State Open, Philadelphia Open and the Philadelphia PGA Section Championship.  Stu has competed in 38 PGA tour events, which has included 7 major championships.  His career highlight was finishing as the low club professional at the 1993 PGA Championship.',
    }
  ];

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
            Meet Our Team
          </Heading>
          <Text color="white" fontSize={{ base: 'lg', md: 'xl' }} maxW="3xl" mx="auto">
            Our experienced and passionate staff is dedicated to helping you improve your golf game
          </Text>
        </Container>
      </Box>

      {/* Staff Grid */}
      <Container maxW={'6xl'} py={16}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} alignItems="flex-start">
          {staff.map((member, index) => (
            <StaffCard
              key={index}
              name={member.name}
              role={member.role}
              image={member.image}
              bio={member.bio}
            />
          ))}
        </SimpleGrid>
      </Container>

      {/* Certifications */}
      <Box bg={useColorModeValue('gray.50', 'gray.900')} py={16}>
        <Container maxW={'4xl'} textAlign="center">
          <Heading mb={6} size="xl">Our Qualifications</Heading>
          <Text fontSize="lg" mb={10}>
            Our teaching professionals hold certifications from the industry's most respected organizations.
            We maintain the highest standards through continuing education and staying current with
            the latest teaching technologies and methodologies.
          </Text>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
            <Box p={5} shadow="md" borderWidth="1px" rounded="lg" bg={useColorModeValue('white', 'gray.800')}>
              <Heading size="md" mb={4}>Professional Certifications</Heading>
              <Text>
                • PGA of America Class A Membership<br />
                • Titleist Performance Institute (TPI)<br />
                • TrackMan University Certification<br />
                • U.S. Kids Golf Certified Coach<br />
                • PGA Teaching & Coaching Certification
              </Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px" rounded="lg" bg={useColorModeValue('white', 'gray.800')}>
              <Heading size="md" mb={4}>Training Philosophy</Heading>
              <Text>
                We believe in a personalized approach to golf instruction, recognizing that each 
                student has unique needs and goals. Our teaching combines traditional fundamentals 
                with cutting-edge technology and a focus on the whole golfer—physical, mental, and technical.
              </Text>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>
    </Box>
  );
} 