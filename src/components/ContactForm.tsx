import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
  Heading,
  Text,
  useColorModeValue,
  FormErrorMessage,
  Select,
  useToast,
} from '@chakra-ui/react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');
  
  const toast = useToast();

  const validateForm = () => {
    let isValid = true;
    
    // Reset errors
    setNameError('');
    setEmailError('');
    setMessageError('');
    
    // Validate name
    if (!name.trim()) {
      setNameError('Name is required');
      isValid = false;
    }
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      setEmailError('Email is required');
      isValid = false;
    } else if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email');
      isValid = false;
    }
    
    // Validate message
    if (!message.trim()) {
      setMessageError('Message is required');
      isValid = false;
    }
    
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      
      // Show success message
      toast({
        title: 'Message Sent',
        description: "We've received your message. We'll get back to you soon!",
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
      
      // Reset form
      setName('');
      setEmail('');
      setPhone('');
      setSubject('');
      setMessage('');
    }, 1500);
  };

  return (
    <Box bg={useColorModeValue('white', 'gray.700')} p={8} rounded="lg" shadow="lg">
      <VStack spacing={5} as="form" onSubmit={handleSubmit}>
        <Heading as="h3" size="lg">
          Contact Us
        </Heading>
        <Text color={useColorModeValue('gray.600', 'gray.200')}>
          We'd love to hear from you! Fill out the form below and we'll get back to you as soon as possible.
        </Text>

        <FormControl isInvalid={!!nameError}>
          <FormLabel htmlFor="name">Name</FormLabel>
          <Input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
          />
          <FormErrorMessage>{nameError}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!emailError}>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
          />
          <FormErrorMessage>{emailError}</FormErrorMessage>
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="phone">Phone (optional)</FormLabel>
          <Input
            id="phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Your phone number"
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="subject">Subject</FormLabel>
          <Select
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Select a subject"
          >
            <option value="general">General Inquiry</option>
            <option value="booking">Booking Request</option>
            <option value="lessons">Golf Lessons</option>
            <option value="events">Events and Groups</option>
            <option value="feedback">Feedback</option>
          </Select>
        </FormControl>

        <FormControl isInvalid={!!messageError}>
          <FormLabel htmlFor="message">Message</FormLabel>
          <Textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your message"
            rows={5}
          />
          <FormErrorMessage>{messageError}</FormErrorMessage>
        </FormControl>

        <Button
          colorScheme="green"
          bg="brand.primary"
          color="white"
          _hover={{ bg: 'brand.dark' }}
          size="lg"
          width="full"
          type="submit"
          isLoading={isSubmitting}
          loadingText="Submitting"
        >
          Send Message
        </Button>
      </VStack>
    </Box>
  );
} 