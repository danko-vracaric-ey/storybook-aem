import BlockTeaser from "./BlockTeaser";

export default {
  title: "Block/BlockTeaser",
  component: BlockTeaser,
};

const Template = (args) => <BlockTeaser {...args} />;

export const Default = Template.bind({});
export const FullWidth = Template.bind({});
export const Empty = Template.bind({});

// Default.args = {};
// FullWidth.args = {};
// Empty.args = {};
