import styled, { css } from "styled-components";

export const StyledProgressBar = styled.div`
  border-radius: 0.25rem;
  display: flex;
  overflow: hidden;
  height: 3px;
  background-color: lightgray;

  .progressBar {
    width: ${({ progress }) => (progress ? `${progress}%` : 0)};
    transition: 0.5s;
  }

  ${({ variant }) =>
    variant === "primary" &&
    css`
      .progressBar {
        background-color: #c25e5e;
      }
    `}

  ${({ variant }) =>
    variant === "secondary" &&
    css`
      .progressBar {
        background-color: #728434;
      }
    `}
`;
