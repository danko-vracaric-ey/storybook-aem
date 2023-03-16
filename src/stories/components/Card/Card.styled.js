import styled, {css} from "styled-components";

export const StyledContainer = styled.div`
height: 320px;
  width: 20%;
  margin: 20px;
  margin-bottom: 0px;
  flex-direction: column;
  border-top: 1.5px solid ${props => props.variant === "primary" ? '#C25E5E' : '#728434'};
  ${props => props.variant === 'primary' && css`
        -webkit-box-shadow: 0 0.3rem 0.3rem rgba(194, 94, 94);
        box-shadow: 0 0.3rem 0.3rem rgba(194, 94, 94);
    `}
  ${props => props.variant === 'secondary' && css`
        -webkit-box-shadow: 0 0.3rem 0.3rem rgba(114, 132, 52);
        box-shadow: 0 0.3rem 0.3rem rgba(114, 132, 52);
    `}
  background-color: white;
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
min-height: 20vh;
  width: 100%;
`

export const StyledBottom = styled.div`
background-color: rgb(255, 255, 255);

text-align: center;

`

export const StyledTitle = styled.div`
padding: 5px;
    height: 50px;
    font-weight: 700;
    font-size: smaller;
    padding: 10px;
`

export const StyledDescription = styled.div`
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
