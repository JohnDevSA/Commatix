import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import { LoginResponse } from '@/types/auth'
import { $fetch } from 'ofetch'
import { useCookie } from '#app'

export function useAuth() {
    const authStore = useAuthStore()
    const router = useRouter()
    const tokenCookie = useCookie('auth_token')

    const login = async (credentials: { email: string; password: string }) => {
        try {
            // Replace this with your actual API call
            const response = await $fetch<LoginResponse>('/api/login', {
                method: 'POST',
                body: credentials,
            })

            if (response?.token) {
                tokenCookie.value = response.token
                authStore.setUser(response.user)
                authStore.setToken(response.token)
                return true
            }
        } catch (error) {
            console.error('Login failed:', error)
            return false
        }
    }

    const logout = async () => {
        tokenCookie.value = null
        authStore.clearStore()
        await router.push('/login')
    }

    const isAuthenticated = computed(() => !!authStore.token)

    return {
        login,
        logout,
        isAuthenticated,
        user: computed(() => authStore.user),
    }
}