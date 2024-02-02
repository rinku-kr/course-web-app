import { Container, Heading, VStack, Input, Button } from "@chakra-ui/react";
import React, { useState } from "react";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  return (
    <Container h="80vh">
      <form>
        <Heading
          children="Forget password"
          my="16"
          textAlign={["center", "left"]}
        />
        <VStack spacing="8">
          <Input
            required
            id="email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Type your email"
            focusBorderColor="green.500"
          />
          <Button type="submit" w="full" colorScheme="green">
            Reset Link
          </Button>
        </VStack>
      </form>
    </Container>
  );
};
export default ForgetPassword;
