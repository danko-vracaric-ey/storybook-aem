import styled from "styled-components";
import BaseImage from "../BaseImage/BaseImage";


export const StyledLabel = styled.p`
display: flex;
flex-direction: row;
margin: 0;
margin-right: 5px;
`

export const StyledLogo = styled(BaseImage)`
    display: flex;
    align-items: center;
img{
    height: 16px;
    width: 16px;
    margin: 8px;
}
`