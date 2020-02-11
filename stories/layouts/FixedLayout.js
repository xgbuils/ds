import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import FixedLayout from "../../layouts/FixedLayout/";

storiesOf("layouts/FixedLayout", module)
  .addDecorator(withKnobs)
  .add("Tiny content", () => {
    return (
      <FixedLayout
        header="Header"
        footer="Footer"
      >
        content
      </FixedLayout>
    );
  })
  .add("Huge content, scrollbar visible", () => {
    return (
      <FixedLayout
        header="Header"
        footer="Footer"
        scrollbar="visible"
      >
        {Array.from({length: 50}, () => <div>content</div>)}
      </FixedLayout>
    );
  })
  .add("Huge content, scrollbar hidden", () => {
    return (
      <FixedLayout
        header="Header"
        footer="Footer"
        scrollbar="hidden"
      >
        {Array.from({length: 50}, () => <div>content</div>)}
      </FixedLayout>
    );
  });
