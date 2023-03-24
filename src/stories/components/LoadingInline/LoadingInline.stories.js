import { LoadingInline } from "./LoadingInline";

export default {
  title: "Base/LoadingInline",
  component: LoadingInline,
};

const Template = (args) => <LoadingInline {...args} />;

export const Default = Template.bind({});
Default.args = {
  active: true,
  loadingText: "Loading...",
};
