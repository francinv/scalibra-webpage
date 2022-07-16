export type inputType = {
    placeholder: string;
    required: boolean;
    type: string;
    index: string;
};

export type formValue = {
    name: string;
    company_name: string;
    email: string;
    phone_number: string;
}

export type formConstantType = Array<inputType>;

