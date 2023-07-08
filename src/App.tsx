import { Header, AppShell, Footer, Grid, Flex } from '@mantine/core';
import { useState } from 'react';
import HeaderContent from './components/HeaderContent';
import AboutMe from './components/AboutMe';
import ProjectCard from './components/ProjectCard';
import { projects } from './utils';

export default function App() {
  const [navbarOpened, setNavbarOpened] = useState(false);

  return (
    <AppShell
      styles={(theme) => ({
        main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] }
      })}
      padding="md"
      // navbar={
      //   <Navbar p="md" hiddenBreakpoint="sm" hidden={!navbarOpened} width={{ sm: 200, lg: 300 }}>
      //     <Text>Application navbar</Text>
      //   </Navbar>
      // }
      // navbarOffsetBreakpoint="sm"
      header={
        <Header height={{ base: 60, md: 70 }} p="md">
          <HeaderContent navbarOpened={navbarOpened} setNavbarOpened={setNavbarOpened} />
        </Header>
      }
      footer={
        <Footer height={60} p="xs">
          {/* {Footer content} */}
        </Footer>
      }
    >
      <Flex direction="column" gap={{ base: 'sm', sm: 'lg' }} justify="center">
        <AboutMe />
        <Grid columns={3} gutterXs="md" gutterMd="xl" gutterXl={50}>
          {projects.map((project, index) => (
            <Grid.Col key={`${project.name}-${index}`} sm={3} md={1.5} lg={1}>
              <ProjectCard name={project.name} description={project.description} thumbnailUrl={project.thumbnailUrl} repoUrl={project.repoUrl} demoUrl={project.demoUrl} />
            </Grid.Col>
          ))}
        </Grid>
      </Flex>
    </AppShell>
  );
}
