import React from "react";
import { StyledLoaderInline } from "./LoadingInline.styled";

export const LoadingInline = ({ active, loadingText }) => {
  return (
    <StyledLoaderInline className="wrapper-inline" active={active}>
      <div className="loader-container-flex">
        <div className="loader"></div>
        <p className="loader-text">{loadingText}</p>
      </div>
    </StyledLoaderInline>
  );
};

LoadingInline.defaultProps = {
  active: true,
  loadingText: "Loading...",
};
