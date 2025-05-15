import type { User } from './user'

export interface LoginPayload {
    email: string
    password: string
}

export interface LoginResponse {
    token: string
    user: User
}
