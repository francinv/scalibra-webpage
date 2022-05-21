import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faBriefcase, faChevronUp, faEnvelope, faHouse, faLocationDot, faMobile, faPhone, faRightToBracket, faShoppingCart, faStreetView, faThermometer, faThermometerHalf, faUsers, faUserTie, IconDefinition } from "@fortawesome/free-solid-svg-icons";

export const useIcon = (iconType: string): IconDefinition => {
    switch (iconType) {
        case "fas fa-thermometer-half":
            return faThermometerHalf;
        case "fas fa-thermometer":
            return faThermometer;
        case "fas fa-street-view":
            return faStreetView;
        case "fas fa-shopping-cart":
            return faShoppingCart;
        case "fa fa-users":
            return faUsers;
        case "fa fa-briefcase":
            return faBriefcase;
        case "fa fa-envelope":
            return faEnvelope;
        case "fa-solid fa-chevron-up":
            return faChevronUp;
        case "fa-solid fa-house":
            return faHouse;
        case "fa-solid fa-briefcase":
            return faBriefcase;
        case "fa-solid fa-user-tie":
            return faUserTie;
        case "fa-solid fa-phone":
            return faPhone;
        case "fa-solid fa-right-to-bracket":
            return faRightToBracket;
        case "fa-solid fa-mobile":
            return faMobile;
        case "fa-solid fa-location-dot":
            return faLocationDot;
        case "fa-solid fa-envelope":
            return faEnvelope;
        default:
            return faThermometerHalf;
    }
};