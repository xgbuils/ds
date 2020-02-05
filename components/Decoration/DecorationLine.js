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
    "::before": {
      content: "''",
      display: "block",
      boxSizing: "border-box",
      position: "absolute",
      transform: "translate(-50%, -50%)",
      borderStyle: "solid",
      borderWidth: "3px",
    },
    "::after": {
      borderStyle: "solid",
      borderWidth: "3px",
    }
  },
  variant({
    prop: "align",
    variants: {
      top: {
        "::before": {
          top: 0,
          left: "25%",
          borderLeftWidth: 0,
          borderRightWidth: 0,
          width: "50%",
        },
        "::after": {
          top: "0",
          left: "75%",
          borderLeftWidth: 0,
          borderRightWidth: 0,
          width: "50%",
        }
      },
      right: {
        "::before": {
          left: "100%",
          top: "25%",
          height: "50%",
        },
        "::after": {
          left: "100%",
          top: "75%",
          height: "50%",
        }
      },
      bottom: {
        "::before": {
          top: "100%",
          left: "25%",
          width: "50%",
        },
        "::after": {
          top: "100%",
          left: "75%",
          width: "50%",
        }
      },
      left: {
        "::before": {
          left: 0,
          top: "25%",
          height: "50%",
        },
        "::after": {
          left: 0,
          top: "75%",
          height: "50%",
        }
      }
    }
  }),
  variant({
    prop: 'startColor',
    variants: {
      yellow: {
        "::before": {
          borderColor: '#fc0',
        },
      },
      gray: {
        "::before": {
          borderColor: '#aaa',
        },
      }
    } 
  }),
  variant({
    prop: 'endColor',
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
    prop: "startStyle",
    variants: {
      solid: {
        "::before": {
          borderStyle: "solid"
        }
      },
      dashed: {
        "::before": {
          borderStyle: "dashed"
        }
      },
      none: {
        "::before": {
          borderStyle: "none"
        }
      },
    }
  }),
  variant({
    prop: "endStyle",
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
