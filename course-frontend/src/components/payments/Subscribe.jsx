import React from "react";
import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";

const Subscribe = () => {
  return (
    <Container h="90vh" p="16">
      <Heading children="Welcome" my="8" textAlign="center" />
      <VStack boxShadow="lg" alignItems="stretch" borderRadius="lg" spacing="0">
        <Box
          background="yellow.500"
          p="5"
          css={{ borderRadius: "8px 8px 0 0" }}
        >
          <Text children={`Price - ₹ 999.00`} color="black" />
        </Box>
        <Box p="5">
          <VStack textAlign="center" px="8" mt="3" spacing="10">
            <Text
              children={`Join pack and get access of all courses!`}
              color="black"
            />
            <Heading size="md" children="₹ 999.00 Only" />
          </VStack>

          <Button colorScheme="secondary" w="full" my="8">
            Buy Now
          </Button>
        </Box>

        <Box bg="blackAlpha.600" p="5" css={{ borderRadius: "0 0 8px 8px" }}>
          <Heading
            children="100%  refund at cancellation"
            color="white"
            textTransform="uppercase"
            size="sm"
            textAlign="center"
          />
          <Text
            children="*Terms & Conditions Appy"
            color="white"
            fontSize="xs"
            textAlign="center"
          />
        </Box>
      </VStack>
    </Container>
  );
};

export default Subscribe;
