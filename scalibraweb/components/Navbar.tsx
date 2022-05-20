import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBriefcase,
    faHome,
    faHouse,
    faPhone,
    faRightToBracket,
    faUserTie
  } from "@fortawesome/free-solid-svg-icons";

interface NavbarProps {
    title: string;
}

const Navbar: React.FC<NavbarProps> = ({title}) => {
    
    return (
        <nav className="w-full py-4">
            <div className="w-11/12 flex justify-between flex-wrap items-center mx-auto">
            <Link href="/">
                <a>
                    <Image
                        src={"/images/logo1_scalibra.png"}
                        alt="Logo of Scalibra AS"
                        height={33.4}
                        width={200}
                    />
                </a>
            </Link>
            <div className="hidden w-full md:block md:w-auto">
                <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 items-center">
                    {
                        title !== 'Scalibra AS'
                        ?   <li>
                                <Link href="/">
                                    <a className="flex text-base text-stratos items-center font-body hover:text-guardsmanred transition duration-300">
                                        <FontAwesomeIcon icon={faHouse} className="mr-1"/>Hjem
                                    </a>
                                </Link>
                            </li>
                        : null
                    }
                    <li>
                        <Link href="/tjenester">
                            <a className="flex text-base text-stratos items-center font-body hover:text-guardsmanred transition duration-300">
                                <FontAwesomeIcon icon={faBriefcase} className="mr-1"/>Tjenester
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/om-oss">
                            <a className="flex text-base text-stratos items-center font-body hover:text-guardsmanred transition duration-300">
                                <FontAwesomeIcon icon={faUserTie} className="mr-1"/>Om oss
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/kontakt">
                            <a className="flex text-base text-stratos items-center font-body hover:text-guardsmanred transition duration-300">
                                <FontAwesomeIcon icon={faPhone} className="mr-1"/>Kontakt
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <a className="flex text-base text-stratos items-center font-body hover:text-guardsmanred transition duration-300">
                                <FontAwesomeIcon icon={faRightToBracket} className="mr-1"/>Logg inn
                            </a>
                        </Link>
                    </li>
                    <li className="border-guardsmanred border-2 px-2 py-1 hover:bg-guardsmanred hover:text-white transition duration-300 text-stratos">
                        <Link href="/">
                            <a className="flex text-base items-center font-body">
                                Nettbutikk
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>
            </div>
        </nav>

    )

}

export default Navbar;