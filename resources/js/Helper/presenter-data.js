const contactOptions = [
    { value: "Mail", label: "Mail" },
    { value: "Telephone", label: "Telephone" },
    { value: "WhatsApp", label: "WhatsApp" },
    { value: "Telegram", label: "Telegram" },
];

const contactColumns = [
    {
        header: "Contact Type",
        accessorKey: "contact_type",
    },
    {
        header: "Contact",
        accessorKey: "contact",
    },
];

export { contactOptions, contactColumns };
