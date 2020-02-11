import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, select } from "@storybook/addon-knobs";
import Content from "../.storybook/components/Content";
import DecorationLine from "../components/Decoration/DecorationLine";
import Flex from "../components/Flex/Flex";
import Box from "../components/Flex/Box";

const alignments = ["top", "right", "bottom", "left"];
const lineColors = ["yellow", "gray"];
const borderStyles = ["solid", "dashed", "none"];

storiesOf("DecorationLine", module)
  .addDecorator(withKnobs)
  .add("DecorationLine", () => {
    const align = select("align", alignments, alignments[0]);
    const startColor = select("startColor", lineColors, lineColors[0]);
    const startStyle = select("startStyle", borderStyles, borderStyles[0]);
    const endColor = select("endColor", lineColors, lineColors[0]);
    const endStyle = select("endStyle", borderStyles, borderStyles[0]);
    return (
      <Flex
        justifyContent="center"
        alignItems="center"
        widht="100%"
        height="100vh"
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
      </Flex>
    );
  })
  .add("DecorationLine without box", () => {
    const align = select("align", alignments, alignments[0]);
    const startColor = select("startColor", lineColors, lineColors[0]);
    const startStyle = select("startStyle", borderStyles, borderStyles[0]);
    const endColor = select("endColor", lineColors, lineColors[0]);
    const endStyle = select("endStyle", borderStyles, borderStyles[0]);
    return (
      <Flex
        justifyContent="center"
        alignItems="center"
        widht="100%"
        height="100vh"
      >
        <DecorationLine
          align={align}
          startColor={startColor}
          startStyle={startStyle}
          endColor={endColor}
          endStyle={endStyle}
        >
          <Box width={5} />
        </DecorationLine>
      </Flex>
    );
  });
