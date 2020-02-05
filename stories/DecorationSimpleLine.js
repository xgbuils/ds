import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, select } from "@storybook/addon-knobs";
import Content from "../.storybook/components/Content";
import DecorationSimpleLine from "../components/Decoration/DecorationSimpleLine";
import Flex from "../components/Flex/Flex";
import Box from "../components/Flex/Box";

const colors = ['gray', 'yellow'];
const borderStyles = ['solid', 'dashed'];
const alignments = ["top", "right", "bottom", "left"];

storiesOf("DecorationSimpleLine", module)
  .addDecorator(withKnobs)
  .add("DecorationSimpleLine", () => {
    const color = select("color", colors, colors[0]);
    const borderStyle = select("borderStyle", borderStyles, borderStyles[0]);
    const align = select("align", alignments, alignments[0]);
    return (
      <Flex
        justifyContent="center"
        alignItems="center"
        widht="100%"
        height="100vh"
      >
        <DecorationSimpleLine 
          color={color}
          borderStyle={borderStyle}
          align={align}
        >
          <Box width={5} height={4}>
            <Content />
          </Box>
        </DecorationSimpleLine>
      </Flex>
    );
  });
