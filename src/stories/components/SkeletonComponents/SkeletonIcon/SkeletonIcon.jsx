import React from "react";
import PropTypes from "prop-types";
import { StyledSkeletonIcon } from "./SkeletonIcon.styled";

export const SkeletonIcon = ({ size, rounded }) => {
  return <StyledSkeletonIcon size={size} rounded={rounded} />;
};

SkeletonIcon.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  rounded: PropTypes.oneOf(["none", "chamfer", "full"]),
};

SkeletonIcon.defaultProps = {
  size: "small",
  rounded: "none",
};
