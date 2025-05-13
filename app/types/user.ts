export type UserRole = 'admin' | 'client' | 'agent';

export interface User {
    id: number;
    name: string;
    email: string;
    role: UserRole;
}