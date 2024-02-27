export enum UserRoles {
    USER = 'USER',
    ADMIN = 'ADMIN',
    MANAGER = 'MANAGER',
}

export interface User {
    id: number
    username: string
    avatar?: string
    roles?: UserRoles[]
}

export interface UserSchema {
    authData?: User

    _inited: boolean
}
