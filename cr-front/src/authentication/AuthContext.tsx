import {createContext, ReactNode, useState} from "react";
import {ChauffeurRegistration, PassengerRegistration} from "./authTypes";

export const RegistrationContext = createContext<
    {
        'passenger': { data: PassengerRegistration, changeData: any | undefined },
        'chauffeur': { data: ChauffeurRegistration, changeData: any | undefined }
    }>({
    chauffeur: {
        changeData: undefined, data:
            {car_model: null, car_prod_year: NaN, car_man: null, email: null, lName: null, fName: null,
            password: null, repeatedPassword: null}
    }, passenger: {
        changeData: undefined, data: {
            fName: null,
            lName: null,
            email: null,
            password: null,
            repeatedPassword: null
        }
    }
})


export function AuthContext({children}: { children: ReactNode }) {
    const [passengerData, setPassengerData] = useState<PassengerRegistration>({
        fName: null,
        lName: null,
        email: null,
        password: null,
        repeatedPassword: null
    })

    const [chauffeurData, setChauffeurData] = useState<ChauffeurRegistration>({
        fName: null,
        lName: null,
        email: null,
        password: null,
        repeatedPassword: null,
        car_man: null,
        car_prod_year: NaN,
        car_model: null
    })

    return <RegistrationContext.Provider value={{

        'passenger': {data: passengerData, changeData: setPassengerData},
        'chauffeur': {data: chauffeurData, changeData: setChauffeurData}
    }
    }>
        {children}
    </RegistrationContext.Provider>
}

