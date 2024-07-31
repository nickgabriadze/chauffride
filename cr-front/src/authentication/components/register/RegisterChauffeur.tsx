import registrationCSS from "./register.module.css";
import {useState} from "react";
import cars from './../../../assets/cars.json'

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

const Step2 = () => {
    const [carOptions, setCarOptions] = useState<{
        man: string | null,
        year: number,
        model: string | null
    }>({man: null, year: NaN, model: null})

    console.log(carOptions)
    return <>
        <div className={registrationCSS['vehicle-dropdowns']}>
            <select
                value={carOptions.man === null ? "Manufacturer" : carOptions.man}
                name={'Manufacturer'} onChange={(e) => setCarOptions({man: e.target.value, year: NaN, model: null})}>
                <option hidden>Manufacturer</option>
                {Object.keys(cars).map((man, i) => <option value={man} key={i}>{man}</option>)}
            </select>

            <select name={'Year'}
                    value={isNaN(carOptions.year) ? "Year" : carOptions.year}
                    onChange={(e) => setCarOptions((prev) => {
                        return {...prev, year: Number(e.target.value), model: null}
                    })}
                    disabled={carOptions.man === null}>
                <option hidden>Year</option>
                {carOptions.man != null && Object.keys(cars[carOptions.man]).map((year, i) => <option value={year}
                                                                                                      key={i}>{year}</option>)}
            </select>

            <select name={'Model'}
                    value={carOptions.model === null ? "Model" : carOptions.model}
                    disabled={isNaN(carOptions.year)}
                    onChange={(e) => setCarOptions((prev) => {
                        return {...prev, model: e.target.value}
                    })}>
                <option hidden>Model</option>
                {carOptions.man !== null && !isNaN(carOptions.year)
                    && (cars[carOptions.man][carOptions.year]).map((modelObj, i) => <option value={modelObj.model}
                                                                                            key={i}>{modelObj.model}</option>)
                }
            </select>
        </div>


    </>
}


export function RegisterChauffeur() {
    const registrationSteps = [<Step1/>, <Step2/>]
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