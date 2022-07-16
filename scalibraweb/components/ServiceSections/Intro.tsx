import React, { FC } from "react";
import ScrollContainer from "../Containers/ScrollContainer";
import Asset from '../../assets/services.json';

const Intro: FC = () => {
    return (
        <ScrollContainer additionalClass="theme-scroll-services" pageTitle={Asset.page_title} pageDescription={Asset.page_description}>
        </ScrollContainer>
    )
}

export default Intro;