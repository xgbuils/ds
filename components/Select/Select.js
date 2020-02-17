import React from "react";
import styled from "@emotion/styled";

const StyledSelectContainer = styled("div")({
  position: "relative",
  width: "100%",
  height: "30px",
  backgroundColor: "#ddd"
});

const StyledSelect = styled("select")({
  position: "absolute",
  top: 0,
  backgroundColor: "transparent",
  width: "100%",
  height: "30px",
  appearance: "none",
  cursor: "pointer",
  ":focus": {
    cursor: "pointer"
  },
  ":hover": {
    border: "solid 2px red"
  }
});

const StyledIcon = styled("div")({
  top: 0,
  right: 0,
  paddingRight: "12px",
  position: "absolute",
  display: "flex",
  alignItems: "center",
  height: "100%",
  marginRight: "10px",
  width: 0
});

const Select = () => (
  <StyledSelectContainer>
    <StyledIcon>X</StyledIcon>
    <StyledSelect onChange={() => {}}>
      <option value={1}>One</option>
      <option value={2}>Two</option>
      <option value={3}>Three</option>
    </StyledSelect>
  </StyledSelectContainer>
);

export default Select;
