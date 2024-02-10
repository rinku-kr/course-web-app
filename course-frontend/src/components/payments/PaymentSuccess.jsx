import React from "react";
import {
  Text,
  Box,
  Container,
  Heading,
  VStack,
  Button,
} from "@chakra-ui/react";
import { RiCheckboxCircleFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const PaymentSuccess = () => {
  return (
    <Container h="90vh">
      <Heading children="You Have Elite Pack" textAlign="center" my="5" />
      <VStack boxShadow="lg" pb="14" alignItems="center" borderRadius="lg">
        <Box
          w="full"
          bg="yellow.500"
          p="4"
          css={{ borderRadius: "8px 8px 0 0" }}
        >
          <Text>Payment success</Text>
        </Box>
        <Box p="4">
          <VStack textAlign="center" px="8" mt="4" spacing="8">
            <Text>
              Congratulation you have a elite member. You have access to premium
              courses.
            </Text>
            <Heading size="4xl">
              <RiCheckboxCircleFill />
            </Heading>
          </VStack>
        </Box>
        <Link to="/profile">
          <Button>Go to profile</Button>
        </Link>
        <Text size="xs" children="Reference: dfhaidfjejf" fontWeight="bold" />
      </VStack>
    </Container>
  );
};

export default PaymentSuccess;
