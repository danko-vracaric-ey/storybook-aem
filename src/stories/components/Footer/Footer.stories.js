import React from 'react';
import Footer from './Footer';

const editorData = [{name:"John Doe", email:"example@gmail.com"}, {name:"John Doe Two", email:"example2@gmail.com"}]
const managerData = [{name:"John Doe3", email: "example3@gmail.com"},{name:"John Doe4", email: "example4@gmail.com"}]
const mockLinkData = [{text:"Site1", onClick: ()=>{}, disabled:false, variant:"secondary", className:""}, {text:"Site2", onClick: ()=>{}, disabled:false, variant:"secondary", className:""}, {text:"Site3", onClick: ()=>{}, disabled:false, variant:"secondary", className:""}, {text:"Site4", onClick: ()=>{}, disabled:false, variant:"secondary", className:""}]


const myStyle = {
    backgroundColor:'black',
    height: "100vh",
    position:"relative",
}

export default {
    title: 'Block/Footer',
    component: Footer,
};

const Template = (args) => <div style={myStyle}><Footer {...args} /></div>;

export const Primary = Template.bind({});

Primary.args = {
    id: "footer-id",
    editors:editorData,
    managers: managerData,
    pageUpdateDate: "1.1.2023.",
    additionalInformation : "This page was created by a PAR development center and funded by SNF research foundation.",
    linksHeading: "more sites",
    noticeText: "Information in this system is sensitive and must be handled with caution",
    linksData: mockLinkData
};