import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { RiMenu5Fill, RiLogoutBoxLine, RiDashboardFill } from "react-icons/ri";

function GetLink({ url = "/", title = "Home", onClose }) {
  return (
    <Link to={url} onClick={onClose}>
      <Button variant={"ghost"}>{title}</Button>
    </Link>
  );
}

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const isAuthenticated = true;

  const user = {
    role: "admin",
  };

  const logoutHandler = () => {
    onClose();
  };
  return (
    <>
      <Button
        onClick={onOpen}
        colorScheme="primary"
        width={"12"}
        height={"12"}
        rounded={"full"}
        zIndex="overlay"
        position={"fixed"}
        top="6"
        left="6"
      >
        <RiMenu5Fill />
      </Button>
      <Drawer placement="left" isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay backdropFilter={"blur(3px)"} />
        <DrawerContent>
          <DrawerHeader borderBottomWidth={"2px"}>Course</DrawerHeader>
          <DrawerBody>
            <VStack spacing={"5"} alignItems={"flex-start"}>
              <GetLink url="/" title="Home" onClose={onClose} />
              <GetLink url="/courses" title="All courses" onClose={onClose} />
              <GetLink
                url="/request"
                title="Request course"
                onClose={onClose}
              />
              <GetLink url="/about" title="About" onClose={onClose} />
              <GetLink url="/contact" title="Contact us" onClose={onClose} />

              <HStack
                justify-content={"space-evenly"}
                position={"absolute"}
                bottom={"2rem"}
                width={"80%"}
                spacing={"5"}
              >
                {isAuthenticated ? (
                  <>
                    <VStack>
                      <HStack>
                        <Link to="/profile" onClick={onClose}>
                          <Button variant={"ghost"} colorScheme="primary">
                            Profile
                          </Button>
                        </Link>
                        <Button
                          variant={"ghost"}
                          colorScheme="primary"
                          onClick={logoutHandler}
                        >
                          <RiLogoutBoxLine />
                          Logout
                        </Button>
                      </HStack>

                      {user && user.role === "admin" && (
                        <Link to="/admin/dashboard" onClick={onClose}>
                          <Button variant={"ghost"} colorScheme="primary">
                            <RiDashboardFill style={{ margin: "5px" }} />
                            Dashboard
                          </Button>
                        </Link>
                      )}
                    </VStack>
                  </>
                ) : (
                  <>
                    <Link to="/login" onClick={onClose}>
                      <Button colorScheme="primary">Login</Button>
                    </Link>
                    <Link to="/register" onClick={onClose}>
                      <Button colorScheme="primary">Signup</Button>
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
