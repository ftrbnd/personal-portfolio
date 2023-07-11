import { Box, Container, Heading, IconButton, Link, Stack, Text, Tooltip, useColorModeValue } from '@chakra-ui/react';
import { FC } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa6';

const FooterContent: FC = () => {
  return (
    <Box bg={useColorModeValue('gray.200', 'gray.900')} color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={4} spacing={4} justify={'center'} align={'center'}>
        <Heading size="lg">Contact me</Heading>
        <Heading size="sm">Please get in touch if you think our work could be mutually beneficial!</Heading>
      </Container>

      <Box borderTopWidth={1} borderStyle={'solid'} borderColor={useColorModeValue('gray.200', 'gray.700')}>
        <Container as={Stack} maxW={'6xl'} py={4} direction={{ base: 'column', md: 'row' }} spacing={4} justify={{ base: 'center', md: 'space-between' }} align={{ base: 'center', md: 'center' }}>
          <Stack direction={'row'} align={'center'}>
            <Tooltip label="Email address" openDelay={1000}>
              <Link href="mailto:giosalas25@gmail.com" isExternal>
                <IconButton aria-label="Email address" icon={<FaEnvelope />} />
              </Link>
            </Tooltip>
            <Text>giosalas25@gmail.com</Text>
          </Stack>
          <Stack direction={'row'} spacing={6}>
            <Tooltip label="GitHub profile" openDelay={1000}>
              <Link href="https://github.com/ftrbnd" isExternal>
                <IconButton aria-label="GitHub profile" icon={<FaGithub />} />
              </Link>
            </Tooltip>
            <Tooltip label="LinkedIn profile" openDelay={1000}>
              <Link href="https://www.linkedin.com/in/ftrbnd/" isExternal>
                <IconButton aria-label="LinkedIn profile" icon={<FaLinkedin />} />
              </Link>
            </Tooltip>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default FooterContent;
