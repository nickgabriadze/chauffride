export type UserDetails = {
    fName: string | null,
    lName: string | null,
    email: string | null,
    password: string | null,
    repeatedPassword: string | null
}
export type CarDetails = {
    car_man: string | null,
    car_prod_year: number,
    car_model: string | null
}

export type PassengerRegistration = UserDetails

export type ChauffeurRegistration =  UserDetails & CarDetails

