import { Container, Flex, FlexProps, Text } from "@chakra-ui/react";

export const Footer = (props: FlexProps) => (
  <Flex w={"100%"} as='footer' justify='center' py='4rem' {...props}>
    <Container
      display='flex'
      justifyContent='center'
      flexDirection='row'
      bottom='0'
      width='100%'
      maxWidth='48rem'
      py={3}
    >
      <Text>
        {`© ${new Date().getFullYear()} by Christian Huffman. Made with NextJS, TypeScript, Chakra UI, and`}{" "}
        <span aria-label='heart emoji' role='img'>
          ❤️
        </span>
      </Text>
    </Container>
  </Flex>
);
