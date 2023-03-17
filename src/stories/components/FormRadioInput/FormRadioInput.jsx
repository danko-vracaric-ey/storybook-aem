import PropTypes from "prop-types";
import Paragraph from "../Paragraph/Paragraph";
import FormRadioList from "./FormRadioList";

const FormRadioInput = ({ paraId, paraClass, paraText, radioList, layout }) => {
  return (
    <div>
      <Paragraph id={paraId} className={paraClass} text={paraText} />
      <FormRadioList list={radioList} layout={layout} />
    </div>
  );
};

FormRadioInput.propTypes = {
  paraId: PropTypes.string,
  paraClass: PropTypes.string,
  paraText: PropTypes.string,
  radioList: PropTypes.arrayOf("string"),
  layout: PropTypes.string,
};

FormRadioInput.defaultProps = {
  paraText: "Your trusty checkbox inputs",
  radioList: ["Yes", "OK", "Maybe", "No", "Nah"],
  //   layout: "v",
};

export default FormRadioInput;
