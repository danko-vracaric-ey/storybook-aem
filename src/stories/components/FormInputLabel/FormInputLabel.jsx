export const FormInputLabel = ({ labelText, labelForWhat }) => {
  return <label htmlFor={labelForWhat}>{labelText}</label>;
};
