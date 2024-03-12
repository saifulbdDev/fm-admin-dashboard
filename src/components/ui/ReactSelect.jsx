/* eslint-disable react/prop-types */
import React from "react";
import Select, { components } from "react-select";
import { ChevronDownIcon, XMarkIcon } from '@heroicons/react/24/solid';
import classnames from 'classnames';

const DropdownIndicator = (props) => (
  <components.DropdownIndicator {...props}>
    <ChevronDownIcon className="w-5 h-5" />
  </components.DropdownIndicator>
);

const ClearIndicator = (props) => (
  <components.ClearIndicator {...props}>
    <XMarkIcon className="w-5 h-5" />
  </components.ClearIndicator>
);

const MultiValueRemove = (props) => (
  <components.MultiValueRemove {...props}>
    <XMarkIcon className="w-5 h-5" />
  </components.MultiValueRemove>
);

const controlStyles = {
  base: "border  bg-white hover:cursor-pointer menu-outer-top",
  focus: "border-blue-300 rounded-lg ring-1 ring-blue-300 ",
  nonFocus: "border-gray-300",
};

const placeholderStyles = "text-gray-500 pl-1 py-0.5";
const selectInputStyles = "pl-1 py-0.5 ";
const valueContainerStyles = "p-1 gap-1";
const singleValueStyles = "leading-7 ml-1";
const multiValueStyles = "bg-gray-100 rounded items-center py-0.5 pl-2 pr-1 gap-1.5";
const multiValueLabelStyles = "leading-6 py-0.5";
const multiValueRemoveStyles = " bg-white hover:bg-red-50 hover:text-red-800 text-gray-500 hover:border-red-300 rounded-md";

const indicatorsContainerStyles = "p-1 gap-1";
const clearIndicatorStyles = "text-gray-500 p-1 rounded-md hover:bg-red-50 hover:text-red-800";
const indicatorSeparatorStyles = "bg-gray-300";
const dropdownIndicatorStyles = "p-1 hover:bg-gray-100 text-gray-500 rounded-md hover:text-black";
const menuStyles = "p-1 mt-2 bg-white rounded-lg shadow-lg";
const groupHeadingStyles = "ml-3 mt-2 mb-1 text-gray-500 text-sm";

const optionStyles = {
  base: "hover:cursor-pointer px-3 py-2 rounded",
  focus: "bg-gray-100 active:bg-gray-200 z-[2000]",
  selected: "bg-blue-400 text-white",
};

const noOptionsMessageStyles = "text-gray-500 p-2 bg-gray-50 border border-dashed border-gray-200 rounded-sm";

export const CustomSelect = ({
  onChange,
  inputClass,
  placeholder,
  field,
  form,
  options,
  isMulti = false,
  ...rest
}) => {
  const onChangeOption = (option) => {
    if (onChange) {
      onChange(option);
    }
    form.setFieldValue(
      field.name,
      isMulti ? option.map((item) => item.value) : option.value
    );
  };

  const getValue = () => {
    if (options) {
      return isMulti
        ? options.filter(option => field?.value?.indexOf(option?.value) >= 0)
        : options.find(option => option.value === field.value);
    } else {
      return isMulti ? [] : '';
    }
  };

  return (
    <Select
      {...rest}
      isMulti={isMulti}
      closeMenuOnSelect={false}
      hideSelectedOptions={false}
      unstyled
      styles={{
        input: (base) => ({
          ...base,
          "input:focus": {
            boxShadow: "none",
          },
        }),
        multiValueLabel: (base) => ({
          ...base,
          whiteSpace: "normal",
          overflow: "visible",
        }),
        control: (base) => ({
          ...base,
          transition: "none",
        }),
      }}
      components={{ DropdownIndicator, ClearIndicator, MultiValueRemove }}
      name={field.name}
      value={getValue()}
      onChange={onChangeOption}
      placeholder={placeholder}
      options={options}
      classNames={{
        control: ({ isFocused }) =>
          classnames(
            isFocused ? controlStyles.focus : controlStyles.nonFocus,
            controlStyles.base, inputClass, 
          ),
        placeholder: () => placeholderStyles,
        input: () => selectInputStyles,
        valueContainer: () => valueContainerStyles,
        singleValue: () => singleValueStyles,
        multiValue: () => multiValueStyles,
        multiValueLabel: () => multiValueLabelStyles,
        multiValueRemove: () => multiValueRemoveStyles,
        indicatorsContainer: () => indicatorsContainerStyles,
        clearIndicator: () => clearIndicatorStyles,
        indicatorSeparator: () => indicatorSeparatorStyles,
        dropdownIndicator: () => dropdownIndicatorStyles,
        menu: () => menuStyles,
        groupHeading: () => groupHeadingStyles,
        option: ({ isFocused, isSelected }) =>
          classnames(
            isFocused && optionStyles.focus,
            isSelected && optionStyles.selected,
            optionStyles.base
          ),
        noOptionsMessage: () => noOptionsMessageStyles,
      }}
    />
  );
};

export default CustomSelect;