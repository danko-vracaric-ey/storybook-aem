import React from 'react';
import PropTypes from 'prop-types';
import { StyledTextBox } from './TextBox.styled';

const TextBox = ({
    id,
   text,
   variant,
   interactive,
   className
}) => (
    <StyledTextBox id={id} variant={variant} interactive={interactive} className={className} >
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
     /**
     * Optional interactive text box
     */
    interactive: PropTypes.bool,
     /**
     * Optional className of text box
     */
     className: PropTypes.string,
};

TextBox.defaultProps = {
    id: 'text-id',
    text: "Content",
    variant: "primary"
};

export default TextBox