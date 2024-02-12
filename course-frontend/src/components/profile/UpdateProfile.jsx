import React, { useState } from "react";
import { Container, Heading, VStack, Input, Button } from "@chakra-ui/react";

const UpdateProfile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <Container py="16" minH="90vh">
      <form>
        <Heading
          children="Update Profile"
          my="10"
          textAlign={["center", "left"]}
        />
        <VStack spacing="5">
          <Input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Name"
            focusBorderColor="primary"
          />
          <Input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Email"
            focusBorderColor="primary"
          />
          <Button w="full" colorScheme="primary" type="submit">
            Update Profile
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default UpdateProfile;
