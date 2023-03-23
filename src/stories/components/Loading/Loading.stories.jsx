import { Loading } from "./Loading";

export default {
  title: "Base/Loading",
  component: Loading,
};

const Template = (args) => <Loading {...args} />;

export const Default = Template.bind({});
Default.args = {
  active: true,
  small: true,
  loadingText: "Loading...",
};
