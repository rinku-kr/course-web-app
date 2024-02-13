import React, { useState } from "react";
import {
  Grid,
  Input,
  Container,
  Heading,
  VStack,
  Select,
  Image,
  Button,
} from "@chakra-ui/react";
import Sidebar from "../Sidebar";
// import yellowCursor from "../../../assets/images/yellowCursor";
import { fileUploadCss } from "../../auth/Register";

const CreateCourse = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [createdBy, setCreatedBy] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [imagePre, setImagePre] = useState("");

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

  const avatarHandler = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImagePre(reader.result);
      setImage(file);
    };
  };

  return (
    <Grid
      // css={{ cursor: `url(${yellowCursor}), default` }}
      minH="100vh"
      templateColumns={["1fr", "5fr 1fr"]}
    >
      <Container py="14">
        <form>
          <Heading
            children="Create course"
            textAlign={["center", "left"]}
            textTransform="capitalize"
            my="14"
          />
          <VStack m="auto" spacing="6">
            <Input
              type="text"
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder="Title"
              focusBorderColor="green.300"
            />
            <Input
              type="text"
              value={description}
              onChange={e => setDescription(e.target.value)}
              placeholder="Description"
              focusBorderColor="green.300"
            />
            <Input
              type="text"
              value={createdBy}
              onChange={e => setCreatedBy(e.target.value)}
              placeholder="Creator Name"
              focusBorderColor="green.300"
            />
            <Select
              focusBorderColor="green.300"
              value={category}
              onChange={e => setCategory(e.target.value)}
            >
              <option value="">select category</option>
              {categories.map(item => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </Select>
            <Input
              accept="image/*"
              id="avatar"
              type="file"
              focusBorderColor="primary"
              css={{
                "&::file-selector-button": {
                  ...fileUploadCss,
                  color: "green",
                },
              }}
              onChange={avatarHandler}
            />

            {imagePre && (
              <Image src={imagePre} boxSize="50" objectFit="contain" />
            )}
            <Button type="submit" w="full" colorScheme="green">
              Create
            </Button>
          </VStack>
        </form>
      </Container>
      <Sidebar />
    </Grid>
  );
};

export default CreateCourse;
