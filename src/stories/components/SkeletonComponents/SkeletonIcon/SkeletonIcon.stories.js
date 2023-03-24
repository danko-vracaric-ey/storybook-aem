import { SkeletonIcon } from "./SkeletonIcon";

export default {
  title: "Base/SkeletonComponents/SkeletonIcon",
  component: SkeletonIcon,
};

const Template = (args) => <SkeletonIcon {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: "medium",
  rounded: "none",
};
