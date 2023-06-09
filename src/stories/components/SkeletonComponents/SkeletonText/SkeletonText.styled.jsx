import styled, { css } from "styled-components";

export const StyledSkeletonText = styled.div`
  .skeleton-text {
    position: relative;
    overflow: hidden;
    height: 25px;
    width: 100%;
    margin-bottom: 5px;
    ${({ rounded }) =>
      rounded &&
      css`
        border-radius: 5px;
      `}
    background-color: rgba(206, 206, 206, 0.75);

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      height: 25px;
      width: 100%;
      background-color: rgba(78, 78, 78, 0.95);
      filter: blur(2px);
      animation: 2.5s skeleton-loading linear infinite 1s;
    }

    @keyframes skeleton-loading {
      0% {
        opacity: 0;
        width: 0;
      }

      100% {
        background-color: rgba(206, 206, 206, 0.75);
        opacity: 1;
        width: 110%;
      }
    }
  }

  ${({ variant }) =>
    variant !== "single" &&
    css`
      .skeleton-text:last-child {
        width: 85%;
      }
    `}
`;
