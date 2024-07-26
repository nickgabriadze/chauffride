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

    const [authDropDown, setAuthDropdown] = useState<boolean>(false)
    const [optionHover, setOptionHover] = useState<'Chauffeur' | 'User' | 'none'>('none')
    return <header className={homepageCSS['header']}>

        <Image src={ChauffRideBlackTransparentLogo as string} height={60} alt={"Chauffride logo"}></Image>
        <div className={homepageCSS['authorization-wrapper']}>
            <button
                style={authDropDown ? {
                    borderRight: '0',
                    borderLeft: '0',
                    borderTop: '0',
                    borderBottom: '1px solid black'
                } : {}}
                onClick={() => setAuthDropdown((prev) => !prev)}>Register
            </button>

            {authDropDown && <div className={homepageCSS['auth-dropdown']}>
                <Link
                    onMouseEnter={() => setOptionHover('Chauffeur')}
                    onMouseLeave={() => setOptionHover('none')}
                ><Image src={optionHover === 'Chauffeur' ? ChaufferIconWhite as string : ChaufferIcon as string}
                        alt={"Chauffeur Icon"}/> <span>Chauffeur</span></Link>
                <Link

                    onMouseEnter={() => setOptionHover('User')}
                    onMouseLeave={() => setOptionHover('none')}
                >
                <Image src={optionHover === 'User' ? PassengerIconWhite as string : PassengerIcon as string}
                       alt={"Passenger Icon"}/> <span>User</span></Link>
                </div>}
        </div>

    </header>


}

export default Header