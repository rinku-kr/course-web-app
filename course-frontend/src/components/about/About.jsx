import React from "react";
import {
  Avatar,
  Container,
  Heading,
  Stack,
  VStack,
  Text,
} from "@chakra-ui/react";

const Creator = () => {
  return (
    <Stack direction={["column", "row"]} spacing={["4", "16"]} padding="10">
      <VStack>
        <Avatar
          src="https://png.pngtree.com/png-clipart/20200224/original/pngtree-cartoon-color-simple-male-avatar-png-image_5230557.jpg"
          boxSize={["40", "50"]}
        />
        <Text children="Co-founder" opacity="0.7" />
      </VStack>
      <VStack justifyContent="center" alignItems={["center", "flex-start"]}>
        <Heading children="Rinku-Kr" size={["md", "xl"]} />
        <Text
          textAlign={["center", "left"]}
          children="HI, I'm a Full-stack developer..."
        />
      </VStack>
    </Stack>
  );
};

const About = () => {
  return (
    <Container maxW="container.sm" padding="16" boxShadow="lg">
      <Heading children="About Us" textAlign={["center", "left"]} />
      <Creator />
      <Stack m="8" direction={["column", "row"]} alignItems="center">
        <Text textAlign={["center", "left"]} m="8" fontFamily="Oswald">
          We are a video streaming platform offering premium courses exclusively
          for premium users!
        </Text>
      </Stack>
    </Container>
  );
};

export default About;
