import { Slide, Flex, Grid, GridItem, Heading, IconButton, VStack, useColorMode } from '@chakra-ui/react';
import HeaderContent from './components/HeaderContent';
import ProjectCard from './components/ProjectCard';
import { projects } from './utils/projects';
import FooterContent from './components/FooterContent';
import AboutMe from './components/AboutMe';
import { useHotkeys } from 'react-hotkeys-hook';
import useScroll from './utils/useScroll';
import { ArrowUpIcon } from '@chakra-ui/icons';

const BUTTON_POSITION = {
  right: 10,
  bottom: 10,
  zIndex: 100
};

export default function App() {
  const { toggleColorMode } = useColorMode();
  const { scrollY, scrollToTop } = useScroll();
  useHotkeys('mod+j', () => toggleColorMode(), { preventDefault: true });

  return (
    <Flex flexDir="column" tabIndex={-1}>
      <HeaderContent />

      <Slide in={scrollY > 20} direction="right" style={{ position: 'fixed', right: BUTTON_POSITION.right, bottom: BUTTON_POSITION.bottom, zIndex: BUTTON_POSITION.zIndex }}>
        <IconButton
          aria-label="Scroll to top"
          icon={<ArrowUpIcon />}
          onClick={scrollToTop}
          position="fixed"
          right={BUTTON_POSITION.right}
          bottom={BUTTON_POSITION.bottom}
          zIndex={BUTTON_POSITION.zIndex}
        />
      </Slide>

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

/**
 * TODO:
 * - Scroll to top button
 * - Revealing footer
 * - Splash of color like on TOP template
 */
