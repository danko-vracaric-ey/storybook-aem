import React from 'react';
import PropTypes from 'prop-types';
import { StyledHeading } from './Heading.styled';

const Heading = ({
    id,
    text,
    variant,
    animationDirection,
    ...otherProps
}) => (
    <StyledHeading id={id} variant={variant} animated={animationDirection} {...otherProps}>
        {text}
    </StyledHeading>
);


Heading.propTypes = {
    /**
     * Link id
     */
    id: PropTypes.string,
    /**
     * Which text to be displayed
     */
    text: PropTypes.node.isRequired,
    /**
     * Optional you can pass a variant
     */
    animationDirection: PropTypes.string,
    /**
     * Optional animation direction
     */
    variant: PropTypes.oneOf(['primary', 'secondary']),
};

Heading.defaultProps = {
    id: 'heading_id',
    variant: 'primary',
    animationDirection:"left"
};

export default Heading