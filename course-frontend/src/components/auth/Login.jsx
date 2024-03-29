import {
  Container,
  FormLabel,
  Heading,
  VStack,
  Input,
  Box,
  Button,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Container h="95vh">
      <VStack h="full" justifyContent="center" spacing="16">
        <Heading children="Welcome to course" />
        <form style={{ width: "100%" }}>
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
          <Box margin={'5'}>
            <Link to="/forgetpassword">
              <Button fontSize={"sm"} variant={"link"}>
                Forget Password
              </Button>
            </Link>
          </Box>
          <Button type="submit" colorScheme="primary" margin="5">
            Login
          </Button>
          <Box margin="5">
            New User?
            <Link to="/register">
              <Button colorScheme="primary" variant={"link"}>
                Sign Up
              </Button> here
            </Link>
          </Box>
        </form>
      </VStack>
    </Container>
  );
};

export default Login;
