import React from 'react';
import PropTypes from 'prop-types';
import { StyledLink } from './Link.styled';

const Link = ({
    id,
    text,
    onClick,
    disabled,
    variant,
    icon,
    iconPosition,
    width,
    ...otherProps
}) => (
    <StyledLink id={id} onClick={onClick} disabled={disabled} variant={variant} width {...otherProps}>
        {text} &rarr;
    </StyledLink>
);


Link.propTypes = {
    /**
     * Link id
     */
    id: PropTypes.string,
    /**
     * Which text to be displayed
     */
    text: PropTypes.node.isRequired,
    /**
     * Optional click handler
     */
    onClick: PropTypes.func,
    /**
     * Checks if should be disabled
     */
    disabled: PropTypes.bool,
    /**
     * Optional you can pass secondary variant
     */
    variant: PropTypes.oneOf(['primary', 'secondary']),
     /**
     * Optional width of link
     */
     width: PropTypes.string,
};

Link.defaultProps = {
    id: 'link_id',
    onClick: () => {},
    disabled: false,
    variant: 'primary',
    width: '',
};

export default Link