import styled from "styled-components";
import Label from "../Label/Label";

export const StyledContainer = styled.div`
box-sizing: border-box;
min-height: 350px;
width: 100%;
background: rgba(252,250,245,1);
position: absolute;
bottom: 0;
`

export const StyledDetails = styled.div`
min-height: 90%;
box-sizing: border-box;
padding: 3rem 3.5rem 2rem 3.5rem;

@media (max-width: 768px) {
        padding: 2rem 2.5rem 1rem 2.5rem;
  }
      @media (max-width: 425px) {
        padding: 1rem 1.5rem 1rem 1.5rem
  }
`

export const StyledNotice = styled.div`
box-sizing: border-box;
height: 10%;
background-color: #e2e1dc;
padding: 1rem 3.5rem;
    p{
        margin: 0;
    }

    @media (max-width: 768px) {
        padding: 2rem 2.5rem 1rem 2.5rem;
  }
      @media (max-width: 425px) {
        padding: 1rem 1.5rem 1rem 1.5rem
  }
`

export const StyledInfoWrapper=styled.div`
display: flex;
align-items: center;
`

export const StyledLabel = styled(Label)`
    margin-right: 15px;
    font-weight: 700;

    p{
        margin:8px 0;
    }
`

export const StyledAdditionalDetail = styled.div`
        width: 40vw;

        @media (max-width: 1024px) {
        width: 50vw;
  }        
        @media (max-width: 768px) {
        width: 100%;
  }        
`
export const StyledLinksWrapper = styled.div`
    a {
        margin-right: 16px;
        margin-top: 8px;
    }

    @media (max-width: 425px) {
        margin-right: 8px;
  }
`
