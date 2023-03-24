import React from 'react';
import PropTypes from 'prop-types';
import { StyledParagraph } from './Paragraph.styled';

const Paragraph = ({
    id,
   text,
   className
}) => (
    <StyledParagraph id={id} className={className}>
        {text}
    </StyledParagraph>
);


Paragraph.propTypes = {
    /**
     * TextBox id
     */
    id: PropTypes.string,
    /**
     * Which text to be displayed
     */
    text: PropTypes.node.isRequired,
    /**
     * Optional paragraph class name
     */
    className: PropTypes.string
};

Paragraph.defaultProps = {
    id: 'paragraph-id',
    text: "Content",
    className:""
};

export default Paragraph