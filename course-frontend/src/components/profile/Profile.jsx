import {
  Avatar,
  Button,
  Container,
  HStack,
  Heading,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { fileUploadCss } from "../auth/Register";

const Profile = () => {
  const user = {
    name: "text",
    email: "text@gmail.com",
    createdAt: String(new Date().toISOString()),
    role: "user",
    subscription: {
      status: "active",
    },
    playlist: [
      {
        course: "DUMMY-COURSE",
        poster:
          "https://thumbs.dreamstime.com/b/vector-illustration-avatar-dummy-logo-collection-image-icon-stock-isolated-object-set-symbol-web-137160339.jpg",
      },
    ],
  };

  // Remove playlist!
  const removeFromPlaylistHandler = id => {};
  const changeAvatarSubmitHandler = (e, image) => {
    // e.preventDefault();
  };

  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Container minH="90vh" maxW="container.md" py="8">
      <Heading children="Profile" m="6" />
      <Stack
        justifyContent="flex-start"
        direction={["column", "row"]}
        alignItems={"center"}
        spacing={["8", "16"]}
        padding={"8"}
      >
        <VStack>
          <Avatar boxSize="40" />
          <Button colorScheme="primary" variant="ghost" onClick={onOpen}>
            Change Avatar
          </Button>
        </VStack>
        <VStack spacing="4" alignItems={["center", "flex-start"]}>
          <HStack>
            <Text children="Name" fontWeight="bold" />
            <Text children={user.name} />
          </HStack>
          <HStack>
            <Text children="Email" fontWeight="bold" />
            <Text children={user.email} />
          </HStack>
          <HStack>
            <Text children="CreatedAt" fontWeight="bold" />
            <Text children={user.createdAt.split("T")[0]} />
          </HStack>

          {user.role !== "admin" && (
            <HStack>
              <Text children="Subscription" fontWeight="bold" />
              {user.subscription.status === "active" ? (
                <Button color="red.500" variant="unstyled">
                  Cancel Subscription
                </Button>
              ) : (
                <Link to="/subscribe">
                  <Button colorScheme="primary">Subscribe</Button>
                </Link>
              )}
            </HStack>
          )}
          <Stack direction={["column", "row"]} alignItems="center">
            <Link to="/updateprofile">
              <Button>Update Profile</Button>
            </Link>
            <Link to="/changepassword">
              <Button>Change Password</Button>
            </Link>
          </Stack>
        </VStack>
      </Stack>
      <Heading children="Playlist" my="6" size="lg" />
      {user.playlist.length > 0 && (
        <Stack
          direction={["column", "row"]}
          alignItems="center"
          flexWrap="wrap"
          p="3"
        >
          {user.playlist.map((element, index) => (
            <VStack key={element.course} m="2" w="50">
              <Image boxSize="30%" objectFit="contain" src={element.poster} />
              <HStack>
                <Link to={`/course/${element.course}`}>
                  <Button variant="ghost" colorScheme="primary">
                    Watch Now
                  </Button>
                </Link>
                <Button
                  onClick={() => removeFromPlaylistHandler(element.course)}
                >
                  <RiDeleteBin6Fill />
                </Button>
              </HStack>
            </VStack>
          ))}
        </Stack>
      )}
      <ChangeAvatar
        isOpen={isOpen}
        onClose={onClose}
        changeAvatarSubmitHandler={changeAvatarSubmitHandler}
      />
    </Container>
  );
};

export default Profile;

function ChangeAvatar({ isOpen, onClose, changeAvatarSubmitHandler }) {
  const [image, setImage] = useState("");
  const [imagePre, setImagePre] = useState("");

  const changeAvatarHandler = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImagePre(reader.result);
      setImage(file);
    };
  };

  const closeHandler = () => {
    onClose();
    setImage("");
    setImagePre("");
  };
  return (
    <Modal isOpen={isOpen} onClose={closeHandler}>
      <ModalOverlay backdropFilter="blur(10px)" />
      <ModalContent>
        <ModalHeader>Change Avatar</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Container>
            <form onSubmit={e => changeAvatarSubmitHandler(e, image)}>
              <VStack spacing="6">
                {imagePre && <Avatar src={imagePre} boxSize="50" />}
                <Input
                  type="file"
                  css={{ "&::file-selector-button": fileUploadCss }}
                  onChange={changeAvatarHandler}
                />
                <Button w="full" colorScheme="primary" type="submit">
                  Change Avatar
                </Button>
              </VStack>
            </form>
          </Container>
        </ModalBody>

        <ModalFooter>
          <Button mr="3" onClick={closeHandler}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
