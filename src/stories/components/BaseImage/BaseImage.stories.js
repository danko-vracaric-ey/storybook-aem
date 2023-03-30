import React from "react";
import BaseImage from "./BaseImage";

export default {
  title: "Base/BaseImage",
  component: BaseImage,
};

const Template = (args) => <BaseImage {...args} />;

export const Image = Template.bind({});
Image.args = {};
