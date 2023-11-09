import { Country } from 'shared/const/common';
import { Currency } from 'entities/CurrencySelect';

export interface Profile {
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
}
