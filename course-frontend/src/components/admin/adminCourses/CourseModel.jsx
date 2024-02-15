import {
  Grid,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Box,
  Heading,
  Stack,
  Text,
  Button,
  VStack,
  Input,
  ModalFooter,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { RiDeleteBin7Fill } from "react-icons/ri";
import { fileUploadCss } from "../../auth/Register";

const CourseModel = ({
  isOpen,
  onClose,
  id,
  lectureDeleteHandler,
  addLectureHandler,
  courseTitle,
  lectures = [1, 2, 3, 4, 5, 6, 7, 8, 9],
}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [video, setVideo] = useState("");
  const [videoPre, setVideoPre] = useState("");

  const changeVideoHanlder = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setVideoPre(reader.result);
      setVideo(file);
    };
  };

  const closeDataHandler = () => {
    setTitle("");
    setDescription("");
    setVideo("");
    setVideoPre("");
    onClose();
  };
  return (
    <Modal
      isOpen={isOpen}
      size="full"
      onClose={closeDataHandler}
      scrollBehavior="outside"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{courseTitle} </ModalHeader>
        <ModalCloseButton />
        <ModalBody p="14">
          <Grid templateColumns={["1fr", "3fr 1fr"]}>
            <Box px={["0", "14"]}>
              <Box my="4">
                <Heading children={courseTitle} />
                <Heading children={`#${id}`} size="sm" opacity={0.4} />
              </Box>

              <Heading children="Lectures" size="lg" />
              {lectures.map((item, index) => (
                <VideoCard
                  key={index}
                  title="Node js"
                  description="Node js description"
                  num={index + 1}
                  lectureId="DUMMY-LECTURE-ID"
                  courseId={id}
                  lectureDeleteHandler={lectureDeleteHandler}
                />
              ))}
            </Box>

            <Box>
              <form
                onSubmit={e =>
                  addLectureHandler(e, id, title, description, video)
                }
              >
                <VStack spacing="4">
                  <Heading children="Add Lecture" size="md" />
                  <Input
                    focusBorderColor="green"
                    placeholder="Title"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                  />
                  <Input
                    focusBorderColor="green"
                    placeholder="Description"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                  />

                  <Input
                    accept="video/mp4"
                    id="avatar"
                    type="file"
                    focusBorderColor="primary"
                    css={{
                      "&::file-selector-button": {
                        ...fileUploadCss,
                        color: "green",
                      },
                    }}
                    onChange={changeVideoHanlder}
                  />
                  {videoPre && (
                    <video
                      controls
                      controlsList="nodownload"
                      src={videoPre}
                    ></video>
                  )}
                  <Button type="submit" w="full" colorScheme="green">
                    Upload
                  </Button>
                </VStack>
              </form>
            </Box>
          </Grid>
        </ModalBody>
        <ModalFooter>
          <Button onClick={closeDataHandler}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CourseModel;

function VideoCard({
  title,
  description,
  num,
  lectureId,
  courseId,
  lectureDeleteHandler,
}) {
  return (
    <Stack
      direction={["column", "row"]}
      my="6"
      borderRadius="lg"
      boxShadow={"0 0 10px rgba(107, 255, 193, 0.5)"}
      justifyContent={["flex-start", "space-between"]}
      p={["4", "6"]}
    >
      <Box>
        <Heading size="sm" children={`#${num} ${title}`} />
        <Text children={description} />
      </Box>
      <Button
        color="green"
        onClick={() => lectureDeleteHandler(courseId, lectureId)}
      >
        <RiDeleteBin7Fill />
      </Button>
    </Stack>
  );
}
