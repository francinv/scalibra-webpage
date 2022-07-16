import Link from "next/link";
import React, { FC } from "react";
import Asset from "../../assets/services.json";
import { H2, P } from "../Typography";

const Preamble: FC = () => {
    const usableData = Asset.page_preamble;

    return (
        <section className="my-8">
            <div className="w-4/6 mx-auto">
                <H2 className={null} text={usableData.title} />
                <P className={null} text={usableData.text}>
                    <Link href={usableData.href}>
                        <a className="text-stratos underline underline-offset-2 decoration-stratos hover:decoration-guardsmanred hover:text-guardsmanred" target="_blank">{usableData.url_text}</a>
                    </Link>
                </P>
            </div>
        </section>
    );
};

export default Preamble;