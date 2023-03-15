import styled, {css} from "styled-components";

export const StyledHeading = styled.h1`
    text-transform: uppercase;
    backface-visibility: hidden; /*stops it from being shaky, moving slightly up and down*/
    margin-bottom: 5rem;
    font-size: 2rem;
    letter-spacing: 3rem;
        font-size: 5rem;
        font-weight: 400;
        animation-duration: 1.5s;


        ${props => props.variant === "primary" && css`
            color: rgba(194, 94, 94);
        `}
        ${props => props.variant === "secondary" && css`
            color: rgba(114, 132, 52);
        `}
        ${props => props.variant === "tertiary" && css`
        color: rgba(252, 250, 245);
        `}
        
    ${props => props.animated === 'left'&& css`
        animation-name: moveInLeft;
        @keyframes moveInLeft {
        0% {
        opacity: 0;
        transform: translateX(-50%);
        }
        100% {
        opacity: 1;
        transform: translate(0);
        }   
    }
        `};

    ${props => props.animated === 'right'&& css`
        animation-name: moveInRight;
       @keyframes moveInRight {
        0% {
        opacity: 0;
        transform: translateX(25%);
        }

        100%{
        opacity: 1;
        transform: translateX(0);
        }
    }
        `};

        @media only screen and (max-width: "425px") {            
            letter-spacing: 1rem;
            font-size: 1rem;
            } 
`
