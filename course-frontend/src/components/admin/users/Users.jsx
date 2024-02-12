import React from "react";
import { Grid, Box } from "@chakra-ui/react";
import Sidebar from "../Sidebar";
// import yellowCursor from "../../../assets/images/yellowCursor";

const Users = () => {
  return (
    <Grid
      // css={{ cursor: `url(${yellowCursor}), default` }}
      minH="100vh"
      templateColumns={["1fr", "5fr 1fr"]}
    >
      <Box></Box>
      <Sidebar />
    </Grid>
  );
};

export default Users;
