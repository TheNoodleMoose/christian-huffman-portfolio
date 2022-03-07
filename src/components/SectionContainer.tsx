import { Flex } from "@chakra-ui/react";

const SectionContainer: React.FC = ({ children }) => (
  <Flex
    justify='center'
    flexDirection='column'
    w='100%'
    align='center'
    marginY='20'
    px='1rem'
  >
    {children}
  </Flex>
);

export default SectionContainer;
