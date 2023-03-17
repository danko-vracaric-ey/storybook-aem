import React from "react";
import PropTypes from "prop-types";
import { FormInputLabel } from "../FormInputLabel/FormInputLabel";
import { StyledFormTextInput } from "./FormTextInput.styled";

const FormTextInput = ({ placeholder, labelText, id }) => {
  return (
    <StyledFormTextInput>
      <FormInputLabel labelText={labelText} labelForWhat={id} />
      <input type="text" placeholder={placeholder} id={id} />
    </StyledFormTextInput>
  );
};

FormTextInput.propTypes = {
  placeholder: PropTypes.string,
  labelText: PropTypes.string,
  id: PropTypes.string,
};

FormTextInput.defaultProps = {
  placeholder: "Type something...",
  labelText: "Search",
  id: "search-x",
};

export default FormTextInput;
