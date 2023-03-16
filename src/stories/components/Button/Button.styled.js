import styled, { css } from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const StyledButton = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 50px;
    box-shadow: none;
    width: ${props => props.width === ''  ? '100%' : props.width};
    margin-top: ${({ mt }) => `${mt}px`};
    margin-bottom: ${({ mb }) => `${mb}px`};
    margin-left: ${({ ml }) => `${ml}px`};
    margin-right: ${({ mr }) => `${mr}px`};
    font-size: 18px;
    font-weight: 500;
    line-height: 1.35;
    padding: 15px 20px;
    cursor: pointer;
    border-radius: 0;
    transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out, border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    
    @media only screen and (min-width: "768px") {            
            width: auto;        
            padding: 15px 50px;
            &:hover {
                padding: 15px 49px;
            }
            &:active, &:focus {
                padding: 15px 48px;
            }
        }  
    
    &:not(:disabled):active:focus,
    &:not(:disabled):focus-visible {
        box-shadow: 0 0 0 0.2rem rgb(38, 143, 255, 50%);
        outline-width: 0;
    }

    // PRIMARY
    ${(props) => props.btnStyle === 'primary'
        && !props.disabled
        && css`
            color: rgba(194, 94, 94);
            background-color: rgba(252, 250, 245);
            border: 1px solid rgba(194, 94, 94);

            &:hover {
                cursor: pointer;
                color: rgba(194, 94, 94);
                background-color: rgba(252, 250, 245);
                border: 2px solid rgba(194, 94, 94);
            }
            &:active,
            &:focus {
                cursor: pointer;
                color: rgba(194, 94, 94);
                background-color: rgba(252, 250, 245);
                border: 3px solid rgba(194, 94, 94);
            }
        `}

    // PRIMARY - DISABLED
  ${(props) => props.btnStyle === 'primary'
        && props.disabled
        && css`
            color: gray;
            background-color: rgba(252, 250, 245, 0.8);
            border: 1px solid gray;
            &:hover {
                color: gray;
                background-color: rgba(252, 250, 245, 0.8);
                border: 1px solid gray;
                cursor: not-allowed;
            }
            @media only screen and (min-width: "768px") {            
                width: auto;        
                    padding: 15px 50px;
                    &:hover {
                        padding: 15px 50px;
                    }
        
            }    
        `}      
    
    // SECONDARY
    
    ${(props) => props.btnStyle === 'secondary'
        && !props.disabled
        && css`
            color: rgba(114, 132, 52);
            background-color: rgba(252, 250, 245);
            border: 1px solid rgba(114, 132, 52);

            &:hover {
                cursor: pointer;
                color: rgba(114, 132, 52);
                background-color: rgba(252, 250, 245);
                border: 2px solid rgba(114, 132, 52);
            }
            &:active,
            &:focus {
                cursor: pointer;
                color: rgba(114, 132, 52);
                background-color: rgba(252, 250, 245);
                border: 3px solid rgba(114, 132, 52);
            }
        `}
    
    // SECONDARY - DISABLED
  ${(props) => props.btnStyle === 'secondary'
        && props.disabled
        && css`
            cursor: not-allowed;
            color: gray;
            background-color: rgba(252, 250, 245, 0.8);
            border: 1px solid gray;
            &:hover {
                color: gray;
                background-color: rgba(252, 250, 245, 0.8);
                border: 1px solid gray;
                cursor: not-allowed;
            }
            @media only screen and (min-width: "768px") {            
                width: auto;        
                    padding: 14px 49px;
                    &:hover {
                        padding: 14px 49px;
                    }
            } 
        `}      
`;
