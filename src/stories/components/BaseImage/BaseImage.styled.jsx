import styled from "styled-components";

export const StyledBaseImage = styled.div`
  width: ${({ width }) => width};
  height: ${({ height }) => height};

  img {
    width: 100%;
    /* height: ${({ height }) => height}; */
  }
`;
