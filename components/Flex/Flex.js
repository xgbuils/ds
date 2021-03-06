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

const horizontalProps = [
  "pr",
  "paddingRight",
  "px",
  "paddingX",
  "p",
  "padding"
];
const verticalProps = ["pb", "paddingBottom", "py", "paddingY", "p", "padding"];

const getPadding = (props, coord) => {
  const paddingProps = coord === "Right" ? horizontalProps : verticalProps;

  const paddingProp = paddingProps.find(prop => props[prop] != null);

  return props[paddingProp];
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
