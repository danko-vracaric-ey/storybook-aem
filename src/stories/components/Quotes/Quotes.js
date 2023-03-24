import React from 'react';
import PropTypes from 'prop-types';
import { StyledContainer, StyledPointWrapper, StyledPoint, StyledParagraph, StyledQuoteeWrapper, StyledQuoteeContentHolder, StyledQuoteeDetails, StyledSecondPointWrapper, StyledSecondPoint, StyledQuoteeName, StyledImageWrapper, StyledQuoteeNameLinked } from "./Quotes.styled" 
import Image from "../../assets/images/spaceX-launch.webp";

const Quotes = ({
    id,
    variant,
    href,
    className,
    ...otherProps
}) => (
    <StyledContainer id={id} className={className} {...otherProps}>
        <StyledPointWrapper>
                    <StyledPoint/>
                </StyledPointWrapper>
                <StyledParagraph text="“A nice thing about it is it doesn't shatter. If impacted, it bends rather than breaks and still has good optical properties.”"/>
                {!(variant === "NoAttribution") && <StyledQuoteeWrapper>
                    <StyledQuoteeContentHolder>
                        {variant === "WithImage" && <StyledImageWrapper src={Image}/>}
                        <StyledQuoteeDetails>
                            <StyledSecondPointWrapper>
                                <StyledSecondPoint/>
                            </StyledSecondPointWrapper>
                            {variant === "WithImage" && <StyledQuoteeName text="Ada Lovelace"/>}
                            {variant === "WithLink" && <StyledQuoteeNameLinked text="Ada Lovelace" variant="default" href={href}/>}
                        </StyledQuoteeDetails>
                    </StyledQuoteeContentHolder>
                </StyledQuoteeWrapper>}
                <StyledPointWrapper>
                    <StyledPoint/>
                </StyledPointWrapper>
    </StyledContainer>
);

Quotes.propTypes = {
    /**
     * ImageLink id
     */
    id: PropTypes.string,
    /**
     * Link href
     */
    href: PropTypes.string,
     /**
     * One of 3 possible states of Quotes
     */
     variant: PropTypes.oneOf(['WithImage', 'WithLink', "NoAttribution"]),
     /**
     * Optional ImageLink class name
     */
    className: PropTypes.string,
};

Quotes.defaultProps = {
    id:"key-points-id",
    variant:"WithImage",
    href:"",
    className:""
};

export default Quotes