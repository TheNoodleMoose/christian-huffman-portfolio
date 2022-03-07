import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useColorMode, Switch, IconButton } from "@chakra-ui/react";

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <IconButton
      aria-label={isDark ? "light mode toggle" : "dark mode toggle"}
      onClick={toggleColorMode}
      icon={isDark ? <SunIcon /> : <MoonIcon />}
      variant='ghost'
    />
  );
};
