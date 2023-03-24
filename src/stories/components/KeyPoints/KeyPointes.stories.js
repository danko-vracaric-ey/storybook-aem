import React from 'react';
import KeyPoints from './KeyPoints';

const mockData = [{content:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{content:"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"}]

export default {
    title: 'Block/KeyPoints',
    component: KeyPoints,
};

const Template = (args) => <div><KeyPoints {...args} /></div>;

export const Primary = Template.bind({});
export const Secondary = Template.bind({});

Primary.args = {
    id: "key-points-id",
    headLine: "Key Points",
    keyPointsData: mockData,
    variant: "primary"
};
Secondary.args = {
    id: "key-points-id",
    headLine: "Key Points - rounded",
    keyPointsData: mockData,
    variant: "secondary"
};