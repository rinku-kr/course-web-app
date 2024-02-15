import React from "react";
import {
  Grid,
  Box,
  Heading,
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  HStack,
  Button,
  Image,
  useDisclosure,
} from "@chakra-ui/react";
import Sidebar from "../Sidebar";
// import yellowCursor from "../../../assets/images/yellowCursor";
import { RiDeleteBin7Fill } from "react-icons/ri";
import CourseModel from "./CourseModel";

const AdminCourses = () => {
  const courses = [
    {
      _id: "abc",
      title: "Mern stack",
      category: "Web developer",
      poster: {
        url: "https://images.pexels.com/photos/919278/pexels-photo-919278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      createdBy: "rinku-kr",
      views: 99,
      numOfVideos: 10,
    },
  ];

  const { isOpen, onClose, onOpen } = useDisclosure();
  const courseDetailsHandler = userId => {
    onOpen();
  };
  const courseDeleteHandler = userId => {};

  const lectureDeleteHandler = (courseId, lectureId) => {};
  const addLectureHandler = (e, courseId, title, description, video) => {
    e.preventDefault();
  };

  return (
    <Grid
      // css={{ cursor: `url(${yellowCursor}), default` }}
      minH="100vh"
      templateColumns={["1fr", "5fr 1fr"]}
    >
      <Box p={["0", "14"]} overflowX="auto">
        <Heading
          children="Admin Courses"
          textAlign={["center", "left"]}
          textTransform="capitalize"
          my="14"
        />

        <TableContainer w={["100w", "full"]}>
          <Table variant="simple" size="lg">
            <TableCaption>All available Courses in the database</TableCaption>
            <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>Poster</Th>
                <Th>Title</Th>
                <Th>Category</Th>
                <Th>Creator</Th>
                <Th isNumeric>Views</Th>
                <Th isNumeric>Lectures</Th>
                <Th isNumeric>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {courses.map(course => (
                <UserRow
                  key={course._id}
                  course={course}
                  courseDetailsHandler={courseDetailsHandler}
                  courseDeleteHandler={courseDeleteHandler}
                />
              ))}
            </Tbody>
          </Table>
        </TableContainer>
        <CourseModel
          isOpen={isOpen}
          onClose={onClose}
          id={"dfadsdfd"}
          courseTitle="Node Js"
          lectureDeleteHandler={lectureDeleteHandler}
          addLectureHandler={addLectureHandler}
        />
      </Box>
      
      <Sidebar />
    </Grid>
  );
};

export default AdminCourses;

function UserRow({ course, courseDetailsHandler, courseDeleteHandler }) {
  return (
    <Tr>
      <Td>{course._id} </Td>
      <Td>
        <Image src={course.poster.url} />
      </Td>
      <Td>{course.title} </Td>
      <Td textTransform="uppercase">{course.category} </Td>
      <Td>{course.createdBy} </Td>
      <Td isNumeric>{course.views} </Td>
      <Td isNumeric>{course.numOfVideos} </Td>
      <Td isNumeric>
        <HStack justifyContent="flex-end">
          <Button
            variant="outline"
            color="green"
            onClick={() => courseDetailsHandler(course._id)}
          >
            View Lectures
          </Button>
          <Button color="green" onClick={() => courseDeleteHandler(course._id)}>
            <RiDeleteBin7Fill />
          </Button>
        </HStack>
      </Td>
    </Tr>
  );
}
