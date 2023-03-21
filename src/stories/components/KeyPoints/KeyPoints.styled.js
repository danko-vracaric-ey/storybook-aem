import styled, {css} from "styled-components";
import HeadingParagraph from "../HeadingParagraph/HeadingParagraph";
import Paragraph from "../Paragraph/Paragraph"

export const StyledContainer = styled.div`
    background-color: rgba(252, 250, 245);
    padding:24px 0;
    border-top:1px solid #BFA5A4;
    border-bottom:1px solid #BFA5A4;
`
export const StyledHeadingParagraph = styled(HeadingParagraph)`
    margin-top: 4px;
`

export const StyledLeft = styled.div`
    display: flex;
    align-items: flex-start;
    min-width: 5vw;
    ${props=>props.variant === "secondary" && css`
    justify-content: center;
        `}
`

export const StyledKeyPointWrapper = styled.div`
    display: flex;
    &:not(:last-child) {
        margin-bottom: 1rem;
    }
`


export const StyledPointWrapper = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: start;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    ${props=>props.variant === "secondary" && css`
        border: 1px solid rgba(194, 94, 94);
        justify-content: center;
        border-radius: 100px;
        `}
`




export const StyledPoint = styled.span`
    border: 1px solid rgba(194, 94, 94);
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 4vw;
    margin: 10px 0;
    margin-right: 5px;

    ${props=>props.variant === "secondary" && css`
        border: 1px solid rgba(194, 94, 94);
        background-color: rgba(194, 94, 94);;
        height: 10px;
        margin-top: .26rem;
        border-radius: 100px;
        height: 10px;
        width: 10px;
        border-radius: 50%;
        margin-left: .5rem;
        `}
`

export const StyledParagraph = styled(Paragraph)`
text-align: left;
margin: 0;
padding: 0 .5rem;
line-height: 1.2rem;
`