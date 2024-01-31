import React from 'react';
import ColorModeSwitcher from '../../../ColorModeSwitcher';
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  Link,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';
import { RiMenu5Fill, RiLogoutBoxLine, RiDashboardFill } from 'react-icons/ri';

function GetLink({ url = '/', title = 'Home' }) {
  return (
    <Link to={url}>
      <Button variant={'ghost'}>{title}</Button>
    </Link>
  );
}

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const isAuthenticated = true;

  const user = {
    role: 'admin',
  };

  const logoutHandler = () => {};
  return (
    <>
      <ColorModeSwitcher />
      <Button
        onClick={onOpen}
        colorScheme="green"
        width={'12'}
        height={'12'}
        rounded={'full'}
        position={'fixed'}
        top="6"
        left="6"
      >
        <RiMenu5Fill />
      </Button>
      <Drawer placement="left" isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay backdropFilter={'blur(3px)'} />
        <DrawerContent>
          <DrawerHeader borderBottomWidth={'2px'}>Course</DrawerHeader>
          <DrawerBody>
            <VStack spacing={'5'} alignItems={'flex-start'}>
              <GetLink url="/" title="Home" />
              <GetLink url="/courses" title="All courses" />
              <GetLink url="/request" title="Request course" />
              <GetLink url="/about" title="About" />
              <GetLink url="/contact" title="Contact us" />

              <HStack
                justify-content={'space-evenly'}
                position={'absolute'}
                bottom={'2rem'}
                width={'80%'}
                spacing={'5'}
              >
                {isAuthenticated ? (
                  <>
                    <VStack>
                      <HStack>
                        <Link to="/profile">
                          <Button variant={'ghost'} colorScheme="green">
                            Profile
                          </Button>
                        </Link>
                        <Button
                          variant={'ghost'}
                          colorScheme="green"
                          onClick={logoutHandler}
                        >
                          <RiLogoutBoxLine />
                          Logout
                        </Button>
                      </HStack>

                      {user && user.role === 'admin' && (
                        <Link to="/admin/dashboard">
                          <Button variant={'ghost'} colorScheme="green">
                            <RiDashboardFill style={{ margin: '5px' }} />
                            Dashboard
                          </Button>
                        </Link>
                      )}
                    </VStack>
                  </>
                ) : (
                  <>
                    <Link to="/login">
                      <Button colorScheme="green">Login</Button>
                    </Link>
                    <Link to="/register">
                      <Button colorScheme="green">Signup</Button>
                    </Link>
                  </>
                )}
              </HStack>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
