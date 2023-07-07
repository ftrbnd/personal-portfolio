import { Header, AppShell, Navbar, Footer, Text } from '@mantine/core';
import { useState } from 'react';
import HeaderContent from './components/HeaderContent';

export default function App() {
  const [navbarOpened, setNavbarOpened] = useState(false);

  return (
    <AppShell
      styles={(theme) => ({
        main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] }
      })}
      padding="md"
      navbar={
        <Navbar p="md" hiddenBreakpoint="sm" hidden={!navbarOpened} width={{ sm: 200, lg: 300 }}>
          <Text>Application navbar</Text>
        </Navbar>
      }
      navbarOffsetBreakpoint="sm"
      header={
        <Header height={{ base: 60, md: 70 }} p="xs">
          <HeaderContent navbarOpened={navbarOpened} setNavbarOpened={setNavbarOpened} />
        </Header>
      }
      footer={
        <Footer height={60} p="xs">
          {/* {Footer content} */}
        </Footer>
      }
    >
      {/* Your application here */}
      <Text>Resize app to see responsive navbar in action</Text>
    </AppShell>
  );
}
