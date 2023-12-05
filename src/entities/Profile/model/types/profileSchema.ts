import { Country } from 'shared/const/common';
import { Currency } from 'entities/CurrencySelect';

export enum ValidateProfileErrors {
    INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
    INCORRECT_AVATAR_LINK = 'INCORRECT_AVATAR_LINK',
    INCORRECT_CITY = 'INCORRECT_CITY',
    SERVER_ERROR = 'SERVER_ERROR',
    NO_DATA = 'NO_DATA',
}
export interface Profile {
    id?: number;
    firstname?: string;
    lastname?: string;
    age?: number,
    currency?: Currency,
    country?: Country;
    city?: string,
    username?: string;
    avatar?: string;
}

export interface ProfileSchema {
    data?: Profile
    form?: Profile
    readonly: boolean
    error?: string
    isLoading: boolean
    validateError?: ValidateProfileErrors[]
}
