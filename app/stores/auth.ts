import { defineStore } from 'pinia';
import type { User } from '@/types/user';

export const useAuthStore = defineStore('auth', {
    state: (): { user: User | null } => ({
        user: null
    }),
    actions: {
        setUser(user: User) {
            this.user = user
        },
        clearUser() {
            this.user = null;
        }
    },
    getters: {
        isLoggedIn: (state) => !!state.user,
        userRole: (state) => state.user?.role
    },
    persist: true
})