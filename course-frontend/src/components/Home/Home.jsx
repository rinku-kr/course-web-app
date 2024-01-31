import React from 'react';
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
} from '@chakra-ui/react';
import './home.css';
import logo from '../../assets/images/logo.png';
import { CgGoogle, CgYoutube } from 'react-icons/cg';
import { SiCoursera, SiUdemy } from 'react-icons/si';
import { DiAws } from 'react-icons/di';
import video from '../../assets/videos/video.mp4';

const Home = () => {
  return (
    <section className="home">
      <div className="container">
        <Stack
          direction={['column', 'row']}
          justifyContent={['center', 'space-between']}
          alignItems="center"
          height="100%"
          spacing={['16', '39']}
        >
          <VStack width={'full'} alignItems={['center', 'flex-end']}>
            <Heading children="LEARNING THAT GETS YOU" size={'2xl'} />
            <Text children="Lorem ipsum dolor sit amet, consectetur adipiscing" />
            <Link to="/courses">
              <Button size={'lg'} colorScheme="green">
                Get Started
              </Button>
            </Link>
          </VStack>
          <Image
            className="vector-logo"
            boxSize={'md'}
            src={logo}
            objectFit={'contain'}
          />
        </Stack>
      </div>
      <Box padding={'6'} bg={'blackAlpha.900'}>
        <Heading
          children="OUR BRANDS"
          textAlign={'center'}
          fontFamily="body"
          color={'#38A169'}
        />
        <HStack
          className="brands-icons"
          justifyContent={'space-evenly'}
          marginTop={'10'}
        >
          <CgGoogle />
          <CgYoutube />
          <SiCoursera />
          <SiUdemy />
          <DiAws />
        </HStack>
      </Box>
      <div className="container-video">
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
