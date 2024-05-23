import styles from "./SelectComponent.module.css";
import { useEffect, useState } from "react";

export const SelectComponent = ({
  optionChangeHandler,
  width = null,
  name = null,
  id = null,
  options = null,
  dataFieldName = null,
  keyFieldName = null,
  valueFieldName = null,
  selectedValue,
  defaultValue,
}) => {
  const [shouldShow, setShouldShow] = useState(false);
  useEffect(() => {
    console.log("Category: " + selectedValue);
    if (options?.length > 0) setShouldShow(true);
    else {
      options = null;
      setShouldShow(false);
    }
  }, [options, shouldShow]);

  return (
    <select
      name={name}
      id={id}
      className={`${"form-select"} 
                ${width ? width : "w-75"} 
                ${styles["select-dropdown"]}`}
      onChange={optionChangeHandler}
      selectedValue={selectedValue}
      defaultValue={defaultValue}
      // disabled={!shouldShow}
    >
      {options?.length > 0 ? (
        <>
          <option value="" disabled={true}>
            Select
          </option>
          {options.map((option) => (
            <option key={option[keyFieldName]} value={option[valueFieldName]}>
              {option[dataFieldName]}
            </option>
          ))}
        </>
      ) : (
        <>
          <option value="" disabled={true}>
            No Data
          </option>
        </>
      )}
    </select>
  );
};
