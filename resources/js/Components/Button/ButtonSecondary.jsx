import React from "react";

const ButtonSecondary = (props) => {
    const { action, children, buttonType } = props;

    const handleClickButton = () => {
        action();
    };

    return (
        <>
            <button
                className="bg-white text-gray-500 border border-gray-500 px-4 py-2 rounded-lg"
                type={buttonType}
                as="button"
                onClick={handleClickButton}
            >
                {children}
            </button>
        </>
    );
};

export default ButtonSecondary;
