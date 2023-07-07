import { MediaQuery, Burger, useMantineTheme, Grid, Title } from '@mantine/core';
import { FC } from 'react';
import ThemeButton from './ThemeButton';

interface IProps {
  navbarOpened: boolean;
  setNavbarOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

const HeaderContent: FC<IProps> = ({ navbarOpened, setNavbarOpened }) => {
  const theme = useMantineTheme();

  return (
    <Grid align="center" style={{ height: '100%' }} gutter={5} gutterXs="md" gutterMd="xl" gutterXl={50}>
      <Grid.Col span="auto">
        <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
          <Burger opened={navbarOpened} onClick={() => setNavbarOpened((opened) => !opened)} size="sm" color={theme.colors.gray[6]} mr="xl" />
        </MediaQuery>{' '}
      </Grid.Col>
      <Grid.Col span={6}>
        <Title order={2} align="center">
          Giovanni Salas
        </Title>
      </Grid.Col>
      <Grid.Col span="auto">
        <ThemeButton />
      </Grid.Col>
    </Grid>
  );
};

export default HeaderContent;
