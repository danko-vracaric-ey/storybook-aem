import React from 'react';
import PropTypes from 'prop-types';
import { StyledTextBox } from './TextBox.styled';

const TextBox = ({
    id,
   text,
   variant,
   className
}) => (
    <StyledTextBox id={id} className={className} variant={variant}>
        <span>{text}</span>
    </StyledTextBox>
);


TextBox.propTypes = {
    /**
     * TextBox id
     */
    id: PropTypes.string,
    /**
     * Which text to be displayed
     */
    text: PropTypes.node.isRequired,
     /**
     * One of two possible states of text box
     */
     variant: PropTypes.oneOf(['primary', 'secondary']),
};

TextBox.defaultProps = {
    id: 'text-id',
    text: "Content",
    variant: "primary"
};

export default TextBox