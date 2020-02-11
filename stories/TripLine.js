import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, select } from "@storybook/addon-knobs";
import Content from "../.storybook/components/Content";
import TripLine from "../components/Decoration/TripLine";
import Flex from "../components/Flex/Flex";
import Box from "../components/Flex/Box";

const types = ["departure", "arrival"];
const locationTypes = ["absolute", "connection"];
const alignments = ["top", "right", "bottom", "left"];

storiesOf("TripLine", module)
  .addDecorator(withKnobs)
  .add("TripLine", () => {
    const type = select("type", types, types[0]);
    const locationType = select(
      "locationType",
      locationTypes,
      locationTypes[0]
    );
    const align = select("align", alignments, alignments[0]);
    return (
      <Flex
        justifyContent="center"
        alignItems="center"
        widht="100%"
        height="100vh"
      >
        <TripLine type={type} locationType={locationType} align={align}>
          <Box width={5} height={4}>
            <Content />
          </Box>
        </TripLine>
      </Flex>
    );
  });
