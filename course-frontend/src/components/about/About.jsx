import React from "react";
import {
  Avatar,
  Container,
  Heading,
  Stack,
  VStack,
  Text,
  Button,
  Box,
  HStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import video from "../../assets/videos/video.mp4";
import { RiSecurePaymentFill } from "react-icons/ri";
import termsAndCondition from "../../assets/docs/termsAndCondition";

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

const VideoPlayer = () => {
  return (
    <Box>
      <video
        muted
        autoPlay={false}
        src={video}
        controls
        controlsList="nodownload nofullscreen noremoteplayback"
        disablePictureInPicture
        disableRemotePlayback
      ></video>
    </Box>
  );
};

const TermAndCondition = ({ termsAndCondition }) => {
  return (
    <Box>
      <Heading size="md" textAlign={["center", "left"]} my="5">
        Terms & Condition
      </Heading>
      <Box h="sm" p="5" overflowY="scroll">
        <Text
          fontFamily="Raleway"
          letterSpacing="widest"
          textAlign={["center", "left"]}
        >
          {termsAndCondition}
        </Text>
        <Heading
          children="Refund only applicable for cancellation within 7 days."
          my="5"
          size="xs"
        />
      </Box>
    </Box>
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

        <Link to="/subscribe">
          <Button variant="ghost" colorScheme="primary">
            Checkout Plan
          </Button>
        </Link>
      </Stack>
      <VideoPlayer />

      <TermAndCondition termsAndCondition={termsAndCondition} />
      <HStack my="5" p="5">
        <RiSecurePaymentFill />
        <Heading
          children="Payment is secured by razorpay"
          fontSize="xs"
          fontFamily="Raleway"
          textTransform="uppercase"
        />
      </HStack>
    </Container>
  );
};

export default About;
