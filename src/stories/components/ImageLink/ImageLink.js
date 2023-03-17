import React from 'react';
import PropTypes from 'prop-types';
import { StyledContainer,StyledBaseImage, StyledTextBox, StyledWrapper, StyledLink } from "./ImageLink.styled" 


const ImageLink = ({
    id,
    text,
    variant,
    interactiveTextBox,
    linkHandler,
    disabledLink,
    className,
    ...otherProps
}) => (
    <StyledContainer id={id} className={className} {...otherProps}>
        <StyledBaseImage />
        <StyledWrapper>
        <StyledTextBox variant={variant} text={text} interactive={interactiveTextBox}/>
        <StyledLink variant={variant}></StyledLink>
        </StyledWrapper>
    </StyledContainer>
);


ImageLink.propTypes = {
    /**
     * ImageLink id
     */
    id: PropTypes.string,
    /**
     * Which text to be displayed
     */
    text: PropTypes.string,
     /**
     * Optional you can pass secondary variant
     */
     variant: PropTypes.oneOf(['primary', 'secondary']),
     /**
     * Optional ImageLink class name
     */
    className: PropTypes.string,
    /**
     * Optional linkHandler
     */
    linkHandler: PropTypes.func,
    /**
     * Optional disabledLink
     */
    disabledLink: PropTypes.bool
};

ImageLink.defaultProps = {
};

export default ImageLink