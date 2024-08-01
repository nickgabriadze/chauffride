import registrationCSS from "./register.module.css";
import {useContext, useState} from "react";
import cars from './../../../assets/cars.json'
import {RegistrationContext} from "../../AuthContext.tsx";
import {CarDetails} from "../../authTypes";

const Step1 = () => {
    return <>
        <div className={registrationCSS['username']}>
            <input className={registrationCSS['name']} name={"First Name"} type={'text'}

                   placeholder={"First Name"}/>
            <input className={registrationCSS['name']}

                   name={"Last Name"} type={'text'} placeholder={"Last Name"}/>
        </div>
        <input type={"email"} className={registrationCSS['email']}

               name={"email"}
               placeholder={"example@company.com"}/>

        <input className={registrationCSS['email']}
               autoComplete={"true"}
               name={"new-password"} type={'password'}
               placeholder={"Password"}/>
        <input className={registrationCSS['email']}
               autoComplete={"true"}
               name={"new-password"} type={'password'}
               placeholder={"Repeat password"}/>
    </>
}

const Step2 = ({chauffeurCarDetails}: { chauffeurCarDetails: { data: CarDetails, setCarOptions: any } }) => {

    return <>
        <div className={registrationCSS['vehicle-dropdowns']}>
            <select
                value={chauffeurCarDetails.data.car_man === null ? "Manufacturer" : chauffeurCarDetails.data.car_man}
                name={'Manufacturer'} onChange={(e) => chauffeurCarDetails.setCarOptions((prev) => {
                return {...prev, car_man: e.target.value, car_prod_year: NaN, car_model: null}
            })}>
                <option hidden>Manufacturer</option>
                {Object.keys(cars).map((man, i) => <option value={man} key={i}>{man}</option>)}
            </select>

            <select name={'Year'}
                    value={isNaN(chauffeurCarDetails.data.car_prod_year) ? "Year" : chauffeurCarDetails.data.car_prod_year}
                    onChange={(e) => chauffeurCarDetails.setCarOptions((prev) => {
                        return {...prev, car_prod_year: Number(e.target.value), car_model: null}
                    })}
                    disabled={chauffeurCarDetails.data.car_man === null}>
                <option hidden>Year</option>
                {chauffeurCarDetails.data.car_man != null && Object.keys(cars[chauffeurCarDetails.data.car_man]).map((year, i) =>
                    <option value={year}
                            key={i}>{year}</option>)}
            </select>

            <select name={'Model'}
                    value={chauffeurCarDetails.data.car_model === null ? "Model" : chauffeurCarDetails.data.car_model}
                    disabled={isNaN(chauffeurCarDetails.data.car_prod_year)}
                    onChange={(e) => chauffeurCarDetails.setCarOptions((prev) => {
                        return {...prev, car_model: e.target.value}
                    })}>
                <option hidden>Model</option>
                {chauffeurCarDetails.data.car_man !== null && !isNaN(chauffeurCarDetails.data.car_prod_year)
                    && (cars[chauffeurCarDetails.data.car_man][chauffeurCarDetails.data.car_prod_year]).map((modelObj, i) =>
                        <option value={modelObj.model}
                                key={i}>{modelObj.model}</option>)
                }
            </select>
        </div>


    </>
}


export function RegisterChauffeur() {
    const chauffeurContextData = useContext(RegistrationContext)

    console.log(chauffeurContextData)
    const registrationSteps = [<Step1

    />, <Step2 chauffeurCarDetails={{
        data: {
            car_man: chauffeurContextData.chauffeur.data.car_man,
            car_prod_year: chauffeurContextData.chauffeur.data.car_prod_year,
            car_model: chauffeurContextData.chauffeur.data.car_model
        },
        setCarOptions: chauffeurContextData.chauffeur.changeData
    }}/>]
    const [regStepCounter, setRegStepCounter] = useState<number>(0)

    return <form className={registrationCSS['registration']}>
        {registrationSteps[regStepCounter]}


        <div className={registrationCSS['btns']}>
            {regStepCounter > 0 &&
                <button className={registrationCSS['reg-btn']}
                        onClick={() => setRegStepCounter((prev) => prev > 0 ? prev - 1 : prev)}
                        type={"button"}>Go back
                </button>
            }
            <button className={registrationCSS['reg-btn']}
                    onClick={() => setRegStepCounter((prev) => prev + 1 < registrationSteps.length ? prev + 1 : prev)}
                    type={"button"}>Continue
            </button>
        </div>
    </form>


}


export default RegisterChauffeur