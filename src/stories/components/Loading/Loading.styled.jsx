import styled, { css } from "styled-components";

export const StyledLoader = styled.div`
  display: flex;
  align-items: center;

  .loader {
    position: relative;
    width: 90px;
    height: 90px;
    ${({ small }) =>
      small &&
      css`
        width: 60px;
        height: 60px;
      `}
    border-radius: 50%;
    background: linear-gradient(45deg, transparent, transparent 40%, orangered);
    ${({ active }) =>
      active &&
      css`
        animation: animate 1.5s linear infinite;
      `}

    &::before {
      content: "";
      position: absolute;
      top: 6px;
      right: 6px;
      bottom: 6px;
      left: 6px;
      border-radius: 50%;
      background-color: #fff;
    }

    ${({ active }) =>
      active &&
      css`
        @keyframes animate {
          0% {
            transform: rotate(0deg);
            filter: hue-rotate(0deg) blur(1px);
          }

          100% {
            transform: rotate(360deg);
            filter: hue-rotate(360deg) blur(1px);
          }
        }
      `}
  }

  .loader-text {
    margin: 0;
    margin-left: 20px;
    font-size: 2rem;
    ${({ small }) =>
      small &&
      css`
        font-size: 1.5rem;
      `}
  }
`;
