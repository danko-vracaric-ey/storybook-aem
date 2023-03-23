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
      /* width: ${props => props.width === ''  ? '100%' : props.width}; */
      text-align: center;
      cursor: pointer;

      @media (max-width: 768px) {
        padding: 0.15rem 1rem;
  }
      @media (max-width: 425px) {
        font-size: 0.8rem;
        padding: 0.05rem 0.8rem;
  }

  ${(props)=>(props.variant === "default") && css`
    border: none;
    color:  rgba(83,200,237);
    padding: 0;
    &:hover {
      color:#3b82f680;
    }

    @media (max-width: 768px) {
        padding: 0;
  }
      @media (max-width: 425px) {
        font-size: 1rem;
        padding: 0;
  }
  `}

    // NOT DISABLED
    ${(props) => !props.disabled && (props.variant !== "default")
        && css`
        &:hover {
            background-color: ${props => props.variant === "primary" ? '#C25E5E' : '#728434'};
            transform: translateY(-3px);
            box-shadow: 0 0.7rem 1.6rem rgba(0,0,0, 0.8);
            color: white;
      }
      &:active {
            box-shadow: 0 0.3rem 0.3rem rgba(0,0,0, 0.4);
            transform: translateY(0);
      } 
        `}
    
    //DISABLED
    ${(props) => props.disabled && !(props.variant === "default")
    && css`
         color: black;
        border: 1px solid black;
        cursor: not-allowed;
        transition: none;      
    `}      
    ${(props) => props.disabled && (props.variant === "default")
    && css`
         color: black;
        cursor: not-allowed;
        transition: none;  

        &:hover{
          color: black;
        }
    `}      
`