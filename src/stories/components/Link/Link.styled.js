import styled, { css } from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const StyledLink = styled.a`
      font-size: 1rem;
      color: ${props => props.variant === "primary" ? '#C25E5E' : '#728434'};
      display: inline-block;
      text-decoration: none;
      border: 1.5px solid ${props => props.variant === "primary" ? '#C25E5E' : '#728434'};
      padding: .3rem 3rem;
      transition: all 0.2s;
      position:relative; 
      width: ${props => props.width === ''  ? '100%' : props.width};
      text-align: center;
 
    // NOT DISABLED
    ${(props) => !props.disabled
        && css`
        &:hover {
            background-color: ${props => props.variant === "primary" ? '#C25E5E' : '#728434'};
            transform: translateY(-3px);
            box-shadow: 0 0.7rem 1.7rem rgba(0,0,0, 0.8);
            color: white;
            cursor: pointer;
      }
      &:active {
            box-shadow: 0 0.3rem 0.3rem rgba(0,0,0, 0.4);
            transform: translateY(3px);
      }
      @media only screen and (min-width: "768px") {            
            width: auto;        
            padding: 0.15rem 0.15rem;
        }       
        `}
    
    //DISABLED
    ${(props) => props.disabled
    && css`
         color: black;
        border: 1px solid black;
        cursor: not-allowed;
        transition: none; 
        @media only screen and (min-width: "768px") {            
            width: auto;        
            padding: 0.15rem 0.15rem;
        }      
    `}      
`