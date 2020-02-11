import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import TripLineLayout from "../components/Decoration/TripLineLayout";
import Flex from "../components/Flex/Flex";
import Box from "../components/Flex/Box";

const DepartureLocation = () => (
  <Box px={4} py={2}>
    <Box>El Prat , T1</Box>
    <Box>Barcelona (Spain)</Box>
  </Box>
);

const DepartureInfo = () => (
  <Box px={4} py={2}>
    <Box>Aeroflot SU2513</Box>
    <Box> 4h 30m 32B Economy</Box>
  </Box>
);

const ConnectionArrivalLocation = () => (
  <Box px={4} py={2}>
    <Box>Sheremetyevo , TD</Box>
    <Box>Moscow (Russia)</Box>
  </Box>
);

const ConnectionArrivalInfo = () => (
  <Box px={4} py={2}>
    <Box>Stop duration: 1h 55'</Box>
    <Box>Connection covered by Aeroflot</Box>
  </Box>
);

const ConnectionDepartureLocation = () => (
  <Box px={4} py={2}>
    <Box>Sheremetyevo , TD</Box>
    <Box>Moscow (Russia)</Box>
  </Box>
);

const ConnectionDepartureInfo = () => (
  <Box px={4} py={2}>
    <Box>Sheremetyevo , TD</Box>
    <Box>Moscow (Russia)</Box>
  </Box>
);

const ArrivalLocation = () => (
  <Box px={4} py={2}>
    <Box>Heathrow , T4</Box>
    <Box>London (United Kingdom)</Box>
  </Box>
);

storiesOf("TripLineLayout", module)
  .addDecorator(withKnobs)
  .add("TripLineLayout", () => {
    return (
      <Flex justifyContent="center" alignItems="center" width="100%">
        <Flex flexDirection="column">
          <TripLineLayout type="departure" locationType="absolute">
            <DepartureLocation />
            <DepartureInfo />
          </TripLineLayout>
          <TripLineLayout type="arrival" locationType="connection">
            <ConnectionArrivalLocation />
            <ConnectionArrivalInfo />
          </TripLineLayout>
          <TripLineLayout type="departure" locationType="connection">
            <ConnectionDepartureLocation />
            <ConnectionDepartureInfo />
          </TripLineLayout>
          <TripLineLayout type="arrival" locationType="absolute">
            <ArrivalLocation />
          </TripLineLayout>
        </Flex>
      </Flex>
    );
  });
