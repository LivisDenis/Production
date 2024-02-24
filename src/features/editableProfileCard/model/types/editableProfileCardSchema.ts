import { Profile } from 'entities/Profile';

export enum ValidateProfileErrors {
    INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
    INCORRECT_AVATAR_LINK = 'INCORRECT_AVATAR_LINK',
    INCORRECT_CITY = 'INCORRECT_CITY',
    SERVER_ERROR = 'SERVER_ERROR',
    NO_DATA = 'NO_DATA',
}

export interface ProfileSchema {
    data?: Profile
    form?: Profile
    readonly: boolean
    error?: string
    isLoading: boolean
    validateError?: ValidateProfileErrors[]
}
