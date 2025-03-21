import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import StaffPage from './pages/StaffPage';
import EventsPage from './pages/EventsPage';
import ContactPage from './pages/ContactPage';
import theme from './theme/theme';

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
          </Routes>
        </Layout>
      </Router>
    </ChakraProvider>
  );
}

export default App;
