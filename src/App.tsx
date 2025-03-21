import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import StaffPage from './pages/StaffPage';
import EventsPage from './pages/EventsPage';
import ContactPage from './pages/ContactPage';
import Layout from './components/Layout';
import theme from './theme/theme';

// Get the basename from the public URL for GitHub Pages compatibility
const basename = process.env.PUBLIC_URL || '';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/staff" element={<StaffPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Layout>
      </Router>
    </ChakraProvider>
  );
}

export default App;
