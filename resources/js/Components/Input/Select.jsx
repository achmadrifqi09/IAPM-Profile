import { ErrorMessage } from "formik";
import React from "react";
import Select from "react-select";

const InputSelect = (props) => {
    const {
        options,
        defaultValue,
        label,
        selectId,
        selectName,
        errorMessage,
        onChange,
    } = props;
    const styles = {
        control: (baseStyles, state) => ({
            ...baseStyles,
            backgroundColor: "#fff",
            color: "#1C1C1C",
            borderRadius: "8px",
            paddingTop: "3px",
            paddingBottom: "3px",
            marginTop: "4px",
            fontSize: "16px",
            boxShadow: state.isFocused ? 0 : 0,
            border: "2px #E8E8E8 solid",
        }),

        menu: (baseStyles) => ({
            ...baseStyles,
            backgroundColor: "#fff",
            color: "#1C1C1C",
            fontSize: "16px",
        }),
        option: (baseStyle, state) => ({
            ...baseStyle,
            backgroundColor: state.isSelected ? "#FDC204" : null,
            color: state.isSelected ? "#1C1C1C" : null,
        }),
    };

    const handleChange = (event) => {
        onChange({ name: selectName, value: event.value, type: "text" });
    };

    const isDefaultValue = (e) => e.value === defaultValue;

    return (
        <div className="my-4 w-full space-y-1">
            <label
                htmlFor={selectId}
                className="text-gray-500 font-normal block text-sm"
            >
                {label}
            </label>
            <Select
                onChange={handleChange}
                options={options}
                id={selectId}
                name={selectName}
                defaultValue={
                    defaultValue && options[options.findIndex(isDefaultValue)]
                }
                theme={(theme) => ({
                    ...theme,
                    colors: {
                        primary25: "#2d2d2d",
                        primary: "#1C1C1C",
                    },
                })}
                styles={styles}
            />
            {errorMessage && (
                <span className="text-red-500 text-sm">{errorMessage}</span>
            )}
        </div>
    );
};

export default InputSelect;
