import { Flex, Heading } from "@chakra-ui/react";

export const Hero = ({ title }: { title: string }) => (
  <Flex px='1rem' bgGradient='linear(to-l, #E2B748, #FF0080)' bgClip='text'>
    <Heading fontSize='6vw'>{title}</Heading>
  </Flex>
);

Hero.defaultProps = {
  title: "Christian Huffman",
};
