import React from "react";
import PropTypes from "prop-types";
import { StyledHamburgerMenu } from "./HamburgerMenu.styled";

const HamburgerMenu = ({ isOpen, setIsOpen, id, className }) => {
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <StyledHamburgerMenu
      isOpen={isOpen}
      onClick={toggleMenu}
      id={id}
      className={className}
    >
      <div></div>
      <div></div>
      <div></div>
    </StyledHamburgerMenu>
  );
};

HamburgerMenu.propTypes = {
  /**
   * Button id
   */
  id: PropTypes.string,
  /**
   * Checks if the menu should be open
   */
  open: PropTypes.bool,
  /**
   * Open state prop setter
   */
  setOpen: PropTypes.func,
  /**
   * Optional component class name
   */
  className: PropTypes.string,
};

HamburgerMenu.defaultProps = {
  id: "hamburger-menu",
  isOpen: false,
  setIsOpen: () => {},
  className: "",
};

export default HamburgerMenu;
