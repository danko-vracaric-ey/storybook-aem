import styled from "styled-components";

export const StyledFormTextArea = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;

  label {
    font-size: 1.5rem;
  }

  textarea {
    /* width: 500px; */
    padding: 10px 20px;
    border: 1px solid #000;
  }

  textarea:focus {
    border: none;
    outline: 2px solid #000;
  }

  textarea::placeholder {
    color: #494949;
    border: none;
  }
`;
