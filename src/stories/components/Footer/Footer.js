import React from 'react';
import PropTypes from 'prop-types';
import { StyledContainer, StyledDetails, StyledNotice, StyledInfoWrapper, StyledLabel, StyledAdditionalDetail, StyledLinksWrapper } from "./Footer.styled" 
import Image from "../../assets/images/info.png";
import Link from '../Link/Link';
import Paragraph from '../Paragraph/Paragraph';
import HeadingParagraph from '../HeadingParagraph/HeadingParagraph';

const Footer = ({
    id,
    editors,
    managers,
    pageUpdateDate,
    additionalInformation,
    className,
    linksHeading,
    linksData,
    noticeText,
    ...otherProps
}) => (
    <StyledContainer id={id} className={className} {...otherProps}>
        <StyledDetails>
        <StyledInfoWrapper>
            <StyledLabel text="Site Editors:" labelLogo={Image}/> 
            {editors.map((editor, editorNumber, editors)=>{
                console.log(editors)
                if(editorNumber !== editors.length -1){
                return (<div key={(editor && editor.key) || editor.name + editorNumber}><Link text={`${editor.name}`} href={`mailto:${editor.email}`} variant="default"/><span>,</span></div>)
                }
                if(editorNumber !== editors.length -1 && editorNumber !== 0 ){
                return (<div key={(editor && editor.key) || editor.name + editorNumber}>&nbsp;<Link text={`${editor.name}`} href={`mailto:${editor.email}`} variant="default"/><span>,</span></div>)
                }
                else{
                    return (<div key={(editor && editor.key) || editor.name + editorNumber}>&nbsp;<Link text={`${editor.name}`} href={`mailto:${editor.email}`} variant="default"/></div>)
                }
            })}
        </StyledInfoWrapper>
        <StyledInfoWrapper>
            <StyledLabel text="Site Managers:" labelLogo={Image}/> 
            {managers.map((manager, managerNumber, managers)=>{
                console.log(editors)
                if(managerNumber !== managers.length -1){
                return (<div key={(manager && manager.key) || manager.name + managerNumber}><Link text={`${manager.name}`} href={`mailto:${manager.email}`} variant="default"/><span>,</span></div>)
                }
                if(managerNumber !== editors.length -1 && managerNumber !== 0 ){
                return (<div key={(manager && manager.key) || manager.name + managerNumber}>&nbsp;<Link text={`${manager.name}`} href={`mailto:${manager.email}`} variant="default"/><span>,</span></div>)
                }
                else{
                    return (<div key={(manager && manager.key) || manager.name + managerNumber}>&nbsp;<Link text={`${manager.name}`} href={`mailto:${manager.email}`} variant="default"/></div>)
                }
            })}
        </StyledInfoWrapper>
        <StyledInfoWrapper>
            <StyledLabel text="Page last updated" labelLogo={Image}/> 
            <span>{pageUpdateDate}</span>
        </StyledInfoWrapper>
            <StyledAdditionalDetail><Paragraph text={additionalInformation}/></StyledAdditionalDetail>
            <HeadingParagraph text={linksHeading}/>
            <StyledLinksWrapper>
            {linksData.map(({text, linkHandler, disabled, variant, className}, i )=>{
                return <Link text={text} onClick={linkHandler} disabled={disabled} key={"link"+ text + i} variant={variant} className={className}/>
            })}
            </StyledLinksWrapper>
        </StyledDetails>
        <StyledNotice>
            <Paragraph text={noticeText}/>
        </StyledNotice>
    </StyledContainer>
);

Footer.propTypes = {
    /**
     * Footer id
     */
    id: PropTypes.string,
    /**
     * Editors data
     */
    editors: PropTypes.array,
    /**
     * Managers data
     */
    managers: PropTypes.array,
    /**
     * Page update date
     */
    pageUpdateDate: PropTypes.string,
    /**
     * Additional information
     */
    additionalInformation: PropTypes.string,
     /**
     * Links heading text
     */
     linksHeading: PropTypes.string,
    /**
     * Notice text
     */
    noticeText: PropTypes.string,
     /**
     * Optional Footer class name
     */
    className: PropTypes.string,
};

Footer.defaultProps = {
    id:"footer-id",
    className:"",
    editors: [],
    managers: [],
    pageUpdateDate:"",
    additionalInformation:"",
    linksHeading: "",
    noticeText: "",
};

export default Footer