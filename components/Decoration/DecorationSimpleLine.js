import React, { useLayoutEffect, useState, useRef } from "react";
import styled from "@emotion/styled";
import { variant } from "styled-system";
import Decoration from "./Decoration";

export const DASHED_WIDTH = 6;
export const DASHED_SLOT = 4;
const REPETITION_WIDTH = DASHED_WIDTH + DASHED_SLOT;

const alignToDirection = isHorizontalLine => {
  return isHorizontalLine ? "to right" : "to bottom";
};

const chunkGradient = (start, end, color) => {
  return `${color} ${start}%, ${color} ${end}%`;
};

const toColorStops = (isHorizontalLine, size, bgColor) => {
  const numberOfChunks = Math.ceil(size / REPETITION_WIDTH);
  const end = 100 / numberOfChunks;
  const chunkPercentage =
    (100 * DASHED_WIDTH) / (numberOfChunks * REPETITION_WIDTH);
  const start = 0.5 * (end - chunkPercentage);
  const middle = start + chunkPercentage;
  return [
    chunkGradient(0, start, "transparent"),
    chunkGradient(start, middle, bgColor),
    chunkGradient(middle, end, "transparent")
  ].join(",");
};

export const calculateDashedBackground = (
  color,
  isHorizontalLine,
  size,
  pseudoSelector
) => {
  const direction = alignToDirection(isHorizontalLine);
  const colorStops = toColorStops(isHorizontalLine, size, color);
  return {
    [pseudoSelector]: {
      backgroundImage: `repeating-linear-gradient(${direction},${colorStops})`
    }
  };
};

const StyledDecorationLine = styled(Decoration)(
  variant({
    prop: "align",
    variants: {
      top: {
        "::after": {
          top: 0,
          left: "50%",
          width: "100%",
          height: "6px"
        }
      },
      right: {
        "::after": {
          left: "100%",
          top: "50%",
          height: "100%",
          width: "6px"
        }
      },
      bottom: {
        "::after": {
          top: "100%",
          left: "50%",
          width: "100%",
          height: "6px"
        }
      },
      left: {
        "::after": {
          left: 0,
          top: "50%",
          height: "100%",
          width: "6px"
        }
      }
    }
  }),
  props => {
    const color = props.color === "yellow" ? "#fc0" : "#aaa";
    const isHorizontalLine = ["top", "bottom"].includes(props.align);
    const size = isHorizontalLine ? props.width : props.height;
    return props.borderStyle === "dashed"
      ? calculateDashedBackground(color, isHorizontalLine, size, "::after")
      : {
          "::after": {
            backgroundColor: color
          }
        };
  }
);

export const withSize = Component => ({ children, ...props }) => {
  const [size, setSize] = useState({});
  const ref = useRef(null);

  useLayoutEffect(() => {
    const { current } = ref;
    setSize({
      height: current.clientHeight,
      width: current.clientWidth
    });
  }, [ref, setSize]);

  return (
    <Component ref={ref} {...props} {...size}>
      {children}
    </Component>
  );
};

const DecorationLine = withSize(StyledDecorationLine);

export default DecorationLine;
