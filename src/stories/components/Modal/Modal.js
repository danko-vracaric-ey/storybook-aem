import React from 'react';
import PropTypes from 'prop-types';
import { StyledModalContainer, StyledModalWrapper,StyledContentHolder, StyledButtonsWrapper } from './Modal.styled';
import Paragraph from '../Paragraph/Paragraph';
import HeadingParagraph from '../HeadingParagraph/HeadingParagraph';
import Button from '../Button/Button';


const Modal = ({
    id,
    buttonOneText,
    buttonTwoText,
    onCancel,
    onConfirm,
}) => {

return (
    <StyledModalContainer id={id}>
        <StyledModalWrapper>
            <StyledContentHolder>
                <HeadingParagraph text="Modal Heading"/>
                <Paragraph text="Content text"/>
            </StyledContentHolder>
            <StyledButtonsWrapper>
            <Button mr={10} label={buttonOneText} onClick={onCancel}/>
            <Button ml={10} label={buttonTwoText} onClick={onConfirm}/>
            </StyledButtonsWrapper>
        </StyledModalWrapper>
    </StyledModalContainer>
);
}

Modal.propTypes = {
    /**
     * Modal id
     */
    id: PropTypes.string,
    /**
     * Text displayed in the button
     */
    buttonOneText: PropTypes.string,
    /**
     * Text displayed in the button
     */
    buttonTwoText: PropTypes.string,
    /**
     * Optional click handler
     */
    onCancel: PropTypes.func,
    /**
     * Optional click handler
     */
    onConfirm: PropTypes.func,
};

Modal.defaultProps = {
    id: 'text-id',
    buttonOneText:"",
    buttonTwoText:"",
    onCancel: ()=>{},
    onConfirm: ()=>{}

};

export default Modal