import React from "react";
import { SkeletonText } from "./SkeletonText";

export default {
  title: "Base/SkeletonComponents/SkeletonText",
  component: SkeletonText,
};

const Template = (args) => <SkeletonText {...args} />;

export const Default = Template.bind({});
export const Double = Template.bind({});
export const Paragraph = Template.bind({});

Default.args = {
  variant: "single",
  rounded: false,
};

Double.args = {
  variant: "double",
  rounded: false,
};

Paragraph.args = {
  variant: "paragraph",
  rounded: false,
};
