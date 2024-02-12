import React from "react";
import {
  Box,
  Grid,
  HStack,
  Heading,
  Progress,
  Stack,
  Text,
} from "@chakra-ui/react";
// import yellowCursor from "../../../assets/images/yellowCursor.png";
import Sidebar from "../Sidebar";
import { RiArrowUpLine, RiArrowDownLine } from "react-icons/ri";
import { LineChart, DoughnutChart } from "./Chart.js";

const UserDataBox = ({ title, qty, qtyPercentage, profit }) => {
  return (
    <Box
      w={["full", "20%"]}
      p="6"
      borderRadius="lg"
      boxShadow="-2px 0 10px rgba(107, 255, 193, 0.5)"
    >
      <Text children={title} />
      <HStack spacing="6">
        <Text fontSize="2xl" fontWeight="bold" children={qty} />
        <HStack>
          <Text children={`${qtyPercentage}%`} />
          {profit ? (
            <RiArrowUpLine color="green" />
          ) : (
            <RiArrowDownLine color="red" />
          )}
        </HStack>
      </HStack>

      <Text
        opacity="0.6"
        textTransform="capitalize"
        children="Since last month"
      />
    </Box>
  );
};

const Bar = ({ title, value, profit }) => {
  return (
    <Box py="4" px={["0", "15"]}>
      <Heading children={title} size="sm" mb="2" />
      <HStack w="full" alignItems="center">
        <Text children={profit ? "0%" : `-${value}%`} />
        <Progress w="full" value={profit ? value : 0} colorScheme="green" />
        <Text children={`${value > 100 ? value : 100}%`} />
      </HStack>
    </Box>
  );
};

const Dashboard = () => {
  return (
    <Grid
      //   css={{ cursor: `url(${yellowCursor}), default` }}
      minH="100vh"
      templateColumns={["1fr", "5fr 1fr"]}
    >
      <Box boxSizing="border-box" py="14" px={["4", "0"]}>
        <Text
          children={`Last update was on ${String(new Date()).split("G")[0]}`}
          textAlign="center"
          opacity="0.5"
        />
        <Heading
          children="Dashboard"
          ml={["0", "16"]}
          mb="14"
          textAlign={["center", "left"]}
        />
        <Stack
          direction={["column", "row"]}
          minH="24"
          justifyContent="space-evenly"
        >
          <UserDataBox
            title="Views"
            qty={123}
            qtyPercentage={30}
            profit={true}
          />
          <UserDataBox
            title="Users"
            qty={12}
            qtyPercentage={78}
            profit={true}
          />
          <UserDataBox
            title="Subscription"
            qty={19}
            qtyPercentage={20}
            profit={false}
          />
        </Stack>

        <Box
          m={["0", "14"]}
          mt={["4", "14"]}
          p={["0", "14"]}
          borderRadius="lg"
          boxShadow="-2px 0 10px rgba(107, 255, 193, 0.5)"
        >
          <Heading
            children="Views Graph"
            textAlign={["center", "left"]}
            pt={["8", "0"]}
            ml={["0", "10 "]}
            size="md"
          />
          {/* Line Graph */}
          <LineChart />
        </Box>

        <Grid templateColumns={["1fr", "2fr 1fr"]}>
          <Box p="5">
            <Heading
              children="Progress Bar"
              size="md"
              textAlign={["center", "left"]}
              ml={["0", "14"]}
              my="6"
            />
            <Box>
              <Bar profit={true} title="Views" value={30} />
              <Bar profit={true} title="Users" value={78} />
              <Bar profit={false} title="Subscription" value={20} />
            </Box>
          </Box>
          <Box p={["0", "14"]} boxSizing="border-box" py="4">
            <Heading children="Users" textAlign="center" size="md" mb="4" />
            {/* Doughnut Graph */}
            <DoughnutChart />
          </Box>
        </Grid>
      </Box>
      <Sidebar />
    </Grid>
  );
};

export default Dashboard;
