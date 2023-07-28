import React from "react";

const ButtonWithIcon = (props) => {
    const { action, children } = props;

    const handleClickButton = () => {
        action();
    };

    return (
        <>
            <button
                className="flex items-center gap-2 bg-amber-500 px-4 py-2 rounded-lg"
                as="button"
                onClick={handleClickButton}
            >
                {children}
            </button>
        </>
    );
};

export default ButtonWithIcon;
