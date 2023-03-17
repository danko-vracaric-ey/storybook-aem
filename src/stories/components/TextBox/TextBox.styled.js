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

    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box !important;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    word-break: break-word;
    white-space: normal;
    font-size: smaller;

    ${props => props.interactive && css`
    transition: all 0.2s;
    box-shadow: 0 0.3rem 0.3rem rgba(0,0,0, 0.8);

    &:hover{
        transform: translateY(-1rem) scale(1.1);
        padding: -10px;
           ${props => props.variant === 'primary' && css`
        box-shadow: 0 0.3rem 0.3rem rgba(194, 94, 94);
    `}
    ${props => props.variant === 'secondary' && css`
        box-shadow: 0 0.3rem 0.3rem rgba(114, 132, 52);
    `}
    }

    &:active{
        ${props => props.variant === 'primary' && css`
        box-shadow: 0 0.6rem 0.6rem rgba(194, 94, 94);
    `}
    ${props => props.variant === 'secondary' && css`
        box-shadow: 0 0.6rem 0.6rem rgba(114, 132, 52);
    `}
    }
     `
    }  
`