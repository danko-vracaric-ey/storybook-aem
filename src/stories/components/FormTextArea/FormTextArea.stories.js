import React from "react";
import { FormTextArea } from "./FormTextArea";

export default {
  title: "Base/Form/FormTextArea",
  component: FormTextArea,
};
const Template = (args) => <FormTextArea {...args} />;

export const TextBox = Template.bind({});
TextBox.args = {
  placeholder: "Leave a comment...",
};
