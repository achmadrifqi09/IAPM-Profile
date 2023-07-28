import validator from "validator";

const validationInput = (target, inputValidity) => {
    switch (target.type) {
        case "email":
            if (!target.value) {
                return { ...inputValidity, [target.name]: false };
            }
            return emailValidation(target, inputValidity);
        case "tel":
            if (!target.value) {
                return { ...inputValidity, [target.name]: false };
            }
            return phoneNumberValidation(target, inputValidity);
        case "text":
            if (!target.value) {
                return { ...inputValidity, [target.name]: false };
            }

            return textValidation(target, inputValidity);
        default:
            return { ...inputValidity, [target.name]: false };
    }
};

const textValidation = (target, inputValidity) => {
    return target.value.length > 0
        ? (inputValidity = { ...inputValidity, [target.name]: true })
        : (inputValidity = { ...inputValidity, [target.name]: false });
};

const emailValidation = (target, inputValidity) => {
    return validator.isEmail(target.value)
        ? (inputValidity = { ...inputValidity, [target.name]: true })
        : (inputValidity = { ...inputValidity, [target.name]: false });
};

const phoneNumberValidation = (target, inputValidity) => {
    return validator.isMobilePhone(target.value, ["id-ID"])
        ? (inputValidity = { ...inputValidity, [target.name]: true })
        : (inputValidity = { ...inputValidity, [target.name]: false });
};
const checkAllInputIsCorrect = (allInput) => {
    for (let input in allInput) {
        if (!allInput[input]) return false;
    }
    return true;
};

export { validationInput, checkAllInputIsCorrect };
