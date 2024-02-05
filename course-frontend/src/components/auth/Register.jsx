import {
  Container,
  FormLabel,
  Heading,
  VStack,
  Input,
  Box,
  Button,
  Avatar,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export const fileUploadCss = {
  cursor: "pointer",
  marginLeft: "-5%",
  width: "110%",
  border: "none",
  height: "100%",
  backgroundColor: "white",
  color: "primary",
};
const fileUploadStyle = {
  "&::file-selector-button": fileUploadCss,
};

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [imagePre, setImagePre] = useState("");
  const [image, setImage] = useState("");

  const avatarHandler = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImagePre(reader.result);
      setImage(file);
    };
  };
  return (
    <Container>
      <VStack h="full" justifyContent="center" spacing="16">
        <Heading children="Registration" />
        <form style={{ width: "100%" }}>
          <Box display="flex" justifyContent="center">
            <Avatar src={imagePre} size="2xl" />
          </Box>
          <Box margin={"5"}>
            <FormLabel htmlFor="name" children="Name" />
            <Input
              required
              id="name"
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Type your name"
              focusBorderColor="primary"
            />
          </Box>
          <Box margin={"5"}>
            <FormLabel htmlFor="email" children="Email Address" />
            <Input
              required
              id="email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Type your email"
              focusBorderColor="primary"
            />
          </Box>
          <Box margin={"5"}>
            <FormLabel htmlFor="password" children="Password" />
            <Input
              required
              id="password"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Type your password"
              focusBorderColor="primary"
            />
          </Box>
          <Box margin={"5"}>
            <FormLabel htmlFor="avatar" children="Choose a Avatar" />
            <Input
              accept="image/*"
              required
              id="avatar"
              type="file"
              focusBorderColor="primary"
              css={fileUploadStyle}
              onChange={avatarHandler}
            />
          </Box>
          <Button type="submit" colorScheme="primary" margin="5">
            Sign Up
          </Button>
          <Box margin="5">
            Already signed up?
            <Link to="/login">
              <Button colorScheme="primary" variant={"link"}>
                Login
              </Button>
              here
            </Link>
          </Box>
        </form>
      </VStack>
    </Container>
  );
};

export default Register;
