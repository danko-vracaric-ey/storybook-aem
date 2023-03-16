import React from 'react';
import PropTypes from 'prop-types';
import { StyledContainer, StyledTop, StyledBottom, StyledTitle, StyledDescription } from "./Card.styled" 

const Card = ({
    id,
    variant,
    ...otherProps
}) => (
    <StyledContainer id={id} variant={variant} {...otherProps}>
        <StyledTop/>
        <StyledBottom>
            <StyledTitle>Text</StyledTitle>
            <StyledDescription>Text</StyledDescription>
        </StyledBottom>
    </StyledContainer>
);


Card.propTypes = {
    /**
     * Link id
     */
    id: PropTypes.string,
};

Card.defaultProps = {
    id: 'heading-section-id',
};

export default Card