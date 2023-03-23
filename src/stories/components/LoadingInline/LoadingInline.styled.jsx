import styled, { css } from "styled-components";

export const StyledLoaderInline = styled.div`
  display: inline-block;

  .loader-container-flex {
    display: flex;
    align-items: center;

    .loader {
      position: relative;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: linear-gradient(
        45deg,
        transparent,
        transparent 40%,
        orangered
      );
      ${({ active }) =>
        active &&
        css`
          animation: animate 1.5s linear infinite;
        `}

      &::before {
        content: "";
        position: absolute;
        top: 2px;
        right: 2px;
        bottom: 2px;
        left: 2px;
        border-radius: 50%;
        background-color: #fff;
      }
    }

    .loader-text {
      position: relative;
      margin: 0;
      margin-left: 7.5px;
      font-size: 0.9rem;
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
`;
