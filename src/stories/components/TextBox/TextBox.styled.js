import styled, {css} from "styled-components";

export const StyledTextBox = styled.div`
    font-size: 0.8rem;
    background-color: white;
    color: #798897;
    border-radius: 6px;
    font-weight: 400;
    padding: 1.5rem;

    ${props => props.variant === 'primary' && css`
        box-shadow: 0 0.3rem 0.3rem rgba(194, 94, 94);
    `}
    ${props => props.variant === 'secondary' && css`
        box-shadow: 0 0.3rem 0.3rem rgba(114, 132, 52);
    `}
`