import styled from "styled-components";

export const StyledModalContainer = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
`
export const StyledModalWrapper = styled.div`
  height: 45vh;
  width: 45vw;

  position: relative;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  background-color: white;
  box-shadow: 0.3rem 0.3rem 0.3rem 0.3rem  black;
  border-radius: 3px;
  text-align: center;

  @media (max-width: 768px) {
       width: 65vw;
       height: 45vh;
  }
  @media (max-height: 768px) {
    height: 70vh;
       
  }
`

export const StyledContentHolder = styled.div`
    text-align: center;
`
export const StyledButtonsWrapper = styled.div`
    
    height: 60px;
    display: flex;
    justify-content: space-around;

    button{
      @media (max-width: 768px) {
       height: 30px;
  }
      @media (max-width: 425px) {
        height: 20px;
  }
  @media (max-height: 768px) {
    height: 30px;
  }
    }
`