import * as yup from "yup";

const contactValidationSchema = yup.object().shape({
    contact_type: yup.string().required("Contact type must be filled in").min(3),
    contact: yup
        .string()
        .required("This input field is required")
        .test("contact-test", "error message", (value, validationContext) => {
            const {
                createError,
                parent: { contact_type },
            } = validationContext;
            if (!value) {
                return createError({
                    message: "Contact field is required",
                });
            }

            if (contact_type === "Mail") {
                if (
                    !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)
                ) {
                    return createError({
                        message: "Invalid email format",
                    });
                }
            }

            if (contact_type == "WhatsApp" || contact_type === "Telephone") {
                if (!/^(\+62|62|0)8[1-9][0-9]{6,9}$/.test(value)) {
                    return createError({
                        message: "Invalid phone number format",
                    });
                }
            }

            if (contact_type === "Telegram") {
                if (!/^[a-zA-Z0-9]+$/.test(value)) {
                    return createError({
                        message: "Username invalid",
                    });
                }
            }
            return true;
        }),
});

export { contactValidationSchema };
