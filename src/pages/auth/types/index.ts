export interface IUser {
    name: string;
    password: any
}

export interface TinitialState {
    serverError: string | null
    loading: boolean,
    auth: boolean
}

