export type UserRole = 'admin' | 'client' | 'agent'| 'tenant' | 'superadmin';

export interface User {
    id: number;
    name: string;
    email: string;
    role: UserRole;
}