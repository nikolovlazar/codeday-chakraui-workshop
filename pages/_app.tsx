import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';

import '@fontsource/playfair-display';
import '@fontsource/playfair-display/700.css';

import theme from '../src/theme';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default App;
