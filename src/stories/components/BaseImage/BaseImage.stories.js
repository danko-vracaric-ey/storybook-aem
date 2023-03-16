import React from "react";
import BaseImage from "./BaseImage";
// import Image from "../../assets/images/"

export default {
  title: "Base/BaseImage",
  component: BaseImage,
};

const Template = (args) => <BaseImage {...args} />;

export const Image = Template.bind({});
Image.args = {
  //   width: "300px",
  //   height: "150px",
};
