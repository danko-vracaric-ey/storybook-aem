import React from "react";
import ProgressBar from "./ProgressBar";

const progress = 50;
const variant = "primary";

export default {
  title: "Base/ProgressBar",
  component: ProgressBar,
  argTypes: {
    progress: {
      control: {
        type: "range",
        step: 1,
      },
    },
  },
};

const Template = (args) => <ProgressBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  progress,
  variant,
};
