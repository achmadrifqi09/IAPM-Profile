import React from "react";

const ButtonPrimary = (props) => {
    const { action, children, isDisable, buttonType } = props;

    const handleClickButton = () => {
        action();
    };

    return (
        <>
            <button
                className="text-gray-900 bg-amber-500 px-4 py-2 rounded-lg disabled:opacity-80"
                type={buttonType}
                disabled={isDisable}
                onClick={action && handleClickButton}
            >
                {children}
            </button>
        </>
    );
};

export default ButtonPrimary;
