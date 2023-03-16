import React from "react";
import PropTypes from "prop-types";
import { StyledProgressBar } from "./ProgressBar.styled";

const ProgressBar = ({ variant, progress, id, className }) => {
  return (
    <StyledProgressBar
      variant={variant}
      progress={progress}
      className={className}
      id={id}
    >
      <div className="progressBar"></div>
    </StyledProgressBar>
  );
};

ProgressBar.propTypes = {
  /**
   * Button id
   */
  id: PropTypes.string,
  /**
   * Progress expressed as % in range [0, 100]
   */
  progress: PropTypes.number,
  /**
   * Style variant
   */
  variant: PropTypes.oneOf(["primary", "secondary"]),
  /**
   * Optional component class name
   */
  className: PropTypes.string,
};

ProgressBar.defaultProps = {
  id: "progress-bar_id",
  progress: 0,
  variant: "primary",
  className: "",
};

export default ProgressBar;
