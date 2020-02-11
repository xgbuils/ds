import React, { Children } from "react";
import TripLine from "./TripLine";
import DecorationSimpleLine from "./DecorationSimpleLine";
import Box from "../Flex/Box";

const TripLineLayout = ({ children, type, locationType }) => {
  let borderStyle = "solid";
  let color = "yellow";
  if (type === "arrival") {
    borderStyle = locationType === "connection" ? "dashed" : "none";
    color = locationType === "connection" ? "gray" : "yellow";
  }
  const [first, ...rest] = Children.toArray(children);
  const align = "left";
  return (
    <Box>
      <TripLine align={align} type={type} locationType={locationType}>
        {first}
      </TripLine>
      {rest.map(child => (
        <DecorationSimpleLine
          key={child.key}
          align={align}
          borderStyle={borderStyle}
          color={color}
        >
          {child}
        </DecorationSimpleLine>
      ))}
    </Box>
  );
};

export default TripLineLayout;
