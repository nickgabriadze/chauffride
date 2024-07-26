import ChauffRideBlackTransparentLogo from '../../assets/logos/chauffride-logo-black-transparent.svg'
import homepageCSS from './../homepage.module.css'
import Image from '../../CustomComponents/Image.tsx'
export function Header() {


    return <header className={homepageCSS['header']}>

        <Image src={ChauffRideBlackTransparentLogo} height={90} alt={"Chauffride logo"}></Image>
        <div className={homepageCSS['authorization-wrapper']}>
            <div className={homepageCSS['auth']}>
                <button>Authorization</button>
                <span>As User</span>
            </div>

            <div>
                <button>Authorization</button>
                <span>As Driver</span>
            </div>
        </div>

    </header>


}

export default Header