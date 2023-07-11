import { FC } from 'react';
import { Project } from '../utils/projects';
import { CardHeader, Heading, CardBody, CardFooter, IconButton, Card, Stack, Image, Text, ButtonGroup, Link, Tooltip } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa6';
import { ExternalLinkIcon } from '@chakra-ui/icons';

const ProjectCard: FC<Project> = ({ name, description, thumbnailUrl, repoUrl, demoUrl }) => {
  return (
    <Card direction="column" overflow="hidden" variant="filled">
      <Image objectFit="cover" src={thumbnailUrl} alt={`${name} thumbnail`} />

      <Stack>
        <CardHeader>
          <Heading size="md">{name}</Heading>
        </CardHeader>

        <CardBody>
          <Text py="2">{description}</Text>
        </CardBody>

        <CardFooter justifyContent="flex-end">
          <ButtonGroup gap={2}>
            <Tooltip label="GitHub repository" openDelay={1000}>
              <Link href={repoUrl} isExternal>
                <IconButton aria-label="GitHub repository" icon={<FaGithub />} />
              </Link>
            </Tooltip>
            <Tooltip label="Live demo" openDelay={1000}>
              <Link href={demoUrl} isExternal>
                <IconButton aria-label="Live demo" icon={<ExternalLinkIcon />} />
              </Link>
            </Tooltip>
          </ButtonGroup>
        </CardFooter>
      </Stack>
    </Card>
  );
};

export default ProjectCard;
