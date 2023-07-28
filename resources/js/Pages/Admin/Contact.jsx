import React, { useEffect, useState } from "react";
import { Head } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import MasterLayout from "../../Layouts/master-layout";
import Table from "../../Components/Table";
import { MenuItem } from "@mui/material";
import {
    ButtonWithIcon,
    ButtonSecondary,
    ButtonPrimary,
} from "../../Components/Button";
import { PlusIcon } from "@heroicons/react/24/outline";
import Modal from "../../Components/Modal";
import { Input, InputSelect } from "../../Components/Input";
import Swal from "sweetalert2";
import ScreenLoader from "../../Components/Loader";
import { contactColumns, contactOptions } from "../../Helper/presenter-data";
import { toastSettings, confirmSetttings } from "../../Helper/PopupSettings";
import { useFormik } from "formik";
import { contactValidationSchema } from "../../Helper/validation-schema";

const Contact = (props) => {
    const { flash, errors, contacts } = props;
    const [isOpenModal, setOpenModal] = useState(false);
    const [inputContactProps, setInputContactProps] = useState({});
    const [updateProps, setUpdateProps] = useState({
        isUpdates: false,
        idUpdate: "",
    });
    const [isLoading, setLoading] = useState(false);

    const handleOnSubmit = () => {
        setLoading(true);
        updateProps.isUpdates
            ? Inertia.put(`/contacts/${updateProps.idUpdate}`, formik.values)
            : Inertia.post(`/contacts`, formik.values);
    };

    const formik = useFormik({
        initialValues: {
            contact_type: "",
            contact: "",
        },
        onSubmit: handleOnSubmit,
        validationSchema: contactValidationSchema,
    });

    const handleForm = (target) => {
        const { name, value } = target;
        formik.setFieldValue(name, value);
    };

    const handleModal = () => {
        !isOpenModal && formik.resetForm();
        setOpenModal((current) => !current);
    };

    const handleUpdateAction = async (contactData) => {
        const { id, contact_type, contact } = contactData;

        handleModal();
        setUpdateProps({
            isUpdates: true,
            idUpdate: id,
        });
        await formik.setFieldValue("contact_type", contact_type);
        await formik.setFieldValue("contact", contact);
    };

    useEffect(() => {
        switch (formik.values.contact_type) {
            case "Mail":
                setInputContactProps({ type: "email", label: "Email" });
                break;
            case "WhatsApp":
                setInputContactProps({
                    type: "tel",
                    label: "Mobile Phone Number",
                });
                break;
            case "Telegram":
                setInputContactProps({ type: "text", label: "Username" });
                break;
            case "Telephone":
                setInputContactProps({ type: "tel", label: "Phone Number" });
                break;
        }
    }, [formik.values.contact_type]);

    const handleDeleteContact = (id, contact) => {
        Swal.fire({
            ...confirmSetttings,
            text: `Want to delete ${contact}`,
        }).then((result) => {
            if (result.isConfirmed) {
                Inertia.delete(`/contacts/${id}`);
            }
        });
    };

    useEffect(() => {
        if (flash?.success) {
            Swal.fire({
                ...toastSettings,
                icon: "success",
                title: flash.success,
            });
            isOpenModal && handleModal();
        } else if (Object.keys(errors).length > 0) {
            Swal.fire({
                ...toastSettings,
                icon: "error",
                title: getErrorMessage(errors),
            });
            !isOpenModal && handleModal();
        }
        setLoading(false);
    }, [errors, flash]);

    const getErrorMessage = (errors) => {
        let errorMessage = "";

        Object.keys(errors).forEach((value, i) => {
            return (errorMessage += `${errors[value]} ${
                i === Object.keys(errors).length - 1 ? "" : ", "
            }`);
        });
        return errorMessage;
    };

    return (
        <>
            <Head title="Contact" />
            <MasterLayout>
                {isLoading && <ScreenLoader />}
                {isOpenModal && (
                    <Modal title="Contact" handleModal={handleModal}>
                        <form onSubmit={formik.handleSubmit}>
                            <InputSelect
                                defaultValue={formik.values.contact_type || ""}
                                label="Contact Type"
                                selectName="contact_type"
                                selectId="contactType"
                                options={contactOptions}
                                onChange={handleForm}
                                errorMessage={formik.errors.contact_type}
                            />
                            {formik.values.contact_type && (
                                <Input
                                    defaultValue={formik.values.contact || ""}
                                    label={inputContactProps.label}
                                    inputName="contact"
                                    inputId="contact"
                                    onChange={handleForm}
                                    errorMessage={formik.errors.contact}
                                    inputType={inputContactProps.type}
                                />
                            )}
                            <div className="space-x-4">
                                <ButtonSecondary
                                    action={handleModal}
                                    buttonType="button"
                                >
                                    Cancel
                                </ButtonSecondary>
                                <ButtonPrimary buttonType="submit">
                                    Submit
                                </ButtonPrimary>
                            </div>
                        </form>
                    </Modal>
                )}
                <h3 className="text-2xl my-4">Contact</h3>
                <section className="bg-white p-4 border border-gray-100 rounded-lg shadow my-4">
                    <ButtonWithIcon action={handleModal}>
                        <PlusIcon className="w-6 h-6 text-gray-900" />
                        Add Contact
                    </ButtonWithIcon>
                </section>
                <section className="bg-white p-4 border border-gray-100 rounded-lg shadow my-2">
                    <Table
                        columns={contactColumns}
                        datas={contacts}
                        action={({ row, closeMenu }) => [
                            <MenuItem
                                key="detail"
                                sx={{ fontSize: "10pt" }}
                                onClick={() => {
                                    handleUpdateAction(row.original);
                                    closeMenu();
                                }}
                            >
                                Update
                            </MenuItem>,
                            <MenuItem
                                key="edit"
                                sx={{ fontSize: "10pt" }}
                                onClick={() => {
                                    handleDeleteContact(
                                        row.original.id,
                                        row.original.contact
                                    );
                                    closeMenu();
                                }}
                            >
                                Delete
                            </MenuItem>,
                        ]}
                    />
                </section>
            </MasterLayout>
        </>
    );
};

export default Contact;
