import React from "react";
import PropTypes from "prop-types";
import { StyledLink } from "./Link.styled";

const Link = ({
  id,
  text,
  onClick,
  disabled,
  variant,
  className,
  ...otherProps
}) => (
  <StyledLink
    id={id}
    onClick={onClick}
    disabled={disabled}
    variant={variant}
    className={className}
    {...otherProps}
  >
    {text}
  </StyledLink>
);

Link.propTypes = {
  /**
   * Link id
   */
  id: PropTypes.string,
  /**
   * Which text to be displayed
   */
  text: PropTypes.node.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
  /**
   * Checks if should be disabled
   */
  disabled: PropTypes.bool,
  /**
   * Optional you can pass secondary variant
   */
  variant: PropTypes.oneOf(["primary", "secondary", "default"]),
  /**
   * Optional className of link
   */
  className: PropTypes.string,
};

Link.defaultProps = {
  id: "link_id",
  text: "link",
  onClick: () => {},
  disabled: false,
  variant: "primary",
  width: "",
  className: "",
};

export default Link;
