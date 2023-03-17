import React from 'react';
import PropTypes from 'prop-types';
import { StyledContainer, StyledLogo, StyledLinkWrapper } from './Header.styled';
import Link from '../Link/Link';


const Header = ({
    id,
    headerLogo,
    linksData,
    ...otherProps
}) => (
    <StyledContainer id={id} {...otherProps}>
        <StyledLogo src={headerLogo}/>
        <StyledLinkWrapper>
            {linksData.map(({text, linkHandler, disabled, variant, className}, i )=>{
                return <Link text={text} onClick={linkHandler} disabled={disabled} key={"link"+ text + i} variant={variant} className={className}/>
            })}
        </StyledLinkWrapper>
    </StyledContainer>
);


Header.propTypes = {
    /**
     * Link id
     */
    id: PropTypes.string,
    /**
     * Logo image source
     */
    headerLogo: PropTypes.string,
    /**
     * Links data
     */
    linksData: PropTypes.array,
};

Header.defaultProps = {
    id: 'header-information-id',
    headerLogo: ""

};

export default Header