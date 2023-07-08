import { ActionIcon, Card, Group, Text, Image } from '@mantine/core';
import { IconBrandGithub, IconExternalLink } from '@tabler/icons-react';
import { FC } from 'react';
import { Project } from '../utils';

const ProjectCard: FC<Project> = ({ name, description, thumbnailUrl, repoUrl, demoUrl }) => {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image src={thumbnailUrl} height={400} alt={`${name} thumbnail`} />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>{name}</Text>
        <Group position="right" mt="md" mb="xs">
          <ActionIcon component="a" href={repoUrl} target="_blank" variant="light" title="GitHub repository">
            <IconBrandGithub size="1.1rem" />
          </ActionIcon>
          <ActionIcon component="a" href={demoUrl} target="_blank" variant="light" title="Live demo">
            <IconExternalLink size="1.1rem" />
          </ActionIcon>
        </Group>
      </Group>

      <Text size="sm" color="dimmed">
        {description}
      </Text>
    </Card>
  );
};

export default ProjectCard;
