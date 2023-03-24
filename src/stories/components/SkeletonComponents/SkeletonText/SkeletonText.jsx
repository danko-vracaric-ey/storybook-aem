import React from "react";
import PropTypes from "prop-types";
import { StyledSkeletonText } from "./SkeletonText.styled";

export const SkeletonText = ({ variant, rounded }) => {
  let arr =
    variant === "single"
      ? [null]
      : variant === "double"
      ? [null, null]
      : [null, null, null, null, null];

  return (
    <StyledSkeletonText
      className="skeleton-text-wrapper"
      variant={variant}
      rounded={rounded}
    >
      {arr.map((el, idx) => (
        <div className="skeleton-text" key={`skeleton-${idx}`} />
      ))}
    </StyledSkeletonText>
  );
};

SkeletonText.propTypes = {
  variant: PropTypes.oneOf(["single", "double", "paragraph"]),
  rounded: PropTypes.bool,
};

SkeletonText.defaultProps = {
  variant: "double",
  rounded: false,
};
