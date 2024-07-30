import userRegistrationCSS from './register.module.css'


export function RegisterPassenger() {

    return <form className={userRegistrationCSS['registration']}>
        <div className={userRegistrationCSS['username']}>
            <input className={userRegistrationCSS['name']} name={"First Name"} type={'text'}
                   placeholder={"First Name"}/>
            <input className={userRegistrationCSS['name']} name={"Last Name"} type={'text'} placeholder={"Last Name"}/>
        </div>
        <input type={"email"} className={userRegistrationCSS['email']} name={"email"}
               placeholder={"example@company.com"}/>

        <input className={userRegistrationCSS['email']}
               autoComplete={"true"}
               name={"new-password"} type={'password'}
               placeholder={"Password"}/>
        <input className={userRegistrationCSS['email']}
               autoComplete={"true"}

               name={"new-password"} type={'password'}
               placeholder={"Repeat password"}/>


        <button className={userRegistrationCSS['reg-btn']} type={"submit"}>Register</button>
    </form>

}


export default RegisterPassenger