import {
  chakra,
  VStack,
  HStack,
  Heading,
  Text,
  Button,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  useBreakpointValue,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';

import CodeDayLogo from '../src/icons/codeday';
import ArrowRight from '../src/icons/arrow-right';

const InfoCard = ({ title, description }) => {
  return (
    <VStack spacing={{ base: 2, '2xl': 4 }} alignItems='flex-start'>
      <CodeDayLogo
        color='white'
        w={{ base: 6, '2xl': 12 }}
        h={{ base: 6, '2xl': 12 }}
      />
      <Text fontSize='lg' color='white' fontWeight='bold'>
        {title}
      </Text>
      <Text fontSize='md' color='whiteAlpha.800'>
        {description}
      </Text>
      <Button
        variant={useColorModeValue('solid', 'ghost')}
        color='white'
        rightIcon={<ArrowRight color='white' />}
      >
        Learn more
      </Button>
    </VStack>
  );
};

const IndexPage = () => {
  const isMobile = useBreakpointValue({ base: true, xl: false });
  const { toggleColorMode } = useColorMode();
  return (
    <HStack h='100vh' alignItems='stretch'>
      {!isMobile && (
        <VStack
          flex={1}
          bg={useColorModeValue('brand.500', 'brand.800')}
          spacing={{ base: 8, '2xl': 14 }}
          p={12}
          alignItems='stretch'
        >
          <VStack spacing={4} alignItems='flex-start'>
            <Heading fontSize={{ base: '2xl', '2xl': '4xl' }} color='white'>
              CodeDay.org
            </Heading>
            <Heading
              fontSize={{ base: 'xl', '2xl': '2xl' }}
              color='whiteAlpha.800'
              fontWeight='normal'
            >
              There's a place in tech for everyone.
            </Heading>
          </VStack>
          <InfoCard
            title='CodeDay Labs'
            description='A virtual internship-style program at scale, matching students with real-world projects and mentors from leading tech companies.'
          />
          <InfoCard
            title='CodeDay Init'
            description='Helping CS students make their first open-source contribution.'
          />
          <InfoCard
            title='Virtual CodeDay'
            description='The most beginner-friendly coding event on the internet.'
          />
        </VStack>
      )}
      <VStack
        flex={1}
        p={{ base: 4, md: 12 }}
        justifyContent='space-between'
        alignItems='stretch'
      >
        <VStack spacing={{ base: 12, xl: 20 }} alignItems='stretch'>
          <HStack alignItems='center' justifyContent='flex-end' spacing={4}>
            <Text>Don't have an account?</Text>
            <Button variant='ghost'>Sign up</Button>
          </HStack>
          <VStack spacing={{ base: 6, xl: 12 }}>
            <Heading size='lg'>
              Login to <chakra.span color='brand.500'>CodeDay.org</chakra.span>
            </Heading>
            <VStack spacing={6} maxW='xs' w='full' alignItems='flex-start'>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input
                  type='email'
                  placeholder='lazar@codeday.org'
                  variant='filled'
                />
              </FormControl>
              <FormControl>
                <FormLabel>Password</FormLabel>
                <Input
                  type='password'
                  placeholder='*********'
                  variant='filled'
                />
              </FormControl>
              <Checkbox>Remember me?</Checkbox>
            </VStack>
            <Button>Sign in</Button>
          </VStack>
        </VStack>
        <Text color='gray.500' fontSize='xs' w='fit-content' alignSelf='center'>
          Copyright © 2009 – 2021 CodeDay. A 501(c)(3) nonprofit. EIN:
          26-4742589.
          <br />
          (888) 607-7763
          <Button size='xs' variant='link' ml={2} onClick={toggleColorMode}>
            Change theme
          </Button>
        </Text>
      </VStack>
    </HStack>
  );
};

export default IndexPage;
