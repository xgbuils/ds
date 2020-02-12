import React from "react";
import styled from "@emotion/styled";

export const StyledDefaultLayout = styled("div")({
  display: "flex",
  flexDirection: "column"
});

const DefaultLayout = ({ header, footer, children }) => (
  <StyledDefaultLayout>
    {header}
    {children}
    {footer}
  </StyledDefaultLayout>
);

export default DefaultLayout;
