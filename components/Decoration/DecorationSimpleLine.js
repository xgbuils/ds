import styled from "@emotion/styled";
import { variant, system } from "styled-system";
import Decoration from "./Decoration";

const placeVariants = {
  full: {
    position: "50%",
    size: "100%"
  },
  halfStart: {
    position: "25%",
    size: "50%"
  },
  halfEnd: {
    position: "75%",
    size: "50%"
  }
};

const DecorationLine = styled(Decoration)(
  {
    "::after": {
      borderStyle: "solid",
      borderWidth: "3px",
    }
  },
  variant({
    prop: "align",
    variants: {
      top: {
        "::after": {
          top: 0,
          left: "50%",
          width: "100%",
        }
      },
      right: {
        "::after": {
          left: "100%",
          top: "50%",
          height: "100%",
        }
      },
      bottom: {
        "::after": {
          top: "100%",
          left: "50%",
          width: "100%",
        }
      },
      left: {
        "::after": {
          left: 0,
          top: "50%",
          height: "100%",
        }
      }
    }
  }),
  variant({
    prop: 'color',
    variants: {
      yellow: {
        "::after": {
          borderColor: '#fc0',
        }
      },
      gray: {
        "::after": {
          borderColor: '#aaa',
        }
      }
    } 
  }),
  variant({
    prop: "borderStyle",
    variants: {
      solid: {
        "::after": {
          borderStyle: "solid"
        }
      },
      dashed: {
        "::after": {
          borderStyle: "dashed"
        }
      },
      none: {
        "::after": {
          borderStyle: "none"
        }
      },
    }
  })
);

export default DecorationLine;
