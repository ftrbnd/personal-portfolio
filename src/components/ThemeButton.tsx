import { ActionIcon, Flex, Tooltip, useMantineColorScheme } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons-react';
import { FC } from 'react';

const ThemeButton: FC = () => {
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  return (
    <Flex justify="flex-end">
      <Tooltip label={dark ? 'Light mode' : 'Dark mode'}>
        <ActionIcon variant="outline" color={dark ? 'yellow' : 'blue'} onClick={() => toggleColorScheme()}>
          {dark ? <IconSun size="1.1rem" /> : <IconMoonStars size="1.1rem" />}
        </ActionIcon>
      </Tooltip>
    </Flex>
  );
};

export default ThemeButton;
