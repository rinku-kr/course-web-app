import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Heading,
  VStack,
  Box,
  FormLabel,
  Input,
  Button,
  Textarea,
} from "@chakra-ui/react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <Container h="90vh">
      <VStack h="full" justifyContent="center" spacing="25">
        <Heading children="Contact Us" />
        <form style={{ width: "100%" }}>
          <Box margin={"5"}>
            <FormLabel htmlFor="text" children="Name" />
            <Input
              required
              id="text"
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Type your name"
              focusBorderColor="primary"
            />
          </Box>
          <Box margin={"5"}>
            <FormLabel htmlFor="email" children="Email" />
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
            <FormLabel htmlFor="message" children="Message" />
            <Textarea
              required
              id="message"
              value={message}
              onChange={e => setMessage(e.target.value)}
              placeholder="Type your message"
              focusBorderColor="primary"
            />
          </Box>
          <Button type="submit" colorScheme="primary" margin="5">
            Send Mail
          </Button>
          <Box margin="5">
            Request for a course?
            <Link to="/request">
              <Button colorScheme="primary" variant={"link"}>
                Click
              </Button>{" "}
              here
            </Link>
          </Box>
        </form>
      </VStack>
    </Container>
  );
};

export default Contact;
