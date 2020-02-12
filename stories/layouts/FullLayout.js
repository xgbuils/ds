import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import FullLayout from "../../layouts/FullLayout/";

storiesOf("layouts/FullLayout", module)
  .addDecorator(withKnobs)
  .add("Tiny content", () => {
    return (
      <FullLayout header="Header" footer="Footer">
        Content
      </FullLayout>
    );
  })
  .add("Huge content", () => {
    return (
      <FullLayout header="Header" footer="Footer" scrollbar="visible">
        {Array.from({ length: 50 }, () => (
          <div>Content</div>
        ))}
      </FullLayout>
    );
  });
