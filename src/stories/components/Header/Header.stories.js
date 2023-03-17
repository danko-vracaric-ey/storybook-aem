import React from 'react';

import Header from './Header';
import Image from "../../assets/images/logo.png";

const mockLinkData = [{text:"Home", onClick: ()=>{}, disabled:false, variant:"primary", className:""},{text:"About", onClick: ()=>{}, disabled:false, variant:"primary", className:""},{text:"Contact", onClick: ()=>{}, disabled:false, variant:"primary", className:""}]
const mockLinkData2 = [{text:"Home", onClick: ()=>{}, disabled:false, variant:"secondary", className:""},{text:"About", onClick: ()=>{}, disabled:false, variant:"secondary", className:""},{text:"Contact", onClick: ()=>{}, disabled:false, variant:"secondary", className:""}]

export default {
    title: 'Block/Header',
    component: Header,
};

const Template = (args) =><Header {...args} />;

export const Primary = Template.bind({});
export const Secondary = Template.bind({});

Primary.args = {
    id:"header-1",
    headerLogo: Image,
    linksData:mockLinkData
};
Secondary.args = {
    id:"header-1",
    headerLogo: Image,
    linksData:mockLinkData2
};