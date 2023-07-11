import { ChakraProvider } from '@chakra-ui/react';
import App from './App';
import theme from './utils/theme';

const Providers = () => {
  return (
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  );
};

export default Providers;
