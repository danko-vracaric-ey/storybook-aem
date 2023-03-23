import React from "react";
import { StyledLoader } from "./Loading.styled";

export const Loading = ({ active, small, loadingText }) => {
  return (
    <StyledLoader className="loader-container" active={active} small={small}>
      <div className="loader"></div>
      <p className="loader-text">{loadingText}</p>
    </StyledLoader>
  );
};

Loading.defaultProps = {
  active: true,
  small: false,
  loadingText: "Loading...",
};
