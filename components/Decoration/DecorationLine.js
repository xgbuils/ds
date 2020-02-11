import styled from "@emotion/styled";
import { variant } from "styled-system";
import Decoration from "./Decoration";
import { calculateDashedBackground, withSize } from "./DecorationSimpleLine";

const calculateSolidBackground = (color, pseudoSelector) => ({
  [pseudoSelector]: {
    backgroundColor: color
  }
});

const colorStyleVariant = (
  pseudoSelector,
  colorProp,
  borderStyleProp
) => props => {
  const borderStyle = props[borderStyleProp];
  if (borderStyle === "none") {
    return calculateSolidBackground("transparent", pseudoSelector);
  }
  const color = props[colorProp] === "yellow" ? "#fc0" : "#aaa";
  const isHorizontalLine = ["top", "bottom"].includes(props.align);
  const size = isHorizontalLine ? props.width : props.height;

  return props[borderStyleProp] === "dashed"
    ? calculateDashedBackground(
        color,
        isHorizontalLine,
        0.5 * size,
        pseudoSelector
      )
    : calculateSolidBackground(color, pseudoSelector);
};

const StyledDecorationLine = styled(Decoration)(
  {
    "::before": {
      content: "''",
      display: "block",
      boxSizing: "border-box",
      position: "absolute",
      transform: "translate(-50%, -50%)"
    }
  },
  variant({
    prop: "align",
    variants: {
      top: {
        "::before": {
          top: 0,
          left: "25%",
          width: "50%",
          height: "6px"
        },
        "::after": {
          top: "0",
          left: "75%",
          width: "50%",
          height: "6px"
        }
      },
      right: {
        "::before": {
          left: "100%",
          top: "25%",
          height: "50%",
          width: "6px"
        },
        "::after": {
          left: "100%",
          top: "75%",
          height: "50%",
          width: "6px"
        }
      },
      bottom: {
        "::before": {
          top: "100%",
          left: "25%",
          width: "50%",
          height: "6px"
        },
        "::after": {
          top: "100%",
          left: "75%",
          width: "50%",
          height: "6px"
        }
      },
      left: {
        "::before": {
          left: 0,
          top: "25%",
          height: "50%",
          width: "6px"
        },
        "::after": {
          left: 0,
          top: "75%",
          height: "50%",
          width: "6px"
        }
      }
    }
  }),
  colorStyleVariant("::before", "startColor", "startStyle"),
  colorStyleVariant("::after", "endColor", "endStyle")
);

const DecorationLine = withSize(StyledDecorationLine);

export default DecorationLine;
