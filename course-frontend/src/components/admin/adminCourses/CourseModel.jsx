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
} from "@chakra-ui/react";
import React from "react";
import { RiDeleteBin7Fill } from "react-icons/ri";

const CourseModel = ({
  isOpen,
  onClose,
  id,
  lectureDeleteHandler,
  addLectureHandler,
  courseTitle,
  lectures = []
}) => {
  return (
    <Modal isOpen={isOpen} size="full">
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
              <VideoCard
                title="Node js"
                description="Node js description"
                num={1}
                lectureId="DUMMY-LECTURE-ID"
                courseId={id}
                lectureDeleteHandler={lectureDeleteHandler}
              />
            </Box>
          </Grid>
        </ModalBody>
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
