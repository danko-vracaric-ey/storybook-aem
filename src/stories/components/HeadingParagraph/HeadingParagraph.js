import React from 'react';
import PropTypes from 'prop-types';
import { StyledHeadingParagraph } from './HeadingParagraph.styled';

const HeadingParagraph = ({
    id,
    text,
    ...otherProps
}) => (
    <StyledHeadingParagraph id={id} {...otherProps}>
        {text}
    </StyledHeadingParagraph>
);


HeadingParagraph.propTypes = {
    /**
     * Link id
     */
    id: PropTypes.string,
    /**
     * Which text to be displayed
     */
    text: PropTypes.node.isRequired,
};

HeadingParagraph.defaultProps = {
    id: 'heading_id',
    text: 'Heading Paragraph'
};

export default HeadingParagraph