import React from "react";
import PropTypes from "prop-types";
import { FormInputLabel } from "../FormInputLabel/FormInputLabel";
import BaseDropdownOptionsList from "./BaseDropdownOptionsList";
import { StyledBaseDropdown } from "./BaseDrowdown.styled";

const BaseDropdown = ({
  labelText,
  labelForWhat,
  optionElName,
  optionsList,
}) => {
  return (
    <StyledBaseDropdown>
      <FormInputLabel labelText={labelText} labelForWhat={labelForWhat} />
      <select name={optionElName}>
        <BaseDropdownOptionsList list={optionsList} />
      </select>
    </StyledBaseDropdown>
  );
};

BaseDropdown.propTypes = {
  /*
   * Name for the drowdown label
   */
  labelText: PropTypes.string,
  /*
   * A list (array) of strings to be shown in the dropdown
   */
  optionsList: PropTypes.arrayOf(PropTypes.string),
};

BaseDropdown.defaultProps = {
  labelText: "Select something:",
  optionsList: [
    "Something 1",
    "Other thing 2",
    "There thing 3",
    "It's a 4",
    "Yeah, 5...",
  ],
};

export default BaseDropdown;
