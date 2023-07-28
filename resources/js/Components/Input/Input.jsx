import React from "react";

const Input = (props) => {
    const {
        label,
        inputType,
        inputId,
        inputName,
        isRequired,
        errorMessage,
        onChange,
        defaultValue,
    } = props;

    const handleChange = (event) => {
        onChange(event.target);
    };

    return (
        <div className="my-4 w-full space-y-1">
            <label
                htmlFor=""
                className="text-gray-500 font-normal block text-sm"
            >
                {label}
            </label>
            <input
                onChange={(event) => handleChange(event)}
                type={inputType}
                name={inputName}
                id={inputId}
                value={defaultValue}
                className="block w-full py-2 px-3  font-normal font-inter text-gray-900  rounded-lg bg-white border-2 border-solid border-gray-100"
                required={isRequired}
            ></input>
            {errorMessage && (
                <span className="text-red-500 text-sm">{errorMessage}</span>
            )}
        </div>
    );
};

export default Input;
