import { NextApiRequest, NextApiResponse } from "next";
import axiosService from "../../utils/axios";

export const postNewsletterSubmission = async (data: {email: string}) => {
    const axe = axiosService.post('newsletter/', data);
    const res = await axe.then(res => res);
    return res;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const emailObject = {'email': req.body.email};
        res.status(200).json(postNewsletterSubmission(emailObject));
    }
}

