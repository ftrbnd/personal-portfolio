import { FC } from 'react';
import ThemeButton from './ThemeButton';
import { Divider, Flex, Grid, GridItem, Heading, useColorModeValue, Kbd, Stack } from '@chakra-ui/react';

const HeaderContent: FC = () => {
  const bg = useColorModeValue('gray.100', 'gray.700');

  return (
    <Grid templateRows="auto auto" backgroundColor={bg}>
      <GridItem rowSpan={1}>
        <Flex p={3} justify="space-between">
          <Heading as="h1" noOfLines={1}>
            Giovanni Salas
          </Heading>
          <Stack direction="row" align="center">
            <span>
              <Kbd>ctrl</Kbd> <Kbd>J</Kbd>
            </span>
            <ThemeButton />
          </Stack>
        </Flex>
      </GridItem>

      <GridItem rowSpan={1}>
        <Divider orientation="horizontal" />
      </GridItem>
    </Grid>
  );
};

export default HeaderContent;
