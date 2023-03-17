import { StyledFormInputLabel } from "./FormInputLabel.styled";

export const FormInputLabel = ({ labelText, labelForWhat }) => {
  return (
    <StyledFormInputLabel htmlFor={labelForWhat}>
      {labelText}
    </StyledFormInputLabel>
  );
};
