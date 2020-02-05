import styled from "@emotion/styled";

const Decoration = styled("div")({
  position: "relative",
  "::after": {
    content: "''",
    display: "block",
    boxSizing: "border-box",
    position: "absolute",
    transform: "translate(-50%, -50%)"
  }
});

export default Decoration;
