import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import { StyledAccordionItemContainer, StyledAccordionItemSpanControl,StyledButtonSpanWrapper,StyledText2Wrapper } from './AccordionItem.styled';
import Paragraph from '../Paragraph/Paragraph';

const AccordionItem = ({
    id,
    text1,
    text2,
    open,
    setOpen,
    ...otherProps
}) => {
    
    const onToggleAccordion = () => {
        setOpen(!open)
    }
    const toggleIcon = !open ? "+" : "-";

    return (<StyledAccordionItemContainer id={id} {...otherProps}>
        <StyledButtonSpanWrapper>
        <Button onClick={onToggleAccordion} width="95%" label={text1}/>
        <StyledAccordionItemSpanControl>{toggleIcon}</StyledAccordionItemSpanControl>
        </StyledButtonSpanWrapper>
        <StyledText2Wrapper open={open}>
            <Paragraph text={text2}/>
        </StyledText2Wrapper>
    </StyledAccordionItemContainer>
    )
};


AccordionItem.propTypes = {
    /**
     * Link id
     */
    id: PropTypes.string,
    /**
     * Accordion text
     */
    text1: PropTypes.string
};

AccordionItem.defaultProps = {
    id: 'accordion-item-id',
    text1 :"text",
    text2: "text2",
    open: false,
    setOpen : ()=>{}
};

export default AccordionItem