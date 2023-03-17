import PropTypes from "prop-types";
import Paragraph from "../Paragraph/Paragraph";
import FormCheckboxList from "./FormCheckboxList";

const FormCheckboxInput = ({
  paraId,
  paraClass,
  paraText,
  checkboxList,
  layout,
}) => {
  return (
    <div>
      <Paragraph id={paraId} className={paraClass} text={paraText} />
      <FormCheckboxList list={checkboxList} layout={layout} />
    </div>
  );
};

FormCheckboxInput.propTypes = {
  paraId: PropTypes.string,
  paraClass: PropTypes.string,
  paraText: PropTypes.string,
  checkboxList: PropTypes.arrayOf("string"),
  layout: PropTypes.string,
};

FormCheckboxInput.defaultProps = {
  paraText: "Your trusty checkbox inputs",
  checkboxList: ["Yes", "OK", "Maybe", "No", "Nah"],
  //   layout: "v",
};

export default FormCheckboxInput;
