// import Select from "react-select";

import formStore from "@/lib/store/formStore";
import dynamic from "next/dynamic";

const Select = dynamic(() =>
  import("react-select").then((module) => module.default)
);

export default function Input(props) {
  const { options, multiple = false, state_name } = props;
  const values = formStore((state) => state[state_name]) || null;
  const onChange = (value) => {
    // if (multiple) {
    //   formStore.setState({ [state_name]: value?.map((n) => n.value) });
    // } else {
    //   formStore.setState({ [state_name]: value.map((n) => n.value) });
    // }
    // formStore.setState({
    //   [state_name]: value.map((n) => {
    //     return n.value;
    //   }),
    // });
    formStore.setState({
      [state_name]: value?.value,
    });
  };

  return (
    <Select
      placeholder="Please Select..."
      // value={
      //   multiple ? options.filter((n) => values?.includes(n.value)) : values
      // }
      isClearable={true}
      {...props}
      onChange={(e) => {
        onChange(e);
        if (props?.onChange) props?.onChange(e);
      }}
      options={options}
      isMulti={multiple}
      styles={customStyles}
      aria-label={state_name || "Select"}
    />
  );
}

const MAIN_BLACK = "#333";
const DIM_BLACK = "#444";
const THIRD_BLACK = "#2F3A63";
const MAIN_RED = "#17234C";
const WHITE = "#fff";

export const customStyles = {
  option: (styles, state) => {
    const { isDisabled, isFocused, isSelected } = state;
    return {
      ...styles,
      opacity: isDisabled ? 0.5 : 1,
      backgroundColor: isDisabled
        ? undefined
        : isSelected
        ? MAIN_RED
        : isFocused
        ? THIRD_BLACK
        : WHITE,
      color: isFocused || isSelected ? WHITE : DIM_BLACK,
      cursor: isFocused ? "pointer" : "auto",
      ":active": {
        ...styles[":active"],
        backgroundColor: MAIN_BLACK,
      },
      // borderRadius: "20px",
    };
  },
  control: (styles) => ({
    backgroundColor: "transparent",
    borderRadius: "0px",
    borderWidth: "0px",
    borderStyle: "none",
    outline: "0px",
    border: "none",
    boxShadow: "0px",
    display: "flex",
    height: "50px",
    padding: "0px",
  }),
  valueContainer: (styles) => ({
    ...styles,
    padding: "0px",
    display: "flex",
  }),
  placeholder: (styles) => ({
    padding: "0px",
    margin: "0px",
    color: "#444",
    paddingTop: "5px",
    fontSize: "14px",
  }),
  indicatorSeparator: (styles) => ({
    display: "none",
  }),
  indicatorContainer: (styles) => ({
    padding: "0px",
    color: "#444",
    position: "relative",
  }),
  input: (styles) => ({
    ...styles,
    padding: "0px",
    margin: "0px",
  }),
  singleValue: (styles) => ({
    ...styles,
    padding: "0px",
    margin: "0px",
    color: "#444",
    paddingTop: "0px",
    fontSize: "14px",
  }),
  menu: (styles) => ({
    ...styles,
    padding: "0px",
    left: "-0px",
    borderRadius: "20px",
  }),
  menuList: (styles) => ({
    ...styles,
    padding: "0px",
    // left: "-0px",
    borderRadius: "20px",
  }),
};
