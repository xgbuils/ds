import React, { Fragment } from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, select } from "@storybook/addon-knobs";
import Content from "../.storybook/components/Content";
import Container from "../.storybook/components/Container";
import Flex from "../components/Flex/Flex";
import Box from "../components/Flex/Box";

const flexDirections = ["row", "column", "row-reverse", "column-reverse"];

storiesOf("Flex & Box", module)
  .addDecorator(withKnobs)
  .add("flexDirection=row", () => {
    return (
      <Fragment>
        <h2>Only axis gap</h2>
        <Container>
          <Flex justifyContent="space-between" flexDirection="row" axisGap={2}>
            <Box flexGrow={1}>
              <Content>one</Content>
            </Box>
            <Box flexGrow={1}>
              <Content>two</Content>
            </Box>
            <Box flexGrow={1}>
              <Content>three</Content>
            </Box>
            <Box flexGrow={1}>
              <Content>four</Content>
            </Box>
          </Flex>
        </Container>
        <h2>Only paddings</h2>
        <Container>
          <Flex justifyContent="space-between" flexDirection="row">
            <Box flexGrow={1} p={1}>
              <Content>one</Content>
            </Box>
            <Box flexGrow={1} px={2}>
              <Content>two</Content>
            </Box>
            <Box flexGrow={1}>
              <Content>three</Content>
            </Box>
            <Box flexGrow={1} pr={3}>
              <Content>four</Content>
            </Box>
          </Flex>
        </Container>
        <h2>Merging axis gaps with box paddings</h2>
        <Container>
          <Flex justifyContent="space-between" flexDirection="row" axisGap={2}>
            <Box flexGrow={1} p={1}>
              <Content>one</Content>
            </Box>
            <Box flexGrow={1} px={2}>
              <Content>two</Content>
            </Box>
            <Box flexGrow={1}>
              <Content>three</Content>
            </Box>
            <Box flexGrow={1} pr={3}>
              <Content>four</Content>
            </Box>
          </Flex>
        </Container>
      </Fragment>
    );
  })
  .add("flexDirection=column", () => {
    return (
      <Fragment>
        <h2>Only axis gap</h2>
        <Container>
          <Flex
            justifyContent="space-between"
            flexDirection="column"
            axisGap={2}
          >
            <Box flexGrow={1}>
              <Content>one</Content>
            </Box>
            <Box flexGrow={1}>
              <Content>two</Content>
            </Box>
            <Box flexGrow={1}>
              <Content>three</Content>
            </Box>
            <Box flexGrow={1}>
              <Content>four</Content>
            </Box>
          </Flex>
        </Container>
        <h2>Only paddings</h2>
        <Container>
          <Flex justifyContent="space-between" flexDirection="column">
            <Box flexGrow={1} p={1}>
              <Content>one</Content>
            </Box>
            <Box flexGrow={1} py={2}>
              <Content>two</Content>
            </Box>
            <Box flexGrow={1}>
              <Content>three</Content>
            </Box>
            <Box flexGrow={1} pb={3}>
              <Content>four</Content>
            </Box>
          </Flex>
        </Container>
        <h2>Merging axis gaps with box paddings</h2>
        <Container>
          <Flex
            justifyContent="space-between"
            flexDirection="column"
            axisGap={2}
          >
            <Box flexGrow={1} p={1}>
              <Content>one</Content>
            </Box>
            <Box flexGrow={1} py={2}>
              <Content>two</Content>
            </Box>
            <Box flexGrow={1}>
              <Content>three</Content>
            </Box>
            <Box flexGrow={1} pb={3}>
              <Content>four</Content>
            </Box>
          </Flex>
        </Container>
      </Fragment>
    );
  })
  .add("responsive axisGap", () => {
    const flexDirection = select(
      "flexDirection",
      flexDirections,
      flexDirections[0]
    );
    return (
      <Container>
        <Flex
          justifyContent="space-between"
          flexDirection={flexDirection}
          axisGap={[1, 2, 3]}
        >
          <Box flexGrow={1}>
            <Content>one</Content>
          </Box>
          <Box flexGrow={1}>
            <Content>two</Content>
          </Box>
        </Flex>
      </Container>
    );
  });
