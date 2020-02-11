import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, select } from "@storybook/addon-knobs";
import Content from "../.storybook/components/Content";
import DecorationDisk from "../components/Decoration/DecorationDisk";
import Flex from "../components/Flex/Flex";
import Box from "../components/Flex/Box";

const alignments = ["top", "right", "bottom", "left"];
const circleTypes = ["disk", "circle"];

storiesOf("DecorationDisk", module)
  .addDecorator(withKnobs)
  .add("DecorationDisk", () => {
    const align = select("align", alignments, alignments[0]);
    const type = select("type", circleTypes, circleTypes[0]);
    return (
      <Flex
        justifyContent="center"
        alignItems="center"
        widht="100%"
        height="100vh"
      >
        <DecorationDisk align={align} type={type}>
          <Box width={5} height={4}>
            <Content />
          </Box>
        </DecorationDisk>
      </Flex>
    );
  })
  .add("DecorationDisk without height", () => {
    const align = select("align", alignments, alignments[0]);
    const type = select("type", circleTypes, circleTypes[0]);
    return (
      <Flex
        justifyContent="center"
        alignItems="center"
        widht="100%"
        height="100vh"
      >
        <DecorationDisk align={align} type={type} />
      </Flex>
    );
  });
