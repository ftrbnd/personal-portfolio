import { FC } from 'react';
import { IconButton, Tooltip, useColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const ThemeButton: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Tooltip label={colorMode === 'light' ? 'Dark mode' : 'Light mode'} openDelay={1000}>
      <IconButton aria-label="Toggle color mode" icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />} onClick={toggleColorMode} />
    </Tooltip>
  );
};

export default ThemeButton;
