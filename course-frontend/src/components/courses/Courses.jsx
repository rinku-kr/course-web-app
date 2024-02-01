import {
  Button,
  Container,
  HStack,
  Heading,
  Image,
  Input,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React, { useState } from "react";

const Course = ({
  title,
  id,
  imageSrc,
  views,
  addToPlaylistHandler,
  creator,
  description,
  lectureCount,
}) => {
  return (
    <VStack className="course" alignItems={["center", "flext-start"]}>
      <Image src={imageSrc} boxSize="60" objectFit="contain" />
      <Heading
        children={title}
        textAlign={["center", "left"]}
        maxW="200px"
        noOfLines="3"
        size="sm"
      />
      <Text children={description} noOfLines="2" />
      <HStack>
        <Text children="Creator" fontWeight="bold" textTransform="uppercase" />
        <Text children={creator} fontFamily="body" textTransform="uppercase" />
      </HStack>
      <Heading
        children={`Lectures - ${lectureCount}`}
        size="xs"
        textAlign="center"
        textTransform="uppercase"
      />
      <Heading
        children={`Views - ${views}`}
        size="xs"
        textTransform="uppercase"
      />
      <Stack direction={["column", "row"]} alignItems="center">
        <Link to={`/course/${id}`}>
          <Button colorScheme="green">Watch Now</Button>
        </Link>
        <Button
          variant="ghost"
          colorScheme="green"
          onClick={() => addToPlaylistHandler(id)}
        >
          Add to playlist
        </Button>
      </Stack>
    </VStack>
  );
};

const Courses = () => {
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("");

  const addToPlaylistHandler = () => {};

  const categories = [
    "Frontend Developer",
    "Backend Developer",
    "Backend Developer",
    "MERN Developer",
    "MEAN Developer",
    "MEVN Developer",
    "Android Developer",
    "Blockchain Developer",
  ];
  return (
    <Container minH="95vh" maxW="container.lg" paddingY="8">
      <Heading children="All courses" m="8" />
      <Input
        type="text"
        value={keyword}
        onChange={e => setKeyword(e.target.value)}
        placeholder="What do you want to learn?"
        focusBorderColor="green.500"
      />
      <HStack overflowX="auto" paddingY="8">
        {categories.map((item, index) => (
          <Button minW="60" onClick={() => setCategory(item)} key={index}>
            <Text children={item} />
          </Button>
        ))}
      </HStack>

      <Stack
        direction={["column", "row"]}
        flex="wrap"
        justifyContent={["center", "space-evenly"]}
        alignItems={["center", "flex-start"]}
      >
        <Course
          title={"course"}
          id={"course"}
          imageSrc={"course"}
          views={"course"}
          creator={"course"}
          description={"course"}
          lectureCount={"course"}
          addToPlaylistHandler={addToPlaylistHandler}
        />
      </Stack>
    </Container>
  );
};

export default Courses;
