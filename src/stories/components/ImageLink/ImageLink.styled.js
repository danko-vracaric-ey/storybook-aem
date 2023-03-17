import styled from "styled-components";
import BaseImage from "../BaseImage/BaseImage";
import TextBox from "../TextBox/TextBox";
import Link from "../Link/Link";

export const StyledContainer = styled.div`
    display: flex;
    -webkit-box-shadow: 0 0.3rem 0.3rem black;
        box-shadow: 0 0.3rem 0.3rem black;

@media (max-width: 768px) {
        flex-direction: column;
  }
`

export const StyledWrapper = styled.div`
flex:2;
display: flex;
align-items: end;
justify-content: center;
flex-direction: column;
padding: 20px;

`
export const StyledBaseImage = styled(BaseImage)`
    height: 60vh;
    img {
        height: 100%;
        object-fit: "cover";
    }
`

export const StyledTextBox = styled(TextBox)`
    margin: 10px;
    width: 80%;
    margin-top: 15px;
`
export const StyledLink = styled(Link)`
    justify-content: end;
`
