import { HamburgerIcon } from "@chakra-ui/icons";
import { Flex, IconButton, useDisclosure } from "@chakra-ui/react";
import Image from "next/image";
import { DarkModeSwitch } from "./DarkModeSwitch";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex w='100%' justify='center'>
      <Flex
        w='100%'
        px='1rem'
        maxW='1366px'
        marginY='5'
        justify='space-between'
        align='center'
      >
        <Image
          src={require("../../public/assets/logo.png")}
          alt='Christian Huffman Dev Logo'
        />
        <Flex justify='space-between' align='center'>
          <DarkModeSwitch />
          <IconButton
            onClick={onOpen}
            marginLeft='5'
            aria-label='menu button'
            icon={<HamburgerIcon />}
          />
        </Flex>
      </Flex>
      <Sidebar isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
};

export default Navbar;
