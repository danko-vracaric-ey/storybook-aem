import React from 'react';
import PropTypes from 'prop-types';
import { StyledContainer, StyledWrapper, StyledHeadingParagraph,StyledTitle, StyledParagraph } from "./Heroes.styled" 
import Image from "../../assets/images/spaceX-launch.webp";
import Link from '../Link/Link';

const Heroes = ({
    id,
    title,
    headingText,
    linkText,
    variant,
    className,
    ...otherProps
}) => (
    <StyledContainer backgroundImage={Image} backgroundPosition={"bottom"} variant={variant} id={id} className={className} {...otherProps}>
        <StyledWrapper variant={variant}>
            <StyledHeadingParagraph variant={variant} text={headingText}/>
            <StyledTitle variant={variant}>{title}</StyledTitle>
            {variant === "large" ? <StyledParagraph variant={variant} text="Crawl, walk and even climb rock walls, this robot was designed to operate in extreme terrains." />:<Link text={linkText}/>}
        </StyledWrapper>
    </StyledContainer>
);

Heroes.propTypes = {
    /**
     * ImageLink id
     */
    id: PropTypes.string,
    /**
     * Optional Title
     */
      title: PropTypes.string,
    /**
     * Optional heading text
     */
      headingText: PropTypes.string,
    /**
     * Optional heading text
     */
      linkText: PropTypes.string,
    /**
     * One of two possible states of Key Points
     */
      variant: PropTypes.oneOf(['small', 'medium','large']),
     /**
     * Optional ImageLink class name
     */
       className: PropTypes.string,
};

Heroes.defaultProps = {
    id:"key-points-id",
    title:"Title",
    headingText:"Heading",
    linkText:"link",
    className:""
};

export default Heroes