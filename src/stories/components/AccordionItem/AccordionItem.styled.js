import styled from "styled-components";

export const StyledAccordionItemContainer = styled.li`
width: 60vw;
list-style-type:none;
/* background-color: red; */
`

export const StyledButtonSpanWrapper = styled.div`
    display: flex;
    flex-direction: row;
`

export const StyledAccordionItemSpanControl = styled.span`
display: inline-block;
display: flex;
align-items: center;
justify-content: center;
border: 1px solid red;
width: 5%;
`

export const StyledText2Wrapper = styled.div`
height: ${props=> props.open ? "50px" : "0"};

background-color:rgba(252, 250, 245);
transition: all 1 ease-in-out;
overflow: hidden;
`
export const StyledText2Holder = styled.div`
`
