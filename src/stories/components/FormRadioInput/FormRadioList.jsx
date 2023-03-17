import React from "react";
import PropTypes from "prop-types";
import { StyledFormRadioList } from "./FormRadioList.styled";

const FormRadioList = ({ list, layout }) => {
  return (
    <StyledFormRadioList layout={layout}>
      {list.map((labelText, checkIdx) => {
        return (
          <div>
            <label key={`${labelText}-${checkIdx}`}>
              <input type="radio" />
              {labelText}
            </label>
          </div>
        );
      })}
    </StyledFormRadioList>
  );
};

FormRadioList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string),
  /**
   * Layout of the radios. Default is horizontal. Pass string "v" for vertical.
   **/
  layout: PropTypes.string,
};

export default FormRadioList;
