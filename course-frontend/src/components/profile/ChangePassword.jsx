import React, { useState } from "react";
import { Container, Heading, VStack, Input, Button } from "@chakra-ui/react";

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  return (
    <Container py="16" minH="90vh">
      <form>
        <Heading
          children="Change Password"
          my="10"
          textAlign={["center", "left"]}
        />
        <VStack spacing="5">
          <Input
            required
            type="password"
            value={oldPassword}
            onChange={e => setOldPassword(e.target.value)}
            placeholder="Type your old password"
            focusBorderColor="primary"
          />
          <Input
            required
            type="password"
            value={newPassword}
            onChange={e => setNewPassword(e.target.value)}
            placeholder="Type your new password"
            focusBorderColor="primary"
          />
          <Button w="full" colorScheme="primary" type="submit">
            Change Password
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default ChangePassword;
