import {useState} from "react";
import RegisterPassenger from "./components/register/RegisterPassenger.tsx";
import RegisterChauffeur from "./components/register/RegisterChauffeur.tsx";
import authPageCSS from "./authpage.module.css"
import Image from "../CustomComponents/Image.tsx";
import ChaufferIconWhite from "../assets/icons/chauffeur-white.svg";
import ChaufferIcon from "../assets/icons/chauffeur.svg";
import PassengerIconWhite from "../assets/icons/passenger-white.svg";
import PassengerIcon from "../assets/icons/passenger.svg";


export function AuthPage() {

    const [optionHover, setOptionHover] = useState<'Chauffeur' | 'Passenger' | 'none'>('none')
    const [registerAs, setRegisterAs] = useState<"Chauffeur" | "Passenger">("Chauffeur")

    return (<div className={authPageCSS['authorization-wrapper']}>
        <h1>Register as</h1>
        <div className={authPageCSS['auth-options']}>
            <div
                style={registerAs === "Chauffeur" ? {
                    backgroundColor: 'var(--color-main-black)',
                    color: 'var(--color-main-white)'
                } : {}}
                onClick={() => setRegisterAs('Chauffeur')}
                onMouseEnter={() => setOptionHover('Chauffeur')}
                onMouseLeave={() => setOptionHover('none')}
            ><Image
                src={optionHover === 'Chauffeur' || registerAs === "Chauffeur" ? ChaufferIconWhite as string : ChaufferIcon as string}
                alt={"Chauffeur Icon"}/> <span>Chauffeur</span></div>
            <div
                style={registerAs === "Passenger" ? {
                    backgroundColor: 'var(--color-main-black)',
                    color: 'var(--color-main-white)'
                } : {}}

                onMouseEnter={() => setOptionHover('Passenger')}
                onMouseLeave={() => setOptionHover('none')}
                onClick={() => setRegisterAs('Passenger')}
            >
                <Image
                    src={optionHover === 'Passenger' || registerAs === "Passenger" ? PassengerIconWhite as string : PassengerIcon as string}
                    alt={"Passenger Icon"}/> <span>Passenger</span></div>
        </div>

        {
            registerAs === "Passenger" ? <RegisterPassenger/> : <RegisterChauffeur/>
        }
    </div>)


}

export default AuthPage