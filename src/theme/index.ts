import {
  extendTheme,
  theme as base,
  withDefaultColorScheme,
} from '@chakra-ui/react';

const theme = extendTheme(
  {
    colors: {
      brand: {
        50: '#FFECEC',
        100: '#FFCECF',
        200: '#FFB0B2',
        300: '#FF9496',
        400: '#FF7A7C',
        500: '#F76264',
        600: '#D54B4D',
        700: '#A93739',
        800: '#752425',
        900: '#3C1212',
      },
    },
    fonts: {
      heading: `Playfair Display, ${base.fonts.heading}`,
    },
  },
  withDefaultColorScheme({
    colorScheme: 'brand',
    components: ['Button', 'Input', 'Checkbox'],
  })
);

export default theme;
