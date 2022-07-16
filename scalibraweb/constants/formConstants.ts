import { formConstantType } from "../typings/formType";

export const FORM_CONSTANTS: formConstantType = [
    {
        placeholder: "Ditt fulle navn *",
        required: true,
        type: "text",
        index: "name"
    },
    {
        placeholder: "Firmanavn *",
        required: true,
        type: "text",
        index: "company_name"
    },
    {
        placeholder: "Din e-post *",
        required: true,
        type: "email",
        index: "email"
    },
    {
        placeholder: "Ditt telefonnummer *",
        required: true,
        type: "tel",
        index: "phone_number"
    }
]