import React from "react";
import { Box, Grid } from "@chakra-ui/react";
// import yellowCursor from "../../../assets/images/yellowCursor.png";
import Sidebar from "../Sidebar"; 

const Dashboard = () => {
  return (
    <Grid
    //   css={{ cursor: `url(${yellowCursor}), default` }}
      minH="100vh"
      templateColumns={["1fr", "5fr 1fr"]}
    >
      <Box></Box>
      <Sidebar />
    </Grid>
  );
};

export default Dashboard;
