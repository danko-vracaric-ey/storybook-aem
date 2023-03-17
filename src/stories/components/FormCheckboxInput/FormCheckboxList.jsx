import React from "react";
import PropTypes from "prop-types";
import { StyledFormCheckboxList } from "./FormCheckboxList.styled";

const FormCheckboxList = ({ list, layout }) => {
  return (
    <StyledFormCheckboxList layout={layout}>
      {list.map((labelText, checkIdx) => {
        return (
          <div>
            <label key={`${labelText}-${checkIdx}`}>
              <input type="checkbox" />
              {labelText}
            </label>
          </div>
        );
      })}
    </StyledFormCheckboxList>
  );
};

FormCheckboxList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string),
  /**
   * Layout of the checkboxes. Default is horizontal. Pass string "v" for vertical.
   **/
  layout: PropTypes.string,
};

// FormCheckboxList.defaultProps = {
//   list: ["Yes", "OK", "Maybe", "No", "Nah"],
//   //   layout: "v",
// };

export default FormCheckboxList;
