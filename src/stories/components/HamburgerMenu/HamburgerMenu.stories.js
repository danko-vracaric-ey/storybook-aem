import React from "react";
import HamburgerMenu from "./HamburgerMenu";

export default {
  title: "Base/HamburgerMenu",
  component: HamburgerMenu,
};

const Template = (args) => <HamburgerMenu {...args} />;

export const Default = Template.bind({});
Default.args = {
  isOpen: false,
  argTypes: { setOpen: { action: "openMenu" } },
};

export const Closed = Template.bind({});
Closed.args = {
  isOpen: true,
};
