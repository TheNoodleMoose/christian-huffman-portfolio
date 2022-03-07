import { Stack, StackProps } from "@chakra-ui/react";

export const Main = (props: StackProps) => (
  <Stack
    spacing='1.5rem'
    width='100%'
    alignItems='center'
    maxWidth='48rem'
    px='1rem'
    {...props}
  />
);
