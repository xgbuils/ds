import styled from "@emotion/styled";
import { space, layout, flexbox, system } from "styled-system";
import themeGet from "@styled-system/theme-get";

const normalize = num => (/\d$/.test(num) ? `${num}px` : num);
export const getThemeSpace = (padding, props) =>
  normalize(themeGet(`space.${padding}`, padding)(props));

const transform = (value, scale, props) => {
  if (typeof value === "object") {
    const { axisGap, padding } = value;
    const themeAxisGap = getThemeSpace(axisGap, props);
    const themeP = getThemeSpace(padding, props);
    return padding ? `calc(${themeAxisGap} + ${themeP})` : themeAxisGap;
  }
  return getThemeSpace(value, props);
};

const Box = styled("div")(
  {
    boxSizing: "border-box",
    minWidth: 0
  },
  layout,
  flexbox,
  space,
  system({
    paddingRight: {
      property: "paddingRight",
      scale: "sizes",
      transform
    },
    paddingBottom: {
      property: "paddingBottom",
      scale: "sizes",
      transform
    }
  })
);

export default Box;
