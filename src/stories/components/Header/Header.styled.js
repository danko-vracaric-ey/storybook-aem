import styled from "styled-components";
import BaseImage from "../BaseImage/BaseImage";

export const StyledContainer = styled.div`
    background: rgba(252,250,245,1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
`

export const StyledLogo = styled(BaseImage)`

@media (max-width: 768px) {
    padding-left: 80px;
  }
  @media (max-width: 480px) {
    padding-left: 30px;
  }
    img{
        height: 30px;
        @media (max-height: 768px) {
        height: 48px;
    }
    }
`

export const StyledLinkWrapper = styled.div`
    
`