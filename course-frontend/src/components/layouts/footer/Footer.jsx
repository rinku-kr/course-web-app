import React from "react";
import { Box, HStack, Heading, Stack, VStack } from "@chakra-ui/react";
import {
  TiSocialYoutubeCircular,
  TiSocialInstagramCircular,
} from "react-icons/ti";
import { DiGithub } from "react-icons/di";

const Footer = () => {
  return (
    <Box padding="4" bg="blackAlpha.900" minH="10vh">
      <Stack direction={["column", "row"]}>
        <VStack alignItems={["center", "flex-start"]} width="full">
          <Heading children="All Rights Reserved" color="white" size="lg" />
          <Heading children="course@gmail.com" color="primary" size="sm" />
        </VStack>
        <HStack
          spacing={["2", "10"]}
          justifyContent="center"
          color="white"
          fontSize="60"
        >
          <a href="https://youtube.com" target="blank">
            <TiSocialYoutubeCircular />
          </a>
          <a href="https://instagram.com" target="blank">
            <TiSocialInstagramCircular />
          </a>
          <a href="https://github.com" target="blank">
            <DiGithub />
          </a>
        </HStack>
      </Stack>
    </Box>
  );
};

export default Footer;
