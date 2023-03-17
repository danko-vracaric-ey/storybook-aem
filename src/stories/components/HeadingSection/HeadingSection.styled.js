import styled, {css} from "styled-components";

export const StyledHeadingSection = styled.div`
    font-size: 3.5rem;
    text-transform: uppercase;
    font-weight: 700;
    display: inline-block;
    -webkit-background-clip: text;
    color: transparent;
    letter-spacing: 2px;

    ${props =>props.variant === 'primary' && css`
    background-image: linear-gradient(to right, rgba(194, 94, 94), rgba(122, 67, 67));
    `}
    ${props =>props.variant === 'secondary' && css`
    background-image: linear-gradient(to right, rgba(114, 132, 52), rgba(83, 94, 43));
    `}

`