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
  justify-content: center;
  flex-direction: column;
  background-color: white;
  box-shadow: 0.3rem 0.3rem 0.3rem 0.3rem  black;
  border-radius: 3px;
`

export const StyledContentHolder = styled.div`
    position: absolute;
    top:20%;
    text-align: center;
`
export const StyledButtonsWrapper = styled.div`
    position: absolute;
    bottom: 20%;
    height: 60px;
    display: flex;
    justify-content: space-around;
`