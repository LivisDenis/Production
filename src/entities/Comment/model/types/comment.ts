import { User } from 'entities/User';

export interface Comment {
    id: number
    text: string
    user: User
}
