import React from "react";

const BaseDropdownOptionsList = ({ list }) => {
  return (
    <>
      {list.map((option) => {
        let capitalize;

        if (option.length === 0) capitalize = option;
        if (option.length === 1) capitalize = option.toUpperCase();
        if (option.length > 1)
          capitalize = option[0].toUpperCase() + option.slice(1);

        return <option value={option}>{capitalize}</option>;
      })}
    </>
  );
};

export default BaseDropdownOptionsList;
