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
} from "@chakra-ui/react";
import Sidebar from "../Sidebar";
// import yellowCursor from "../../../assets/images/yellowCursor";
import { RiDeleteBin7Fill } from "react-icons/ri";

const Users = () => {
  const users = [
    {
      _id: "DUMMY-ID",
      name: "rinku-kr",
      email: "rinku@gmail.com",
      role: "admin",
      subscription: {
        status: "active",
      },
    },
  ];

  const updateHandler = userId => {};
  const userDeleteHandler = userId => {};
  return (
    <Grid
      // css={{ cursor: `url(${yellowCursor}), default` }}
      minH="100vh"
      templateColumns={["1fr", "5fr 1fr"]}
    >
      <Box p={["0", "14"]} overflowX="auto">
        <Heading
          children="All Users"
          textAlign={["center", "left"]}
          textTransform="capitalize"
          my="14"
        />

        <TableContainer w={["100w", "full"]}>
          <Table variant="simple" size="lg">
            <TableCaption>All available users in the database</TableCaption>
            <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>Name</Th>
                <Th>Email</Th>
                <Th>Role</Th>
                <Th>Subscription</Th>
                <Th isNumeric>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {users.map(user => (
                <UserRow
                  key={user._id}
                  user={user}
                  updateHandler={updateHandler}
                  userDeleteHandler={userDeleteHandler}
                />
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
      <Sidebar />
    </Grid>
  );
};

export default Users;

function UserRow({ user, updateHandler, userDeleteHandler }) {
  return (
    <Tr>
      <Td>{user._id} </Td>
      <Td>{user.name} </Td>
      <Td>{user.email} </Td>
      <Td>{user.role} </Td>
      <Td>
        {user.subscription.status === "active" ? "Active" : "Not active"}{" "}
      </Td>
      <Td isNumeric>
        <HStack justifyContent="flex-end">
          <Button
            variant="outline"
            color="green"
            onClick={() => updateHandler(user._id)}
          >
            Change Role
          </Button>
          <Button color="green" onClick={() => userDeleteHandler(user._id)}>
            <RiDeleteBin7Fill />
          </Button>
        </HStack>
      </Td>
    </Tr>
  );
}
