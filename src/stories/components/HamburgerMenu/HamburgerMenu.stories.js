import React from "react";
import HamburgerMenu from "./HamburgerMenu";

export default {
  title: "Base/HamburgerMenu",
  component: HamburgerMenu,
  argTypes: { setOpen: { action: "openMenu" } },
};

const Template = (args) => <HamburgerMenu {...args} />;

export const Default = Template.bind({});
Default.args = {
  isOpen: false,
};

export const Closed = Template.bind({});
Closed.args = {
  isOpen: true,
};
