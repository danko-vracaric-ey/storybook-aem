import PropTypes from "prop-types";
import { FormInputLabel } from "../FormInputLabel/FormInputLabel";
import { StyledFormTextArea } from "./FormTextArea.styled";

export const FormTextArea = ({ placeholder, labelText, id }) => {
  return (
    <StyledFormTextArea>
      <FormInputLabel labelText={labelText} labelForWhat={id} />
      <textarea id={id} placeholder={placeholder} cols="40" rows="5"></textarea>
    </StyledFormTextArea>
  );
};

FormTextArea.propTypes = {};

FormTextArea.defaultProps = {
  placeholder: "",
  labelText: "Label for textbox",
};
