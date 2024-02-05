import React from "react";
import {
  Heading,
  Stack,
  VStack,
  Text,
  Link,
  Button,
  Image,
  Box,
  HStack,
} from "@chakra-ui/react";
import "./Home.css";
import logo from "../../assets/images/logo.png";
import { CgGoogle, CgYoutube } from "react-icons/cg";
import { SiCoursera, SiUdemy } from "react-icons/si";
import { DiAws } from "react-icons/di";
import video from "../../assets/videos/video.mp4";

const Home = () => {
  return (
    <section className="section section--home">
      <div className="section__container">
        <Stack
          direction={["column", "row"]}
          justifyContent={["center", "space-between"]}
          alignItems="center"
          height="100%"
          spacing={["20", "39"]}
        >
          <VStack
            width={"full"}
            alignItems={["center", "flex-end"]}
            spacing="4"
          >
            <Heading children="LEARNING THAT GETS YOU" size={"2xl"} />
            <Text
              children="Lorem ipsum dolor sit amet, consectetur adipiscing"
              fontSize="xl"
              textAlign={["center", "left"]}
            />
            <Link to="/courses">
              <Button size={"lg"} colorScheme="primary">
                Get Started
              </Button>
            </Link>
          </VStack>
          <Image
            className="section__container__image-logo"
            boxSize="lg"
            src={logo}
            objectFit={"contain"}
          />
        </Stack>
      </div>
      <Box padding={"6"} bg={"blackAlpha.900"}>
        <Heading
          children="OUR BRANDS"
          textAlign={"center"}
          fontFamily="body"
          color={"primary"}
        />
        <HStack
          className="section__brands-icons"
          justifyContent={"space-evenly"}
          marginTop={"10"}
        >
          <CgGoogle />
          <CgYoutube />
          <SiCoursera />
          <SiUdemy />
          <DiAws />
        </HStack>
      </Box>
      <div className="section__container-video">
        <video
          autoPlay={false}
          src={video}
          controls
          controlsList="nodownload nofullscreen noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
        ></video>
      </div>
    </section>
  );
};

export default Home;
