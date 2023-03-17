import styled from "styled-components";

export const StyledBaseDropdown = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;

  select {
    padding: 10px 15px;
    border: 1px solid #000;
  }

  select:focus {
    outline: 2px solid #000;
  }
`;
