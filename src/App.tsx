import { Flex, Grid, GridItem, Heading, VStack } from '@chakra-ui/react';
import HeaderContent from './components/HeaderContent';
import ProjectCard from './components/ProjectCard';
import { projects } from './utils/projects';
import FooterContent from './components/FooterContent';
import AboutMe from './components/AboutMe';

export default function App() {
  return (
    <Flex flexDir="column">
      <HeaderContent />

      <VStack alignSelf="center" p={6} w={{ sm: '90%', md: '75%', lg: '50em', xl: '75em' }} mb={12}>
        <AboutMe />
        <Heading alignSelf={'start'} mt={12}>
          My work
        </Heading>
        <Grid gap={3} templateColumns={{ sm: '1fr', md: '1fr 1fr', xl: '1fr 1fr 1fr' }} autoRows="1fr">
          {projects.map((project, index) => (
            <GridItem key={`${project.name}-${index}`} w="100%" display="flex">
              <ProjectCard
                key={`${project.name}-${index}`}
                name={project.name}
                description={project.description}
                thumbnailUrl={project.thumbnailUrl}
                repoUrl={project.repoUrl}
                demoUrl={project.demoUrl}
              />
            </GridItem>
          ))}
        </Grid>
      </VStack>

      <FooterContent />
    </Flex>
  );
}
