import styled, {css} from "styled-components";
import HeadingParagraph from "../HeadingParagraph/HeadingParagraph";
import Paragraph from "../Paragraph/Paragraph";


export const StyledContainer = styled.div`
box-sizing: border-box;
padding: 3rem 3.5rem;
background: url(${props=>props.backgroundImage});
background-size: cover;
background-position: center;
display: flex;
flex-direction: column;
justify-content: flex-end;

${props => props.variant === "small" && css`
    height: 350px;
    `}
    @media (max-width: 768px) {
        padding: 2rem 0.7rem;
  }
${props => props.variant === "medium" && css`
    height: 600px;
    `}
    @media (max-width: 768px) {
        padding: 2rem 0.7rem;
  }
${props => props.variant === "large" && css`
    height: 600px;
    background-position: top;
    justify-content: center;

    @media (max-width: 1024px) {
        justify-content:flex-start;
        padding: 3rem 3.5rem;
  }
    @media (max-width: 768px) {
        padding: 2rem 2.5rem;
  }
  @media (max-width: 480px) {
    padding: 1.7rem 2.2rem;
  }
    `}
   
`


export const StyledWrapper = styled.div`
    width: 30vw;

    @media (max-width: 1024px) {
    width: 40vw;
  }
    @media (max-width: 768px) {
    width: 60vw;
  }
  @media (max-width: 480px) {
    width: 100%;
  }
  ${props => props.variant === "large" && css`
  width:43vw;
    @media (max-width: 1024px) {
        width: 100%;
  }
    `}
`


export const StyledHeadingParagraph = styled(HeadingParagraph)`
    color:white;
    letter-spacing: 0.1rem;
    margin-bottom:7px;

    ${props => props.variant === "large" && css`
    margin-bottom: 10px;
    `}
`

export const StyledTitle = styled.h2`
    color:white;
    font-weight: 700;
    font-size:  2rem;
    margin: 0;
    margin-bottom: 7px;

    ${props => props.variant === "large" && css`
    font-size: 4rem;
        @media (max-width: 1024px) {
       font-size: 2rem;
  }
    `}
`

export const StyledParagraph = styled(Paragraph)`
    color: white;
    font-size: 2rem;
    
    ${props => props.variant === "large" && css`

    @media (max-width: 1024px) {
       font-size: 1.2rem;
  }
    `}
`