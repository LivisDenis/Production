import { Profile } from '@/entities/Profile';
import { ValidateProfileErrors } from '../consts/editableProfileCardConsts';

export interface ProfileSchema {
    data?: Profile
    form?: Profile
    readonly: boolean
    error?: string
    isLoading: boolean
    validateError?: ValidateProfileErrors[]
}
