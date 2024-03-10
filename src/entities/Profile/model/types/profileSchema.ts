import { Country } from '@/shared/const/common';
import { Currency } from '@/entities/CurrencySelect';

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
