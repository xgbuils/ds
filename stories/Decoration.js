import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, select } from "@storybook/addon-knobs";
import Content from "../.storybook/components/Content";
import DecorationDisk from "../components/Decoration/DecorationDisk";
import DecorationLine from "../components/Decoration/DecorationLine";
import Flex from "../components/Flex/Flex";
import Box from "../components/Flex/Box";

const alignments = ["top", "right", "bottom", "left"];
const circleTypes = ['disk', 'circle'];
const lineColors = ['yellow', 'gray'];
const borderStyles = ['solid', 'dashed', 'none']

storiesOf("DecorationLine & DecorationDisk", module)
  .addDecorator(withKnobs)
  .add("Merging 2 components", () => {
    const align = select("align", alignments, alignments[0]);
    const startColor = select("startColor", lineColors, lineColors[0]);
    const startStyle = select("startStyle", borderStyles, borderStyles[0]);
    const endColor = select("endColor", lineColors, lineColors[0]);
    const endStyle = select("endStyle", borderStyles, borderStyles[0]);
    const type = select("type", circleTypes, circleTypes[0]);
    return (
      <Flex
        justifyContent="center"
        alignItems="center"
        widht="100%"
        height="100vh"
      >
        <DecorationDisk 
          align={align}
          type={type}
        >
          <DecorationLine 
            align={align}
            startColor={startColor}
            startStyle={startStyle}
            endColor={endColor}
            endStyle={endStyle}
          >
            <Box width={5} height={4}>
              <Content />
            </Box>
          </DecorationLine>
        </DecorationDisk>
      </Flex>
    );
  })
  .add("Three horizontal stops", () => {
    const align = select("align", alignments, alignments[0]);
    const startColor = select("startColor", lineColors, lineColors[0]);
    const startStyle = select("startStyle", borderStyles, borderStyles[0]);
    const endColor = select("endColor", lineColors, lineColors[0]);
    const endStyle = select("endStyle", borderStyles, borderStyles[0]);
    const type = select("type", circleTypes, circleTypes[0]);
    return (
      <Flex
        justifyContent="center"
        alignItems="center"
        widht="100%"
        height="100vh"
      >
        <Box flexGrow={1}>
          <DecorationDisk 
            align={align}
            type={type}
          >
            <DecorationLine 
              align={align}
              startColor={startColor}
              startStyle={startStyle}
              endColor={endColor}
              endStyle={endStyle}
            >
              <Box width="100%">
              </Box>
            </DecorationLine>
          </DecorationDisk>
        </Box>
        <Box flexGrow={1}>
          <DecorationDisk 
            align={align}
            type={type}
          >
            <DecorationLine 
              align={align}
              startColor={startColor}
              startStyle={startStyle}
              endColor={endColor}
              endStyle={endStyle}
            >
              <Box width="100%">
              </Box>
            </DecorationLine>
          </DecorationDisk>
        </Box>
        <Box flexGrow={1}>
          <DecorationDisk 
            align={align}
            type={type}
          >
            <DecorationLine 
              align={align}
              startColor={startColor}
              startStyle={startStyle}
              endColor={endColor}
              endStyle={endStyle}
            >
              <Box width="100%">
              </Box>
            </DecorationLine>
          </DecorationDisk>
        </Box>
      </Flex>
    );
  });
