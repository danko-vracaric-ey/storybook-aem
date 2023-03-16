import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './Button.styled';

const Button = ({
    id, label, disabled, onClick, onKeyPress, className, btnStyle, width, mt, mb, ml, mr
}) => (
    <StyledButton id={id} disabled={disabled} onClick={onClick} onKeyPress={onKeyPress} className={className} btnStyle={btnStyle} width={width} mt={mt} mb={mb} ml={ml} mr={mr}>
        {label}
    </StyledButton>
);

Button.propTypes = {
    /**
     * Button id
     */
    id: PropTypes.string,
    /**
     * Button contents
     */
    label: PropTypes.string,
    /**
     * Checks if the button should be disabled
     */
    disabled: PropTypes.bool,
    /**
     * Optional click handler
     */
    onClick: PropTypes.func,
    /**
     * Optional onKeyPress handler
     */
    onKeyPress: PropTypes.func,
    /**
     * Optional className for Button
     */
    className: PropTypes.string,
    /**
     * One of two possible states of button
     */
    btnStyle: PropTypes.oneOf(['primary', 'secondary']),
    /**
     * Optional margin-top
     */
    mt: PropTypes.number,
    /**
     * Optional margin-bottom
     */
    mb: PropTypes.number,
    /**
     * Optional margin-left
     */
    ml: PropTypes.number,
    /**
     * Optional margin-right
     */
    mr: PropTypes.number,
    /**
     * Optional width of button
     */
    width: PropTypes.string,
};

Button.defaultProps = {
    id: 'button_id',
    label: 'button',
    disabled: false,
    onClick: () => {},
    onKeyPress: () => {},
    className: '',
    btnStyle: 'primary',
    mt: 0,
    mb: 0,
    ml:0,
    mr:0,
    width: '',
};

export default Button;
