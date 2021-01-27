// Button.stories.tsx

import React from "react";
import { Story } from "@storybook/react/types-6-0";
import Button from "./Button";

// Required default export w/ title
export default {
  title: "Button",
  // Though optional, `component` is required to fully populate ArgsTable
  component: Button,
  // Optional parameters
  parameters: {
    componentSubtitle: "This is the `componentSubtitle`"
  }
};

// Optionally define a template to reuse
const Template: Story = (args) => <Button {...args}>Test</Button>;

export const Primary = Template.bind({});
// Use `args` (i.e. props) as Controls
Primary.args = {};
// I guess you can't add a description to the first Story?
Primary.story = {
  parameters: {
    docs: {
      storyDescription: "This doesn't work for some reason"
    }
  }
};

export const AnotherStory = Template.bind({});
// Overwrite previous args
AnotherStory.args = { ...Primary.args, label: "AnotherOne" };
AnotherStory.story = {
  parameters: {
    docs: {
      storyDescription: "This is `storyDescription`"
    }
  }
};
