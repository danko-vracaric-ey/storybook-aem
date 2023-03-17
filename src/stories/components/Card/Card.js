import React from 'react';
import PropTypes from 'prop-types';
import { StyledContainer, StyledTop, StyledBottom, StyledTitle, StyledDescription } from "./Card.styled" 
import { StyledBaseImage } from './Card.styled';


const Card = ({
    id,
    variant,
    srcImage,
    rounded,
    title,
    content,
    ...otherProps
}) => (
    <StyledContainer id={id} variant={variant} {...otherProps}>
        <StyledTop rounded={rounded}>
            <StyledBaseImage src={srcImage} rounded={rounded} />
        </StyledTop>
        <StyledBottom>
            <StyledTitle>{title}</StyledTitle>
            <StyledDescription text={content}/>
        </StyledBottom>
    </StyledContainer>
);


Card.propTypes = {
    /**
     * Link id
     */
    id: PropTypes.string,
    /**
     * Image src
     */
    srcImage: PropTypes.string,
    /**
     * Image type
     */
    rounded: PropTypes.bool,
    /**
     * Card heading
     */
    heading: PropTypes.string,
    /**
     * Card content
     */
    content: PropTypes.string,
};

Card.defaultProps = {
    id: 'heading-section-id',
    srcImage:"",
    rounded:false,
    heading: "Heading",
    content: "Content"
};

export default Card