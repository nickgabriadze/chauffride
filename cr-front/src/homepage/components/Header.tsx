import ChauffRideBlackTransparentLogo from '../../assets/logos/chauffride-logo-black-transparent.svg'
import ChaufferIcon from '../../assets/icons/chauffeur.svg'
import ChaufferIconWhite from '../../assets/icons/chauffeur-white.svg'
import PassengerIconWhite from '../../assets/icons/passenger-white.svg'
import PassengerIcon from '../../assets/icons/passenger.svg'
import {Link} from 'react-router-dom'
import homepageCSS from './../homepage.module.css'
import Image from '../../CustomComponents/Image.tsx'
import {useState} from "react";

export function Header() {

    return <header className={homepageCSS['header']}>

        <Image src={ChauffRideBlackTransparentLogo as string} height={60} alt={"Chauffride logo"}></Image>
        <Link
            to={'/register'}
            className={homepageCSS['authorization-wrapper']}>
            <button>Register
            </button>
        </Link>

    </header>


}

export default Header