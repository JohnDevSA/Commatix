export default defineNuxtRouteMiddleware((to, from) => {
    const auth = useAuthStore()

    console.log('auth ==>',auth.user);

    // if (!auth.isLoggedIn && to.path === '/') {
    //     console.log('Middleware triggered now on auth screen',to)
    //     console.log('Middleware triggered', {
    //         isLoggedIn: auth.isLoggedIn,
    //         to: to.name
    //     })
    //     return navigateTo({ name: 'auth' })
    // }
    //
    // if (to.name === 'auth') {
    //     console.log('redirected to auth ---> now setting a auth.user ',auth.user);
    //     auth.setUser({
    //         id: 1,
    //         name: 'Dev User',
    //         email: 'dev@commatix.local',
    //         role: 'admin', // or whatever your type is
    //     })
    //
    //     console.log('auth.user has been set now', auth.user);
    //
    //     return navigateTo('/');// or wherever
    // }

    // console.log('Middleware triggered', {
    //     isLoggedIn: auth.isLoggedIn,
    //     to: to.name
    // })
})