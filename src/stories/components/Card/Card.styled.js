import styled, {css} from "styled-components";
import BaseImage from "../BaseImage/BaseImage";
import Paragraph from "../Paragraph/Paragraph";
import HeadingParagraph from "../HeadingParagraph/HeadingParagraph";

export const StyledContainer = styled.div`
height: 320px;
  width: 20%;
  margin: 20px;
  margin-bottom: 0px;
  flex-direction: column;
  border-radius: 20px;
  border: 1.2px solid ${props => props.variant === "primary" ? '#C25E5E' : '#728434'};
  ${props => props.variant === 'primary' && css`
        -webkit-box-shadow: 0 0.3rem 0.3rem rgba(194, 94, 94);
        box-shadow: 0 0.3rem 0.3rem rgba(194, 94, 94);
    `}
  ${props => props.variant === 'secondary' && css`
        -webkit-box-shadow: 0 0.3rem 0.3rem rgba(114, 132, 52);
        box-shadow: 0 0.3rem 0.3rem rgba(114, 132, 52);
    `}
    background-color: rgba(252, 250, 245);
  margin-bottom: 10px;

  @media (max-height: 768px) {
    height: 261px;
  }
  @media (max-height: 576px) {
    height: 246px;
  }
  @media (max-width: 768px) {
    width: 42%;
  }
  @media (max-width: 480px) {
    width: 70%;
  }
  @media (max-height: 572px) {
    height: 270px;
  }

`

export const StyledTop = styled.div`
/* max-height: 100%; */
  /* width: 100%; */

  `
export const StyledBaseImage = styled(BaseImage)`

img {
    border-radius: 20px 20px 0 0;
    
    ${props=>props.rounded && css`
    clip-path:circle(35% at 50% 50%);
     `}
}
`

export const StyledBottom = styled.div`
background-color: rgba(252, 250, 245);

text-align: center;
`

export const StyledTitle = styled(HeadingParagraph)`
padding: 5px;
    font-weight: 700;
    font-size: smaller;
    padding: 10px;
`

export const StyledDescription = styled(Paragraph)`
text-overflow: ellipsis;

overflow: hidden;

display: -webkit-box !important;

-webkit-line-clamp: 3;

-webkit-box-orient: vertical;

white-space: normal;
font-size: smaller;
margin: 10px;
margin-top: 15px;
`
