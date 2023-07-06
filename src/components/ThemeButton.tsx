import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons-react';
import { FC } from 'react';

const ThemeButton: FC = () => {
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  return (
    <ActionIcon variant="outline" color={dark ? 'yellow' : 'blue'} onClick={() => toggleColorScheme()} title={dark ? 'Light mode' : 'Dark mode'}>
      {dark ? <IconSun size="1.1rem" /> : <IconMoonStars size="1.1rem" />}
    </ActionIcon>
  );
};

export default ThemeButton;