import React from "react";
import theme from "./theme";
import { configure, addDecorator, addParameters } from "@storybook/react";
import Provider from "../components/Provider";

function loadStories() {
  require("../stories/index.js");
}

addDecorator(story => <Provider>{story()}</Provider>);

addParameters({ options: { theme } });

configure(loadStories, module);
