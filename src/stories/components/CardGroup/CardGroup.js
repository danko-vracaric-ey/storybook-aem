import React from 'react';
import PropTypes from 'prop-types';
import { StyledContainer} from "./CardGroup.styled" 
import Card from '../Card/Card';


const CardGroup = ({
    cardGroupData,
    ...otherProps
}) => (
    <StyledContainer {...otherProps}>
       {cardGroupData.map(({id, variant, srcImage, rounded, heading, content })=>{
        return <Card id={id} variant={variant} srcImage={srcImage} rounded={rounded} heading={heading} content={content}/>
       })}
    </StyledContainer>
);


CardGroup.propTypes = {
   /**
     * Card group data
     */
   cardGroupData: PropTypes.array,
};

CardGroup.defaultProps = {
    cardGroupData:[]
};

export default CardGroup