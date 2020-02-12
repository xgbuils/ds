import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import DefaultLayout from "../../layouts/DefaultLayout/";

storiesOf("layouts/DefaultLayout", module)
  .addDecorator(withKnobs)
  .add("Tiny content", () => {
    return (
      <DefaultLayout header="Header" footer="Footer">
        <div>Content</div>
      </DefaultLayout>
    );
  })
  .add("Huge content", () => {
    return (
      <DefaultLayout header="Header" footer="Footer" scrollbar="visible">
        {Array.from({ length: 50 }, () => (
          <div>Content</div>
        ))}
      </DefaultLayout>
    );
  });
