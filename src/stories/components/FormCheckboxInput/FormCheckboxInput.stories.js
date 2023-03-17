import React from "react";
import FormCheckboxInput from "./FormCheckboxInput";

export default {
  title: "Base/Form/FormCheckbox",
  component: FormCheckboxInput,
};

const Template = (args) => <FormCheckboxInput {...args} />;

export const Checkboxes = Template.bind({});
Checkboxes.args = {};
