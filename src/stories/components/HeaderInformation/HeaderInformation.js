import React from 'react';
import PropTypes from 'prop-types';
import { StyledContainer } from './HeaderInformation.styled';
import Heading from '../Heading/Heading';
import Link from '../Link/Link';

const HeaderInformation = ({
    id,
    text,
    linkText,
    variant,
    linkHandler,
    disabledLink,
    textAnimationDirection,
    ...otherProps
}) => (
    <StyledContainer id={id} {...otherProps}>
        <Heading text={text} variant={variant} animationDirection={textAnimationDirection}/>
        <Link text={linkText} onClick={linkHandler} disabled={disabledLink} variant={variant}/>
    </StyledContainer>
);


HeaderInformation.propTypes = {
    /**
     * Link id
     */
    id: PropTypes.string,
    /**
     * Which text to be displayed
     */
    text: PropTypes.node.isRequired,
    /**
     * Which text to be displayed
     */
    linkText: PropTypes.node.isRequired,
    /**
     * Optional animation direction
     */
    textAnimationDirection: PropTypes.string,
    /**
     * Optional you can pass a variant
     */
    variant: PropTypes.oneOf(['primary', 'secondary']),
    /**
     * Optional linkHandler
     */
    linkHandler: PropTypes.func,
    /**
     * Optional disabledLink
     */
    disabledLink: PropTypes.bool
};

HeaderInformation.defaultProps = {
    id: 'header-information-id',
    text: "Content information",
    textAnimationDirection: "left",
    variant: "primary",
    linkHandler: ()=>{},
    disabledLink: false
};

export default HeaderInformation