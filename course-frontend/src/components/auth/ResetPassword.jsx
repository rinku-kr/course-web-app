import { Container, Heading, VStack, Input, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

const ResetPassword = () => {
  const [password, setPassword] = useState("");

  const params = useParams();
  return (
    <Container h="80vh">
      <form>
        <Heading
          children="Reset Password"
          my="16"
          textAlign={["center", "left"]}
        />
        <VStack spacing="8">
          <Input
            required
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Type your new password"
            focusBorderColor="green.500"
          />
          <Button type="submit" w="full" colorScheme="green">
            Reset Password
          </Button>
        </VStack>
      </form>
    </Container>
  );
};
export default ResetPassword;
