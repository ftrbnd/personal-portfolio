import { Card, Group, Image, Text, ActionIcon } from '@mantine/core';
import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react';
import { FC } from 'react';

const AboutMe: FC = () => {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
          height={200}
          alt="Norway"
        />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>About me</Text>
      </Group>

      <Text size="sm" color="dimmed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </Text>

      <Group position="right" mt="md" mb="xs">
        <ActionIcon variant="light" title="GitHub profile">
          <IconBrandGithub size="1.1rem" />
        </ActionIcon>
        <ActionIcon variant="light" title="LinkedIn profile">
          <IconBrandLinkedin size="1.1rem" />
        </ActionIcon>
      </Group>
    </Card>
  );
};

export default AboutMe;
