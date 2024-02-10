import React from "react";
import { Container, VStack, Heading, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { RiErrorWarningFill } from "react-icons/ri";

const PaymentFail = () => {
  return (
    <Container h="90vh">
      <VStack justifyContent="center" h="full" spacing="4">
        <RiErrorWarningFill size="5rem" />
        <Heading children="Payment Fail" />
        <Link to="/subscribe">
          <Button>Try Again</Button>
        </Link>
      </VStack>
    </Container>
  );
};

export default PaymentFail;
