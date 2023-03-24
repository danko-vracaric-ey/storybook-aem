import styled from "styled-components";
import Paragraph from "../Paragraph/Paragraph";
import BaseImage from "../BaseImage/BaseImage";
import Link from "../Link/Link";

export const StyledContainer = styled.div`
min-height: 150px;
padding: 30px 20px;
`

export const StyledPointWrapper = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
`
export const StyledPoint = styled.span`
    border: 1px solid rgba(194, 94, 94);
    width: 10vw;
    margin: 10px 0;
    margin-right: 5px;
`

export const StyledParagraph = styled(Paragraph)`
    font-style: italic;
    color: red;
    font-size: 2.5rem;
    text-align: center;

    @media (max-width: 1260px) {
    font-size: 1.75rem;
    margin-bottom: 2rem !important;
  }
`

export const StyledQuoteeWrapper = styled.div`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
`

export const StyledQuoteeContentHolder = styled.div`
min-width:400px ;
display: flex;
align-items: center;
justify-content: center;
margin-bottom: 40px;

@media (max-width: 1260px) {
            margin-bottom: 20px;
  }
`

export const StyledQuoteeDetails = styled.div`
    display: flex;


`

export const StyledSecondPointWrapper = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
`
export const StyledSecondPoint = styled.span`
    border: 1px solid rgba(111,111,111);
    width: 10px;
    margin: 10px 0;
    margin-right: 5px;
`
export const StyledQuoteeName = styled(Paragraph)`
text-align: left;
margin: 0;
padding: 0 .5rem;
line-height: 1.2rem;
color: rgba(111,111,111);
`
export const StyledImageWrapper = styled(BaseImage)`
        margin-right: 30px;
    img{
        border-radius: 100px;
        height: 80px;
        width: 80px;
        @media (max-width: 1260px) {
            height: 60px;
            width: 60px;
  }
    }
`

export const StyledQuoteeNameLinked = styled(Link)`
    text-align: left;
    margin: 0;
    padding: 0 .5rem;
    line-height: 1.2rem;
`