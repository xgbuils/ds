import React from "react";
import styled from "@emotion/styled";

export const StyledFullLayout = styled("div")({
  minHeight: "100%",
  display: "flex",
  flexDirection: "column"
});

const StyledContent = styled("div")({
  flexGrow: 1
});

const FixedLayout = ({ header, footer, children }) => (
  <StyledFullLayout>
    {header}
    <StyledContent>{children}</StyledContent>
    {footer}
  </StyledFullLayout>
);

export default FixedLayout;
