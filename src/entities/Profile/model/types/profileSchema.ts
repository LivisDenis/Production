import { Country, Currency } from 'shared/const/common';

export interface Profile {
    firstname: string;
    lastname: string;
    age: 22,
    currency: Currency,
    country: Country;
    city: string,
    username: string;
    avatar: string;
}

export interface ProfileSchema {
    data?: Profile
    readonly: boolean
    error?: string
    isLoading: boolean
}
