import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import Select from "../../components/Select/";

storiesOf("components/Select", module)
  .addDecorator(withKnobs)
  .add("Select with custom icon", () => {
    return <Select />;
  });
