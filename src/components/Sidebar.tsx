import {
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Text,
  Link,
} from "@chakra-ui/react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  return (
    <Drawer isOpen={isOpen} placement='right' onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Check out these cool links</DrawerHeader>

        <DrawerBody>
          <Link href='https://github.com/TheNoodleMoose' isExternal>
            <Text fontSize='2xl'>GitHub</Text>
          </Link>
          <Divider />
          <Link
            href='https://www.linkedin.com/in/christian-huffman-dev/'
            isExternal
          >
            <Text fontSize='2xl'>LinkedIn</Text>
          </Link>
          <Divider />
          <Link href='mailto:christianhuffmanwork@gmail.com' isExternal>
            <Text fontSize='2xl'>Email me</Text>
          </Link>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default Sidebar;
