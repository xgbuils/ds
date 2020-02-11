import styled from "@emotion/styled";
import { variant } from "styled-system";
import Decoration from "./Decoration";

const DecorationDisk = styled(Decoration)(
  {
    "::after": {
      width: "20px",
      height: "20px",
      borderRadius: "50%"
    }
  },
  variant({
    prop: "align",
    variants: {
      top: {
        "::after": {
          top: 0,
          left: "50%"
        }
      },
      right: {
        "::after": {
          top: "50%",
          left: "100%"
        }
      },
      bottom: {
        "::after": {
          top: "100%",
          left: "50%"
        }
      },
      left: {
        "::after": {
          left: 0,
          top: "50%"
        }
      }
    }
  }),
  variant({
    prop: "type",
    variants: {
      disk: {
        "::after": {
          backgroundColor: "#fc0"
        }
      },
      circle: {
        "::after": {
          borderStyle: "solid",
          borderWidth: "2px",
          borderColor: "#fc0",
          backgroundColor: "#fff"
        }
      }
    }
  })
);

export default DecorationDisk;
