import React from 'react';
import PropTypes from 'prop-types';
import { StyledContainer, StyledHeadingParagraph, StyledLeft, StyledKeyPointWrapper,StyledPointWrapper, StyledPoint, StyledParagraph } from "./KeyPoints.styled" 

const KeyPoints = ({
    id,
    headLine,
    keyPointsData,
    variant,
    className,
    ...otherProps
}) => (
    <StyledContainer id={id} className={className} {...otherProps}>
        <StyledHeadingParagraph text={`${headLine ? headLine : "Key Points"}`}/>
        {keyPointsData.map((oneKeyPoint, keyPointOrderNumber)=>{
            return <StyledKeyPointWrapper key={(oneKeyPoint && oneKeyPoint.key) || keyPointOrderNumber}>
            <StyledLeft variant={variant}>
                <StyledPointWrapper>
                    <StyledPoint variant={variant}/>
                </StyledPointWrapper>
            </StyledLeft>
                <StyledParagraph text={oneKeyPoint.content}/>
        </StyledKeyPointWrapper>
        })
        }
    </StyledContainer>
);

KeyPoints.propTypes = {
    /**
     * ImageLink id
     */
    id: PropTypes.string,
    /**
     * Optional headline
     */
    headLine: PropTypes.string,
    /**
     * Content data
     */
    keyPointsData: PropTypes.array,
    /**
     * One of two possible states of Key Points
     */
    variant: PropTypes.oneOf(['primary', 'secondary']),
     /**
     * Optional ImageLink class name
     */
    className: PropTypes.string,
};

KeyPoints.defaultProps = {
    id:"key-points-id",
    headLine: "",
    keyPointsData:[],
    variant: "primary",
    className:""
};

export default KeyPoints