import React from 'react';
import PropTypes from 'prop-types';
import { StyledHeadingSection } from './HeadingSection.styled';

const HeadingSection = ({
    id,
    text,
    variant,
    className,
    ...otherProps
}) => (
    <StyledHeadingSection id={id} variant={variant} className={className} {...otherProps}>
        {text}
    </StyledHeadingSection>
);


HeadingSection.propTypes = {
    /**
     * Link id
     */
    id: PropTypes.string,
    /**
     * Which text to be displayed
     */
    text: PropTypes.node.isRequired,
    /**
     * One of two possible states of heading
     */
    variant: PropTypes.oneOf(['primary', 'secondary']),
    /**
     * Optional component class name
     */
    className: PropTypes.string
};

HeadingSection.defaultProps = {
    id: 'heading-section-id',
    text: 'Heading Section',
    variant: 'primary',
    className:""
};

export default HeadingSection