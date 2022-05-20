import { NextApiRequest, NextApiResponse } from "next";
import { ContactForm } from "../../typings/contactType";
import axiosService from "../../utils/axios";

export const postContactForm = async (data: ContactForm) => {
    const axe = axiosService.post('form/', data);
    const res = await axe.then(res => res);
    return res;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const contactObject = {
            name: req.body.name,
            company_name: req.body.company_name,
            email: req.body.email,
            phone_number: req.body.phone_number
        };
        res.status(200).json(postContactForm(contactObject));
    }
}

