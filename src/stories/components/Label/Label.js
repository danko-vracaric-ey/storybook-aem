import React from 'react';
import PropTypes from 'prop-types';
import { StyledLabel, StyledLogo } from './Label.styled';
import Paragraph from '../Paragraph/Paragraph';

const Label = ({
    id,
    text,
    className, 
    labelLogo, ...otherProps
}) => (
    <StyledLabel id={id} className={className} {...otherProps}>
        <StyledLogo src={labelLogo}/>
        <Paragraph text={text}/>
    </StyledLabel>
);


Label.propTypes = {
    /**
     * TextBox id
     */
    id: PropTypes.string,
    /**
     * Which text to be displayed
     */
    text: PropTypes.node.isRequired,
    /**
     * Logo image to be displayed
     */
    labelLogo: PropTypes.string,
    /**
     * Optional classname
     */
    className: PropTypes.string,
};

Label.defaultProps = {
    id: 'label-id',
    text: "Content",
    className:"",
    labelLogo:""
};

export default Label