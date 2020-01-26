import React, { Children, cloneElement } from "react";
import styled from "@emotion/styled";
import Box, { getThemeSpace } from "./Box";
import { system } from "styled-system";

const getCoord = flexDirection =>
  /^column/.test(flexDirection) ? "Bottom" : "Right";

const BaseFlex = styled(Box)(
  {
    display: "flex"
  },
  system({
    display: {
      property: "display",
      transform: value => (value === "inline-flex" ? value : "flex")
    },
    axisGap: (value, scale, props) => {
      const { flexDirection } = props;
      const coord = getCoord(flexDirection);
      const result = {};
      if (value) {
        result[`margin${coord}`] = "-" + getThemeSpace(Math.abs(value), props);
      }
      return result;
    }
  })
);

const horizontalProps = ["pr", "px", "p"];
const verticalProps = ["pb", "py", "p"];

const getPadding = (props, coord) => {
  const pProps = coord === "Right" ? horizontalProps : verticalProps;

  const pProp = pProps.find(pProp => {
    return props[pProp] != null;
  });
  return props[pProp];
};

const toArray = value => (Array.isArray(value) ? value : [value]);

const boxWithGap = ({ axisGap, flexDirection }) => {
  const coord = getCoord(flexDirection);
  const gaps = toArray(axisGap);
  return box =>
    cloneElement(box, {
      [`padding${coord}`]: gaps.map(gap => ({
        axisGap: gap,
        padding: getPadding(box.props, coord)
      }))
    });
};

const Flex = ({ children, ...props }) => (
  <BaseFlex {...props}>
    {props.axisGap ? Children.map(children, boxWithGap(props)) : children}
  </BaseFlex>
);

export default Flex;
