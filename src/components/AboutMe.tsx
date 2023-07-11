import { FC } from 'react';
import { Card, CardBody, CardFooter, Image, Text, Stack, IconButton, Heading, ButtonGroup, Link, useColorModeValue, Tooltip } from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';

const AboutMe: FC = () => {
  const bg = useColorModeValue('gray.200', 'gray.600');

  return (
    <Card direction={{ base: 'column', xl: 'row' }} overflow="hidden" variant="filled">
      <Image objectFit="cover" src="src\assets\me.png" alt="Picture of me" maxH="md" />

      <Stack>
        <CardBody>
          <Heading size="xl">About me</Heading>
          <Text py="2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </Text>
        </CardBody>

        <CardFooter justifyContent="flex-end">
          <ButtonGroup gap={2}>
            <Tooltip label="GitHub profile" openDelay={1000}>
              <Link href="https://github.com/ftrbnd" isExternal>
                <IconButton aria-label="GitHub profile" icon={<FaGithub />} bgColor={bg} />
              </Link>
            </Tooltip>
            <Tooltip label="LinkedIn profile" openDelay={1000}>
              <Link href="https://www.linkedin.com/in/ftrbnd/" isExternal>
                <IconButton aria-label="LinkedIn profile" icon={<FaLinkedin />} bgColor={bg} />
              </Link>
            </Tooltip>
          </ButtonGroup>
        </CardFooter>
      </Stack>
    </Card>
  );
};

export default AboutMe;
