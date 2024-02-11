import React, { useState } from "react";
import { Box, Grid, Heading, Text, VStack } from "@chakra-ui/react";
import video from "../../assets/videos/video.mp4";

const CourseDetail = () => {
  const [lectureNumber, setLectureNumber] = useState(0);

  const lectures = [
    {
      _id: "DUMMY-ID",
      title: "DUMMY-VALUE",
      description: "DUMMY-DESCRIPTION",
      video: {
        url: "DUMMY-URL",
      },
    },
    {
      _id: "DUMMY-ID",
      title: "DUMMY-VALUE",
      description: "DUMMY-DESCRIPTION",
      video: {
        url: "DUMMY-URL",
      },
    },
    {
      _id: "DUMMY-ID",
      title: "DUMMY-VALUE",
      description: "DUMMY-DESCRIPTION",
      video: {
        url: "DUMMY-URL",
      },
    },
  ];
  return (
    <Grid minH="90vh" templateColumns={["1fr", "3fr 1fr"]}>
      <Box>
        <video
          width="100%"
          autoPlay={false}
          src={video}
          controls
          controlsList="nodownload noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
        ></video>
        <Heading
          children={`#${lectureNumber + 1} ${lectures[lectureNumber].title}`}
          m="4"
        />
        <Heading children="Description" m="4" />
        <Text m="4" children={lectures[lectureNumber].description} />
      </Box>
      <VStack>
        {lectures.map((lecture, index) => (
          <button
            onClick={() => {
              setLectureNumber(index);
            }}
            key={lecture._id}
            style={{
              width: "100%",
              padding: "0.5rem",
              textAlign: "center",
              margin: 0,
              borderBottom: "1px solid rgba(0, 0, 0, 0.2)",
            }}
          >
            <Text noOfLines="1">
              #{index + 1} {lecture.title}
            </Text>
          </button>
        ))}
      </VStack>
    </Grid>
  );
};

export default CourseDetail;
