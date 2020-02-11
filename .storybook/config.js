import React, {Fragment} from "react";
import { Global, css } from "@emotion/core";
import theme from "./theme";
import { configure, addDecorator, addParameters } from "@storybook/react";
import Provider from "../components/Provider";

function loadStories() {
  require("../stories/index.js");
}

addDecorator(story => (
  <Fragment>
    <Global
      styles={css({
        'html, body': {
          height: "100%",
          margin: 0
        },
        '#root': {
          height: "100%"
        }
      })}
    >
    </Global>
    <Provider>{story()}</Provider>
  </Fragment>
));

addParameters({ options: { theme } });

configure(loadStories, module);
