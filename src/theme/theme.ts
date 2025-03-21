import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const colors = {
  brand: {
    primary: '#2D6A4F', // Deep green
    secondary: '#74C69D', // Light green
    accent: '#D8F3DC', // Very light green
    dark: '#1B4332', // Darker green
  },
  background: {
    light: '#F8FAF9',
    dark: '#2C3E50',
  },
};

const fonts = {
  heading: '"Montserrat", sans-serif',
  body: '"Open Sans", sans-serif',
};

const theme = extendTheme({
  config,
  colors,
  fonts,
  styles: {
    global: (props: any) => ({
      body: {
        bg: props.colorMode === 'dark' ? 'background.dark' : 'background.light',
      },
    }),
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'bold',
        borderRadius: 'md',
      },
      variants: {
        primary: {
          bg: 'brand.primary',
          color: 'white',
          _hover: {
            bg: 'brand.dark',
          },
        },
        secondary: {
          bg: 'brand.secondary',
          color: 'white',
          _hover: {
            bg: 'brand.primary',
          },
        },
        outline: {
          borderColor: 'brand.primary',
          color: 'brand.primary',
          _hover: {
            bg: 'brand.accent',
          },
        },
      },
    },
  },
});

export default theme; 