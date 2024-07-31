import registrationCSS from './register.module.css'


export function RegisterPassenger() {

    return <form className={registrationCSS['registration']}>
        <div className={registrationCSS['username']}>
            <input className={registrationCSS['name']} name={"First Name"} type={'text'}
                   required
                   placeholder={"First Name"}/>
            <input className={registrationCSS['name']}
                   required
                   name={"Last Name"} type={'text'} placeholder={"Last Name"}/>
        </div>
        <input type={"email"} className={registrationCSS['email']}
               required
               name={"email"}
               placeholder={"example@company.com"}/>

        <input className={registrationCSS['email']}
               autoComplete={"true"}
               required
               name={"new-password"} type={'password'}
               placeholder={"Password"}/>
        <input className={registrationCSS['email']}
               autoComplete={"true"}
               required
               name={"new-password"} type={'password'}
               placeholder={"Repeat password"}/>


        <button className={registrationCSS['reg-btn']} type={"submit"}>Continue</button>
    </form>

}


export default RegisterPassenger