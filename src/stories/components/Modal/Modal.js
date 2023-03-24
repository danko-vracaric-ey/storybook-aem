import React from 'react';
import PropTypes from 'prop-types';
import { StyledModalContainer, StyledModalWrapper,StyledContentHolder, StyledButtonsWrapper } from './Modal.styled';
import Paragraph from '../Paragraph/Paragraph';
import HeadingParagraph from '../HeadingParagraph/HeadingParagraph';
import Button from '../Button/Button';


const Modal = ({
    id,
    modalHeading,
    modalContent,
    buttonOneText,
    buttonTwoText,
    onCancel,
    onConfirm,
    className,
    ...otherProps
}) => {

return (
    <StyledModalContainer id={id} className={className} {...otherProps}>
        <StyledModalWrapper>
            <StyledContentHolder>
                <HeadingParagraph text={modalHeading}/>
            </StyledContentHolder>
                <Paragraph text={modalContent}/>
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
     * Modal heading
     */
    modalHeading: PropTypes.string,
    /**
     * Modal content
     */
    modalContent: PropTypes.string,
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
    /**
     * Optional modal class name
     */
    className: PropTypes.string
};

Modal.defaultProps = {
    id: 'text-id',
    buttonOneText:"",
    buttonTwoText:"",
    onCancel: ()=>{},
    onConfirm: ()=>{}

};

export default Modal