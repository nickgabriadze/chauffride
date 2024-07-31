import ChauffRideBlackTransparentLogo from '../../assets/logos/chauffride-logo-black-transparent.svg'
import {Link} from 'react-router-dom'
import homepageCSS from './../homepage.module.css'
import Image from '../../CustomComponents/Image.tsx'

export function Header() {

    return <header className={homepageCSS['header']}>

        <Image src={ChauffRideBlackTransparentLogo as string} height={60} alt={"Chauffride logo"}></Image>
        <Link
            to={'/register'}
            className={homepageCSS['authorization-wrapper']}>
            <div>
                <button>Register</button>
                <hr/>
            </div>
        </Link>

    </header>


}

export default Header