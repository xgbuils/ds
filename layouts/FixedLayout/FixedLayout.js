import React from "react";
import styled from "@emotion/styled";

export const StyledFixedLayout = styled('div')({
  height: '100%',
  display: 'flex',
  flexDirection: 'column'
})

const StyledContent = styled('div')(
  {
    flex: 1,
    overflow: 'auto',
  }, 
  ({scrollbar}) => scrollbar !== 'visible' && ({
    "::-webkit-scrollbar": {
      display: 'none'
    },
    "-ms-overflow-style": "none"
  })
)

const FixedLayout = ({header, footer, children, scrollbar}) => (
  <StyledFixedLayout>
    {header}
    <StyledContent scrollbar={scrollbar}>
      {children}
    </StyledContent>
    {footer}
  </StyledFixedLayout>
)

export default FixedLayout;