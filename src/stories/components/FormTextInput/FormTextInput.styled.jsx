import styled from "styled-components";

export const StyledFormTextInput = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;

  /* label {
    margin-bottom: 10px;
  } */

  input {
    width: 250px;
    padding: 10px 20px;
    border: 1px solid #000;
  }

  input:focus {
    border: none;
    outline: 2px solid #000;
  }

  input::placeholder {
    color: #494949;
    border: none;
  }
`;
